import { Component, OnInit } from '@angular/core';

import * as _ from 'parse';
var Parse = require('parse');

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  public submited = false;

  ngOnInit(){

  }
  constructor(){}

}
