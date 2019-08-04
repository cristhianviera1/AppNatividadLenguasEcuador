import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecursosPage } from './recursos.page';
import {LoginPage} from '../login/login.page'

const routes: Routes = [
  {
    path: '',
    component: RecursosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPage,
    RouterModule.forChild(routes)
  ],
  declarations: [RecursosPage]
})
export class RecursosPageModule {}
