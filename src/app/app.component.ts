import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
    // สำหรับการใช้งาน ในส่วนของ data base
    status;
    connectionObject = {name: "save-month.db", location: "default"}
    messageArray = [];
    // สำหรับการใช้งาน ในส่วนของ data base

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    public db: SQLite
  ) {
    this.initializeApp();
    this.platform.ready().then(
      () => {
        this.init();
      });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
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
