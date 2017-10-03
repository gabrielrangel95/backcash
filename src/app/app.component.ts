import { Component } from '@angular/core';

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
  title = 'app';
}
