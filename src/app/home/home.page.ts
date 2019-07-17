import { Component } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core/src/render3';
import { Platform, NavController } from '@ionic/angular';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    public db: SQLite,
    public contactService: ContactService,
  ) {
    // this.platform.ready().then(
    //   () => {
    //     this.init();
    //   });
  }

  // async init() {
  //   let connection = await this.db.create(this.connectionObject);
  //   let sql = "CREATE TABLE IF NOT EXISTS Messages (id INTEGER PRIMARY KEY AUTOINCREMENT, messege TEXT)";
  //   await connection.executeSql(sql,[]);
  //   this.status = "DB Ready";
  //   this.load();
  // }

  // async save(messege) {
  //   let sql = "INSERT INTO Messages (messege) VALUES (?)";

  //   try {
  //     let connection = await this.db.create(this.connectionObject)

  //     try {
  //       await connection.executeSql(sql,[messege]);
  //       this.load();
        
  //     } catch (error) {
  //       this.status = "Error insert new message: " + error.message;

  //     }

  //   } catch (error) {
  //     this.status = "Error connect to DB.";

  //   }

  // }

  // async load(){
  //   let sql = "SELECT * FROM Messages ORDER BY id DESC";

  //   try {
  //     let connection = await this.db.create(this.connectionObject)

  //     try {
  //       let result = await connection.executeSql(sql, []);
  //       this.status = "Load successful.";
  //       console.log('result',result);
  //       // loop through raw result
  //       if (result.rows.length > 0) {
          
  //         this.messageArray = [];

  //         for (let index = 0; index < result.rows.length; index++) {

  //           let row = result.rows.item(index);
  //           this.messageArray.push(row);
            
  //         }

  //         this.navCtrl.navigateForward('/add-salary')
  //         this.contactService.selectedContact = this.messageArray;

  //       } else {
  //         this.status = "load success emty data ";

  //       }

  //     } catch (error) {
  //       this.status = "Error load message: " + error.message;

  //     }

  //   } catch (error) {
  //     this.status = "Error connect to DB.";

  //   }

  // }

}
