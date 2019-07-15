import { Component, OnInit, NgZone } from '@angular/core';
/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

//Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  card_arr = [
    {subtitle:'',title:'ค่าใช้จ่าย เลี้ยงชีพ',img:'assets/card_1.jpg',detail:'เป็นจำนวนเงินทั้งหมด : ',value: 7500},
    {subtitle:'',title:'',img:'assets/icon_2.png',detail:'',value: 17500},
  ]

  onClickCard(){

    console.log('Click');

  }
  
  ngOnInit() {
  }

  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) {}

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

}
