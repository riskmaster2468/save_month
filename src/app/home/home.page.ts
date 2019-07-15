import { Component } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  signIn(username, password) {
    console.log('Click Butt', username, password)
    console.error('Click Butt', username, password)
  }
}
