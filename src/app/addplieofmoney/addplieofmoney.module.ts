import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddplieofmoneyPage } from './addplieofmoney.page';

const routes: Routes = [
  {
    path: '',
    component: AddplieofmoneyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddplieofmoneyPage]
})
export class AddplieofmoneyPageModule {}
