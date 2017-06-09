import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ToptenComponent } from './components/topten/topten.component';
import { ShardersComponent } from './components/sharders/sharders.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { routing, appRoutingProviders} from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToptenComponent,
    ShardersComponent,
    NewsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
