import './index.scss'
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import angular from 'angular'
import uiRouter from 'angular-ui-router'
import {appComponent} from './components/app/app.component'
import {contactComponent} from './components/contact/contact.component'
import {menuComponent} from './components/menu/menu.component'
import {navComponent} from './components/navbar/navbar'
console.log("index");

angular.module("client", [uiRouter])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/menu');
        $stateProvider
            .state("menu", {
                url: '/menu',
                component: "menu"//главный компонет
            })
            .state("contact", {
                url: '/contact',
                component: "contact"//главный компонет
            })
    })
    .component('app', appComponent)
    .component('contact', contactComponent)
    .component('menu', menuComponent)
    .component('navBar', navComponent);


