import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AlumnoListComponent } from './components/alumno-list/alumno-list.component';
import { AlumnoAbmComponent } from './components/alumno-abm/alumno-abm.component';
import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';
import { TituloDirective } from './directives/titulo.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    AlumnoListComponent,
    AlumnoAbmComponent,
    NombreApellidoPipe,
    TituloDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
