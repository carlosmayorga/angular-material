import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';

import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../components/material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class PagesModule { }
