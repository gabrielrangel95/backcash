import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router'
import { ROUTES } from './app.routes';
import { IpService } from './formulariocadastro/intro.ipservice'
import {HttpClientModule} from '@angular/common/http'

import {MatProgressSpinnerModule, MatSnackBarModule, MatDialogModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IntroComponent } from './homepage/intro/intro.component';
import { FeaturepostsComponent } from './homepage/featureposts/featureposts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { PostpageComponent } from './postpage/postpage.component';
import { DialogcadastroComponent } from './homepage/dialogcadastro/dialogcadastro.component';
import { SegundopostComponent } from './segundopost/segundopost.component';
import { FormulariocadastroComponent } from './formulariocadastro/formulariocadastro.component';
import { PostempresaComponent } from './postempresa/postempresa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    IntroComponent,
    FeaturepostsComponent,
    NavbarComponent,
    FooterComponent,
    BlogpageComponent,
    PostpageComponent,
    DialogcadastroComponent,
    SegundopostComponent,
    FormulariocadastroComponent,
    PostempresaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ IpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
