"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var intro_ipservice_1 = require("./intro.ipservice");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var Parse = require('parse');
var FormulariocadastroComponent = (function () {
    function FormulariocadastroComponent(ipService, fb, snackBar) {
        this.ipService = ipService;
        this.fb = fb;
        this.snackBar = snackBar;
        this.type = "B2C";
    }
    FormulariocadastroComponent.prototype.checkBoxVerify = function () {
        if (this.checkboxValue == false) {
            this.type = "B2C";
        }
        else {
            this.type = "B2B";
        }
    };
    FormulariocadastroComponent.prototype.openSnackBarSalvando = function () {
        this.snackBar.open('Salvando cadastro...', 'OK', {
            duration: 1500,
        });
    };
    FormulariocadastroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ipService.getIp().subscribe(function (data) {
            console.log(data);
            console.log("Ip: " + data.ip);
            _this.ip = data.ip.toString();
        }, function (err) {
            console.log("Error occured.");
        });
        this.getDate();
        this.myForm = this.fb.group({
            name: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.email])],
            checkbox: [false]
        });
    };
    FormulariocadastroComponent.prototype.onSubmit = function (form) {
        ga('send', 'event', 'formulario', 'clicar', 'cadastro');
        this.openSnackBarSalvando();
        console.log('Valid?', form.valid); // true or false
        console.log('Name', form.value.name);
        console.log('Email', form.value.email);
        console.log('checkbox', form.value.checkbox);
        this.username = form.value.name;
        this.email = form.value.email;
        this.checkboxValue = form.value.checkbox;
        this.checkBoxVerify();
        this.saveLead();
        this.myForm.reset();
    };
    FormulariocadastroComponent.prototype.getDate = function () {
        var date = new Date();
        var dia = date.getDate();
        var stringdia;
        if (dia < 10) {
            stringdia = "0" + dia;
        }
        else {
            stringdia = dia;
        }
        var mes = date.getMonth() + 1;
        var stringmes;
        if (mes < 10) {
            stringmes = "0" + mes;
        }
        else {
            stringmes = mes;
        }
        var ano = date.getFullYear();
        var horas = new Date().getHours();
        var stringhoras;
        if (horas < 10) {
            stringhoras = "0" + horas;
        }
        else {
            stringhoras = horas;
        }
        var minutos = new Date().getMinutes();
        var stringminutos;
        if (minutos < 10) {
            stringminutos = "0" + minutos;
        }
        else {
            stringminutos = minutos;
        }
        var segundos = new Date().getSeconds();
        var stringsegundos;
        if (segundos < 10) {
            stringsegundos = "0" + segundos;
        }
        else {
            stringsegundos = segundos;
        }
        this.date_time = ano + "-" + stringmes + "-" + stringdia + " " + stringhoras + ":" + stringminutos + ":" + stringsegundos;
    };
    FormulariocadastroComponent.prototype.saveLead = function () {
        var Lead = Parse.Object.extend("Leads");
        var lead = new Lead();
        console.log('email', this.email);
        console.log("nome", this.username);
        console.log("ip", this.ip);
        console.log("data_hora", this.date_time);
        console.log("tipo", this.type);
        lead.set("email", this.email);
        lead.set("nome", this.username);
        lead.set("ip", this.ip);
        lead.set("data_hora", this.date_time);
        lead.set("tipo", this.type);
        lead.save(null, {
            success: function (lead) {
                // Execute any logic that should take place after the object is saved.
                alert('Cadastrado com sucesso!');
                this.myForm.reset();
                this.openSnackBarCadastrado();
            },
            error: function (lead, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Erro ao cadastrar! ' + error.message);
            }
        });
    };
    return FormulariocadastroComponent;
}());
FormulariocadastroComponent = __decorate([
    core_1.Component({
        selector: 'app-formulariocadastro',
        templateUrl: './formulariocadastro.component.html',
        styleUrls: ['./formulariocadastro.component.scss']
    }),
    __metadata("design:paramtypes", [intro_ipservice_1.IpService, forms_1.FormBuilder, material_1.MdSnackBar])
], FormulariocadastroComponent);
exports.FormulariocadastroComponent = FormulariocadastroComponent;
//# sourceMappingURL=formulariocadastro.component.js.map