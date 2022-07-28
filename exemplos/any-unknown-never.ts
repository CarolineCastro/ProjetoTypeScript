let anyVoltou: any;
anyVoltou = 3;
anyVoltou = 'teste';
anyVoltou = 5;

let stringTest: string = 'verificar';
stringTest = anyVoltou;

let unknownValue: unknown;
unknownValue = 3;
unknownValue = 'opa';
unknownValue = true;
unknownValue = 'vai sim'

let stringTest2: string = 'agora vai'
//stringTest2 = unknownValue;

if(typeof unknownValue === 'string'){
    stringTest2 = unknownValue;
}

function jogaErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo};
}

jogaErro('deu erro', 500);