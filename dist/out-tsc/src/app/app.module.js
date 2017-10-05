"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var angular_bootstrap_md_1 = require("angular-bootstrap-md");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var intro_ipservice_1 = require("./formulariocadastro/intro.ipservice");
var http_1 = require("@angular/common/http");
var material_1 = require("@angular/material");
var app_component_1 = require("./app.component");
var homepage_component_1 = require("./homepage/homepage.component");
var intro_component_1 = require("./homepage/intro/intro.component");
var featureposts_component_1 = require("./homepage/featureposts/featureposts.component");
var navbar_component_1 = require("./navbar/navbar.component");
var footer_component_1 = require("./footer/footer.component");
var blogpage_component_1 = require("./blogpage/blogpage.component");
var postpage_component_1 = require("./postpage/postpage.component");
var dialogcadastro_component_1 = require("./homepage/dialogcadastro/dialogcadastro.component");
var segundopost_component_1 = require("./segundopost/segundopost.component");
var formulariocadastro_component_1 = require("./formulariocadastro/formulariocadastro.component");
var postempresa_component_1 = require("./postempresa/postempresa.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            homepage_component_1.HomepageComponent,
            intro_component_1.IntroComponent,
            featureposts_component_1.FeaturepostsComponent,
            navbar_component_1.NavbarComponent,
            footer_component_1.FooterComponent,
            blogpage_component_1.BlogpageComponent,
            postpage_component_1.PostpageComponent,
            dialogcadastro_component_1.DialogcadastroComponent,
            segundopost_component_1.SegundopostComponent,
            formulariocadastro_component_1.FormulariocadastroComponent,
            postempresa_component_1.PostempresaComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            material_1.MatProgressSpinnerModule,
            material_1.MatDialogModule,
            material_1.MatSnackBarModule,
            http_1.HttpClientModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(app_routes_1.ROUTES),
            angular_bootstrap_md_1.MDBBootstrapModule.forRoot()
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA],
        providers: [intro_ipservice_1.IpService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map