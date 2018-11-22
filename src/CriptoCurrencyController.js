//Controller
//Контроллер CriptoCurrencyController занимается обработкой событий и служит посредником между представлением и моделью.
'use strict';
class CriptoCurrencyController {

  constructor(CriptoCurrencyView, CriptoCurrencyModel) {
    this.CriptoCurrencyView = CriptoCurrencyView;
    this.CriptoCurrencyModel = CriptoCurrencyModel;
  }
}
