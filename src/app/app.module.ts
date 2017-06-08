import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ToptenComponent } from './components/topten/topten.component';
import { SharderComponent } from './components/sharders/sharders.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToptenComponent,
    SharderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
