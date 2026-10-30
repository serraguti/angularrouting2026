import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MusicaComponent } from './components/musica-component/musica-component';
import { CineComponent } from './components/cine-component/cine-component';
import { HomeComponent } from './components/home-component/home-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { FormsModule } from '@angular/forms';
import { NumerosParesComponent } from './components/numeros-pares-component/numeros-pares-component';
import { TablaMultiplicarComponent } from './components/tabla-multiplicar-component/tabla-multiplicar-component';
import { SelectNumerosDoblesComponent } from './components/select-numeros-dobles-component/select-numeros-dobles-component';

@NgModule({
  declarations: [
    App,
    MusicaComponent,
    CineComponent,
    HomeComponent,
    NotFoundComponent,
    MenuComponent,
    NumerosParesComponent,
    TablaMultiplicarComponent,
    SelectNumerosDoblesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
