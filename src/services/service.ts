import { REGEXP } from '../assets/constants/constants';

export class Service {
  checkTxtInRegExp = (regExpName: string, txtInput: string): boolean =>
    REGEXP[regExpName].test(txtInput);
}
