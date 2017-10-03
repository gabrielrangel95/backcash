import { Component, OnInit } from '@angular/core';
import { IpService } from './intro.ipservice'


import * as _ from 'parse';
var Parse = require('parse');

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  username: string;
  email: string;
  ip: string;
  type: string;
  date_time: string;
  checkboxValue: boolean;

  newFunction(){
    if(this.checkboxValue == false){
      this.type="B2C"
    }else{
      this.type="B2B"
    }

  }

  constructor(private ipService : IpService) {
    this.type = "B2C";

  }

  ngOnInit() {
    this.ipService.getIp().subscribe(
      data=> {
        console.log(data);
        console.log("Ip: " + data.ip);
        this.ip = data.ip.toString();
      },
      err => {
        console.log("Error occured.")

      }
    )

    this.getDate();
  }

  getDate(){
    var date = new Date();

    var dia = date.getDate();
    var stringdia;
    if(dia<10){
      stringdia = "0"+dia
    }else{
      stringdia = dia;
    }

    var mes = date.getMonth()+1;
    var stringmes;
    if(mes<10){
        stringmes="0"+mes;
    }else{
      stringmes = mes;
    }


    var ano = date.getFullYear();

    var horas = new Date().getHours();
    var stringhoras;
    if(horas<10){
      stringhoras = "0"+horas
    }else{
      stringhoras = horas;
    }

    var minutos = new Date().getMinutes();
    var stringminutos;
    if(minutos<10){
      stringminutos = "0"+minutos;
    }else{
      stringminutos = minutos;
    }

    var segundos = new Date().getSeconds();
    var stringsegundos;
    if(segundos<10){
      stringsegundos = "0"+segundos;
    }else{
      stringsegundos = segundos;
    }

    this.date_time = ano+"-"+stringmes+"-"+stringdia+" "+stringhoras+":"+stringminutos+":"+stringsegundos;
  }

  onSubmitClick(){
    console.log(this.username)
    console.log(this.email)
    console.log(this.ip)

    var Lead = Parse.Object.extend("Leads");
    var lead = new Lead();

    lead.set("email" , this.email);
    lead.set("nome" , this.username);
    lead.set("ip", this.ip);
    lead.set("data_hora", this.date_time);
    lead.set("tipo",this.type);
    
    lead.save(null, {
      success: function(lead) {
      // Execute any logic that should take place after the object is saved.
      alert('Cadastrado com sucesso!');
      },
      error: function(lead, error) {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and message.
      alert('Erro ao cadastrar! ' + error.message);
      }
    });
  }

}
