import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { CharcoalsComponent } from './charcoals/charcoals.component';
import { DrawingsComponent } from './drawings/drawings.component';
import { WatercolorsComponent } from './watercolors/watercolors.component';
import { GhatsComponent } from './ghats/ghats.component';
import { FigurativesComponent } from './figuratives/figuratives.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PaintingsComponent,
    CharcoalsComponent,
    DrawingsComponent,
    WatercolorsComponent,
    GhatsComponent,
    FigurativesComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
