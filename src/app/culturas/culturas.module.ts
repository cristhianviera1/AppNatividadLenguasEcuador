import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CulturasPage } from './culturas.page';
import { PipesModule } from '../pipes/pipes.module';
import { TruncateModule } from 'ng2-truncate';

const routes: Routes = [
  {
    path: '',
    component: CulturasPage
  }
];

@NgModule({
  imports: [
    TruncateModule,
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CulturasPage]
})
export class CulturasPageModule {}
