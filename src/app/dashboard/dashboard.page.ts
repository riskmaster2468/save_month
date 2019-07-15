import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  card_arr = [
    {subtitle:'',title:'ค่าใช้จ่าย เลี้ยงชีพ',img:'assets/card_1.jpg',detail:'เป็นจำนวนเงินทั้งหมด : 7,500 ฿'},
    {subtitle:'',title:'',img:'assets/icon_2.png',detail:''},
  ]

  constructor() { }

  ngOnInit() {
  }

  // onClickCard(){

  //   console.log('Click');

  // }

}
