import { IDS, HELPERCHANGECOUNTRY } from '../assets/constants/constants';

export class View {
  view: Document;
  GUI: any;
  stringHtmlToPrint: any;
  checkerCountry: string;
  checkByCountry: string[];

  constructor(view: Document) {
    this.view = view;
    this.checkerCountry = 'ES';
    this.checkByCountry = ['CP', 'LANDPHONE', 'DATE'];
    this.GUI = {
      INPUTS: {
        NAME: this.$(IDS.INPUTS.NAME),
        SURNAME: this.$(IDS.INPUTS.SURNAME),
        EMAIL: this.$(IDS.INPUTS.EMAIL),
        DIRECTION: this.$(IDS.INPUTS.DIRECTION),
        CP: this.$(IDS.INPUTS.CP),
        LANDPHONE: this.$(IDS.INPUTS.LANDPHONE),
        DATE: this.$(IDS.INPUTS.DATE)
      },
      RESULT: {
        NAME: this.$(IDS.DIVS.NAME),
        SURNAME: this.$(IDS.DIVS.SURNAME),
        EMAIL: this.$(IDS.DIVS.EMAIL),
        DIRECTION: this.$(IDS.DIVS.DIRECTION),
        CP: this.$(IDS.DIVS.CP),
        LANDPHONE: this.$(IDS.DIVS.LANDPHONE),
        DATE: this.$(IDS.DIVS.DATE)
      }
    };
    this.stringHtmlToPrint = {
      reset: '',
      times: '<i class="fas fa-times"></i>',
      check: '<i class="fas fa-check"></i>'
    };
  }

  $ = (id: string) => this.view.getElementById(id);

  addEventOnChangeSelect = () => {
    this.$('selectCountry').addEventListener(
      'change',
      () => {
        this.checkerCountry = HELPERCHANGECOUNTRY[this.checkerCountry];
        this.checkAll();
      },
      false
    );
  };

  addEvents = (handlerCheck: any) => {
    Object.keys(this.GUI.INPUTS).map(key => {
      this.GUI.INPUTS[key].addEventListener(
        'input',
        (event: InputEvent) => {
          const { name, nameRegExp, value } = this.getData(event.srcElement);
          const stringHtml = this.stringHtmlToPrint[
            handlerCheck(value, nameRegExp)
          ];
          this.print(name, stringHtml);
        },
        false
      );
    });
  };

  getData = (element: any /* HTMLInputElement */) => {
    const name = element.name;
    const nameRegExp = this.checkByCountry.find(inputName => inputName == name)
      ? name + this.checkerCountry
      : name;
    const value = element.value;
    return { name, nameRegExp, value };
  };

  print = (name: string, stringToPrint: string) => {
    this.GUI.RESULT[name].innerHTML = stringToPrint;
  };

  checkAll = () => {
    Object.keys(this.GUI.INPUTS).map(key => {
      this.GUI.INPUTS[key].dispatchEvent(new Event('input'));
    });
  };
}
