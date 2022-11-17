import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { VistaReservasComponent } from './components/vista-reservas/vista-reservas.component';
import { ReservaParqueoComponent } from './components/reserva-parqueo/reserva-parqueo.component';
import { AdminUsuariosComponent } from './components/admin-usuarios/admin-usuarios.component';
import { AdminLandingComponent } from './components/admin-landing/admin-landing.component';
import { AdminEspaciosComponent } from './components/admin-espacios/admin-espacios.component';
import { AdminParqueosComponent } from './components/admin-parqueos/admin-parqueos.component';


const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vista_reservas', component: VistaReservasComponent },
  { path: 'reserva_parqueos', component: ReservaParqueoComponent },
  { path: 'admin_usuarios', component: AdminUsuariosComponent },
  { path: 'admin_landing', component: AdminLandingComponent },
  { path: 'admin_espacios', component: AdminEspaciosComponent },
  { path: 'admin_parqueos', component: AdminParqueosComponent },

  // otherwise redirect to index
  { path: '**', redirectTo: 'index', pathMatch: 'full' }
];

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
    AdminParqueosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

