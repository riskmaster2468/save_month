import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Platform, NavController } from '@ionic/angular';
import { SQLite } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.page.html',
  styleUrls: ['./add-salary.page.scss'],
})
export class AddSalaryPage implements OnInit {

    // สำหรับการใช้งาน ในส่วนของ data base
    status;
    connectionObject = {name: "save-month.db", location: "default"}
    messageArray = [];
    // สำหรับการใช้งาน ในส่วนของ data base

  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    public db: SQLite,
    public contactService: ContactService,
  ) {
    this.platform.ready().then(
      () => {
        this.init();
      });
  }

  ngOnInit() {

  }

  skipPage() {
    this.navCtrl.navigateForward('/dashboard');
  }

  async init() {
    let connection = await this.db.create(this.connectionObject);
    let sql = "CREATE TABLE IF NOT EXISTS Messages (id INTEGER PRIMARY KEY AUTOINCREMENT, messege TEXT)";
    await connection.executeSql(sql,[]);
    this.status = "DB Ready";
    this.load();
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

          for (let index = 0; index < result.rows.length; index++) {

            let row = result.rows.item(index);
            this.messageArray.push(row);
            
          }

          this.navCtrl.navigateForward('/dashboard')
          this.contactService.selectedContact = this.messageArray;

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
