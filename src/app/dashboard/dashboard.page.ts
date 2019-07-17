import { Component, OnInit, NgZone } from '@angular/core';
/* Imports for armchart*/
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
/* Imports for armchart*/
import { NavController, Platform } from '@ionic/angular';
import { SQLite } from '@ionic-native/sqlite/ngx';

//Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  // สำหรับการใช้งาน ในส่วนของ data base
  status;
  connectionObject = {name: "save-month.db", location: "default"}
  messageArray = [];
  // สำหรับการใช้งาน ในส่วนของ data base
  card_arr = [
    {subtitle:'',title:'ค่าใช้จ่าย เลี้ยงชีพ',img:'assets/card_1.jpg',detail:'เป็นจำนวนเงินทั้งหมด : ',value: 7500},
    {subtitle:'',title:'',img:'assets/icon_2.png',detail:'',value: 17500},
  ]

  constructor(
    private zone: NgZone,
    public navCtrl: NavController,
    public platform: Platform,
    public db: SQLite
  ) {
    this.platform.ready().then(
      () => {
        this.init();
      });
  }

  async init() {
    let connection = await this.db.create(this.connectionObject);
    let sql = "CREATE TABLE IF NOT EXISTS Messages (id INTEGER PRIMARY KEY AUTOINCREMENT, messege TEXT)";
    await connection.executeSql(sql,[]);
    this.status = "DB Ready";
    this.load();
  }

  onClickCard(){
    console.log('Click');
  }
  
  ngOnInit() {
  }

  private chart: am4charts.XYChart;

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {

      let chart = am4core.create("chartdiv", am4charts.PieChart3D);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

      chart.legend = new am4charts.Legend();

      chart.data = this.card_arr;

      let series = chart.series.push(new am4charts.PieSeries3D());
      series.dataFields.value = "value";
      series.dataFields.category = "title";

    });
  }

  async save(messege) {
    let sql = "INSERT INTO Messages (messege) VALUES (?)";

    try {
      let connection = await this.db.create(this.connectionObject)

      try {
        await connection.executeSql(sql,[messege]);
        this.load();
        
      } catch (error) {
        this.status = "Error insert new message: " + error.message;

      }

    } catch (error) {
      this.status = "Error connect to DB.";

    }

  }

  async load(){
    let sql = "SELECT * FROM Messages ORDER BY id DESC";

    try {
      let connection = await this.db.create(this.connectionObject)

      try {
        let result = await connection.executeSql(sql, []);
        this.status = "Load successful.";
        console.log('result',result);
        // loop through raw result
        if (result.rows.length > 0) {
          
          this.messageArray = [];

          this.messageArray = result;

        } else {
          this.status = "load success emty data ";

        }

      } catch (error) {
        this.status = "Error load message: " + error.message;

      }

    } catch (error) {
      this.status = "Error connect to DB.";

    }

  }

}
