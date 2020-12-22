import { DemoNgZorroAntdModule } from './shared/antmodule';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirtPageComponent } from './firt-page/firt-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { HttpClientModule } from '@angular/common/http';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    FirtPageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    NzDropDownModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
