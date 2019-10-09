import { Service } from './service';

const service = new Service();
describe('test checkTxtInRegExp method', () => {
  describe('to regExp Name', () => {
    describe('in true case', () => {
      //new Array(129).join('a') 129 por que despues al hacerle el join se ponen 128 a porque son los huecos en mitad que hay
      it.each`
        txt
        ${'Rau'}
        ${'Jose Juan'}
        ${'J. Antonio'}
        ${new Array(129).join('a')}
      `(`$txt should true`, ({ txt }) => {
        const value = service.checkTxtInRegExp('NAME', txt);
        expect(value).toBe(true);
      });
    });
    describe('in false case', () => {
      it.each`
        txt
        ${'Ra'}
        ${' Jose Juan'}
        ${'+. Antonio'}
        ${233}
        ${new Array(130).join('a')}
      `(`$txt should false`, ({ txt }) => {
        const value = service.checkTxtInRegExp('NAME', txt);
        expect(value).toBe(false);
      });
    });
  });

  describe('to regExp Surname', () => {
    describe('in true case', () => {
      it.each`
        txt
        ${'Rau'}
        ${'Jose Juan'}
        ${'J. Antonio'}
        ${new Array(257).join('a')}
      `(`$txt should true`, ({ txt }) => {
        const value = service.checkTxtInRegExp('SURNAME', txt);
        expect(value).toBe(true);
      });
    });
    describe('in false case', () => {
      it.each`
        txt
        ${'Ra'}
        ${' Jose Juan'}
        ${233}
        ${new Array(258).join('a')}
      `(`$txt should true`, ({ txt }) => {
        const value = service.checkTxtInRegExp('SURNAME', txt);
        expect(value).toBe(false);
      });
    });
  });

  describe('to regExp Email', () => {
    describe('in true case', () => {
      it.each`
        txt
        ${'Ra@dm.cm'}
        ${'Ra.@dm.cm'}
        ${'Ra_@dm.cm'}
        ${new Array(257).join('a') + '@cas.com'}
        ${'ca@' + new Array(257).join('a') + '.com'}
        ${'ca@as.' + new Array(26).join('a')}
      `(`$txt should true`, ({ txt }) => {
        const value = service.checkTxtInRegExp('EMAIL', txt);
        expect(value).toBe(true);
      });
    });
    describe('in false case', () => {
      it.each`
        txt
        ${'Ra@d_m.cm'}
        ${'Ra@dm._cm'}
        ${'R@dm.cm'}
        ${'Rm@d.cm'}
        ${'Rm@dm.m'}
        ${new Array(258).join('a') + '@cas.com'}
        ${'ca@' + new Array(258).join('a') + '.com'}
        ${'ca@as.' + new Array(27).join('a')}
      `(`$txt should false`, ({ txt }) => {
        const value = service.checkTxtInRegExp('EMAIL', txt);
        expect(value).toBe(false);
      });
    });
  });

  describe('to regExp Direction', () => {
    describe('in true case', () => {
      it.each`
        txt
        ${'C/Corre'}
        ${'Calle Arroyo 54'}
        ${'Corre'}
        ${new Array(257).join('a')}
      `(`$txt should true`, ({ txt }) => {
        const value = service.checkTxtInRegExp('DIRECTION', txt);
        expect(value).toBe(true);
      });
    });
    describe('in false case', () => {
      it.each`
        txt
        ${'C/Raul'}
        ${'Raul'}
        ${new Array(258).join('a')}
      `(`$txt should false`, ({ txt }) => {
        const value = service.checkTxtInRegExp('DIRECTION', txt);
        expect(value).toBe(false);
      });
    });
  });

  describe('to regExp CPES', () => {
    describe('in true case', () => {
      it.each`
        txt
        ${'01000'}
        ${'52999'}
      `(`$txt should true`, ({ txt }) => {
        const value = service.checkTxtInRegExp('CPES', txt);
        expect(value).toBe(true);
      });
    });
    describe('in false case', () => {
      it.each`
        txt
        ${'00999'}
        ${'53000'}
        ${'aaaaa'}
        ${56234}
      `(`$txt should false`, ({ txt }) => {
        const value = service.checkTxtInRegExp('CPES', txt);
        expect(value).toBe(false);
      });
    });
  });

  describe('to regExp CPUSA', () => {
    describe('in true case', () => {
      it.each`
        txt
        ${'00000-0000'}
        ${'99999-9999'}
      `(`$txt should true`, ({ txt }) => {
        const value = service.checkTxtInRegExp('CPUSA', txt);
        expect(value).toBe(true);
      });
    });
    describe('in false case', () => {
      it.each`
        txt
        ${'0000-0000'}
        ${'000000-0000'}
        ${'00000-00000'}
        ${'00000-000'}
        ${'aa'}
        ${56234}
      `(`$txt should false`, ({ txt }) => {
        const value = service.checkTxtInRegExp('CPUSA', txt);
        expect(value).toBe(false);
      });
    });
  });

  describe('to regExp LAND PHONE ES', () => {
    describe('in true case', () => {
      it.each`
        txt
        ${'951123123'}
        ${'+34951123123'}
        ${'0034951123123'}
        ${'899995123'}
      `(`$txt should true`, ({ txt }) => {
        const value = service.checkTxtInRegExp('LANDLINEES', txt);
        expect(value).toBe(true);
      });
    });
    describe('in false case', () => {
      it.each`
        txt
        ${'798678678'}
        ${'34951123123'}
        ${'+3400000-00000'}
      `(`$txt should false`, ({ txt }) => {
        const value = service.checkTxtInRegExp('LANDLINEES', txt);
        expect(value).toBe(false);
      });
    });
  });

  describe('to regExp LAND PHONE ES', () => {
    describe('in true case', () => {
      it.each`
        txt
        ${'951123123'}
        ${'+34951123123'}
        ${'0034951123123'}
        ${'899995123'}
      `(`$txt should true`, ({ txt }) => {
        const value = service.checkTxtInRegExp('LANDLINEES', txt);
        expect(value).toBe(true);
      });
    });
    describe('in false case', () => {
      it.each`
        txt
        ${'798678678'}
        ${'34951123123'}
        ${'+3400000-00000'}
      `(`$txt should false`, ({ txt }) => {
        const value = service.checkTxtInRegExp('LANDLINEES', txt);
        expect(value).toBe(false);
      });
    });
  });
});
