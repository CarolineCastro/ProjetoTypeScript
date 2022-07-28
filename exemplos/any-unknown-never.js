"use strict";
let anyVoltou;
anyVoltou = 3;
anyVoltou = 'teste';
anyVoltou = 5;
let stringTest = 'verificar';
stringTest = anyVoltou;
let unknownValue;
unknownValue = 3;
unknownValue = 'opa';
unknownValue = true;
unknownValue = 'vai sim';
let stringTest2 = 'agora vai';
//stringTest2 = unknownValue;
if (typeof unknownValue === 'string') {
    stringTest2 = unknownValue;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
