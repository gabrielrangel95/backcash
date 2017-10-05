"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var homepage_component_1 = require("./homepage/homepage.component");
var blogpage_component_1 = require("./blogpage/blogpage.component");
var postpage_component_1 = require("./postpage/postpage.component");
var segundopost_component_1 = require("./segundopost/segundopost.component");
var postempresa_component_1 = require("./postempresa/postempresa.component");
exports.ROUTES = [
    { path: '', component: homepage_component_1.HomepageComponent },
    { path: 'home', component: homepage_component_1.HomepageComponent },
    { path: 'blog', component: blogpage_component_1.BlogpageComponent },
    { path: 'post', component: postpage_component_1.PostpageComponent },
    { path: 'secondpost', component: segundopost_component_1.SegundopostComponent },
    { path: 'empresa', component: postempresa_component_1.PostempresaComponent }
];
//# sourceMappingURL=app.routes.js.map