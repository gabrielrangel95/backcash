import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router'
import { ROUTES } from './app.routes';
import { IpService } from './homepage/intro/intro.ipservice'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IntroComponent } from './homepage/intro/intro.component';
import { FeaturepostsComponent } from './homepage/featureposts/featureposts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { PostpageComponent } from './postpage/postpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    IntroComponent,
    FeaturepostsComponent,
    NavbarComponent,
    FooterComponent,
    BlogpageComponent,
    PostpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ IpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
