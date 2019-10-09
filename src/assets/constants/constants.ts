const REGEXP: any = {
  NAME: /^[a-zA-ZÁ-Úá-úÀ-Ùà-ù]{1}[a-zA-ZÁ-Úá-úÀ-Ùà-ù.\s]{2,127}$/,
  SURNAME: /^[a-zA-ZÁ-Úá-úÀ-Ùà-ù]{1}[a-zA-ZÁ-Úá-úÀ-Ùà-ù.\s]{2,255}$/,
  EMAIL: /^[a-zA-ZÁ-Úá-úÀ-Ùà-ù_.]{2,256}@[a-zA-ZÁ-Úá-úÀ-Ùà-ù]{2,256}.[a-zA-ZÁ-Úá-úÀ-Ùà-ù]{2,25}$/,
  DIRECTION: /^([cC]\/)?[a-zA-ZÁ-Úá-úÀ-Ùà-ù0-9\s]{5,256}$/,
  CPES: /^((0[1-9])|([1-4]\d)|(5[0-2]))\d{3}$/,
  CPUSA: /^\d{5}-\d{4}$/,
  LANDPHONEES: /^(\+34|0034)?[89]\d{8}$/,
  LANDPHONEUSA: /^(1\s?)?((([0-9]{3}))|[0-9]{3})[\s-]?[\0-9]{3}[\s-]?[0-9]{4}$/,
  DATEES: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
  DATEUSA: /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/
};

const IDS: any = {
  INPUTS: {
    NAME: 'name',
    SURNAME: 'surname',
    EMAIL: 'email',
    DIRECTION: 'direction',
    CP: 'cp',
    LANDPHONE: 'landphone',
    DATE: 'date'
  },
  DIVS: {
    NAME: 'resultName',
    SURNAME: 'resultSurname',
    EMAIL: 'resultEmail',
    DIRECTION: 'resultDirection',
    CP: 'resultCp',
    LANDPHONE: 'resultLandphone',
    DATE: 'resultDate'
  }
};

const HELPERCHANGECOUNTRY: any = {
  ES: 'USA',
  USA: 'ES'
};
export { REGEXP, IDS, HELPERCHANGECOUNTRY };
