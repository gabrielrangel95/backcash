import { Component } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
declare let ga: Function;

// Initialize the server
import * as _ from 'parse';
var Parse = require('parse');
Parse.initialize("78436grBFH24874BHJFv9479gshdjfb92486f");
Parse.serverURL = 'http://backcash.herokuapp.com/parse'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }
}
