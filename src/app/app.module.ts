import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallHorizontalCardComponent } from './components/small-horizontal-card/small-horizontal-card.component';
import { SmallVerticalCardComponent } from './components/small-vertical-card/small-vertical-card.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BigCardComponent,
    SmallHorizontalCardComponent,
    SmallVerticalCardComponent,
    HomeComponent,
    MenuTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
