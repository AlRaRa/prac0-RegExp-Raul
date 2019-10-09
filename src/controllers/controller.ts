import { Service } from '../services/service';
import { View } from '../view/viewController';

export class Controller {
  service: Service;
  view: View;

  constructor(service: Service, view: View) {
    this.service = service;
    this.view = view;
    this.view.addEventOnChangeSelect();
    this.view.addEvents(this.check);
  }

  check = (value: string, nameRegExp: string) => {
    return value.length >= 3
      ? this.service.checkTxtInRegExp(nameRegExp, value)
        ? 'check'
        : 'times'
      : 'reset';
  };
}
