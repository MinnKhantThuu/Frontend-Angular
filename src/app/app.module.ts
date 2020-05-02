import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {appRoutes} from './sysgen/routes';
import {LocalService} from './sysgen/local.service';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    DetailComponent
  ],
  imports: [
    appRoutes,
    BrowserModule,
    HttpClientModule
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
