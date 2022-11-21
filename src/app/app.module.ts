import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { appRoutingProviders, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { VistaReservasComponent } from './components/vista-reservas/vista-reservas.component';
import { ReservaParqueoComponent } from './components/reserva-parqueo/reserva-parqueo.component';
import { AdminUsuariosComponent } from './components/admin-usuarios/admin-usuarios.component';
import { AdminLandingComponent } from './components/admin-landing/admin-landing.component';
import { AdminEspaciosComponent } from './components/admin-espacios/admin-espacios.component';
import { AdminParqueosComponent } from './components/admin-parqueos/admin-parqueos.component';
import { AdminReservasComponent } from './components/admin-reservas/admin-reservas.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    VistaReservasComponent,
    ReservaParqueoComponent,
    AdminUsuariosComponent,
    AdminLandingComponent,
    AdminEspaciosComponent,
    AdminParqueosComponent,
    AdminReservasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

