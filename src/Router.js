'use strict';
import * as d3 from 'd3';
import CriptoCurrencyModel from './CriptoCurrencyModel.js';
import CriptoCurrencyView from './CriptoCurrencyView.js';

class Router {
  constructor() {
    this.homePage = document.getElementById('home-page');
    this.currencyTable = document.getElementById('table-container-page');
    this.graphics = document.getElementById('graphics-page');
    this.developers = document.getElementById('developers-page');
    this.activeElement = null;
    window.addEventListener("hashchange", this.chooseRoute.bind(this), false);
  }

  chooseRoute(event) {
  switch(document.location.hash){
    case '#home':
            if (document.getElementsByClassName('active-element').length) {
              this.activeElement = document.getElementsByClassName('active-element')[0];
              this.activeElement.classList.toggle('active-element');
            } else {
              this.activeElement = null;
            }
            this.homePage.classList.toggle('active-element');
      break;
    case '#currencyTable':
            if (document.getElementsByClassName('active-element').length) {
              this.activeElement = document.getElementsByClassName('active-element')[0];
              this.activeElement.classList.toggle('active-element');
            } else {
              this.activeElement = null;
            }
            this.currencyTable.classList.toggle('active-element');
      break;
    case '#graphics':
            if (document.getElementsByClassName('active-element').length) {
              this.activeElement = document.getElementsByClassName('active-element')[0];
              this.activeElement.classList.toggle('active-element');
            } else {
              this.activeElement = null;
            }
            this.graphics.classList.toggle('active-element');
      break;
    case '#developers':
            if (document.getElementsByClassName('active-element').length) {
              this.activeElement = document.getElementsByClassName('active-element')[0];
              this.activeElement.classList.toggle('active-element');
            } else {
              this.activeElement = null;
            }
            this.developers.classList.toggle('active-element');
      break;

    }
  }
}

export default Router;
