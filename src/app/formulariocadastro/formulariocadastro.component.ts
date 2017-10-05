import { Component, OnInit } from '@angular/core';
import { IpService } from './intro.ipservice'
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import {MdSnackBar} from '@angular/material';

import * as _ from 'parse';
var Parse = require('parse');

declare let ga: Function;

@Component({
  selector: 'app-formulariocadastro',
  templateUrl: './formulariocadastro.component.html',
  styleUrls: ['./formulariocadastro.component.scss']
})
export class FormulariocadastroComponent implements OnInit {

  username: string;
  email: string;
  ip: string;
  type: string;
  date_time: string;
  checkboxValue: boolean;

  myForm: FormGroup;

  checkBoxVerify(){
    if(this.checkboxValue == false){
      this.type="B2C"
    }else{
      this.type="B2B"
    }

  }

  constructor(private ipService : IpService, private fb: FormBuilder, public snackBar: MdSnackBar) {
    this.type = "B2C";

  }

  openSnackBarSalvando() {
    this.snackBar.open('Salvando cadastro...', 'OK', {
      duration: 1500,
   }  );
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

    this.myForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      checkbox: [false]
    })
  }

  onSubmit(form: FormGroup) {
    ga('send', 'event', 'formulario', 'clicar', 'cadastro');
    this.openSnackBarSalvando();
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('checkbox', form.value.checkbox);

    this.username = form.value.name;
    this.email = form.value.email
    this.checkboxValue = form.value.checkbox;

    this.checkBoxVerify();
    this.saveLead();
    this.myForm.reset();
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

  saveLead(){

    var Lead = Parse.Object.extend("Leads");
    var lead = new Lead();

    console.log('email', this.email);
    console.log("nome" , this.username);
    console.log("ip", this.ip);
    console.log("data_hora", this.date_time);
    console.log("tipo",this.type);

    lead.set("email" , this.email);
    lead.set("nome" , this.username);
    lead.set("ip", this.ip);
    lead.set("data_hora", this.date_time);
    lead.set("tipo",this.type);

    lead.save(null, {
      success: function(lead) {
      // Execute any logic that should take place after the object is saved.
      alert('Cadastrado com sucesso!');
      this.myForm.reset();
      this.openSnackBarCadastrado();
      },
      error: function(lead, error) {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and message.
      alert('Erro ao cadastrar! ' + error.message);
      }
    });
  }
}
