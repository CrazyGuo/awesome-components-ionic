import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ButtonsPage } from './buttons.page';
import { FivButtonsModule } from '@fivethree/core';

const routes: Routes = [
  {
    path: '',
    component: ButtonsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FivButtonsModule
  ],
  declarations: [ButtonsPage]
})
export class ButtonsPageModule {}
