import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameItemComponent } from './game-item/game-item.component';
import { ContentComponent } from './content/content.component';
import { LogoComponent } from './logo/logo.component';
import { BienvenidosComponent } from './bienvenidos/bienvenidos.component';
import { LibreriaComponent } from './libreria/libreria.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SlideshowComponent,
    NavBarComponent,
    GameListComponent,
    GameItemComponent,
    ContentComponent,
    LogoComponent,
    BienvenidosComponent,
    LibreriaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
