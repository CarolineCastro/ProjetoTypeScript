const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'dev'
}

pessoa.idade = 29;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Dev'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadorDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Atriz
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'programação']
}

const monica: Estudante = {
    nome: 'Mônica',
    idade: 28,
    materias: ['Matemática discreta', 'programação']
}

function listar(lista: string[]){
    for( const item of lista ) {
        console.log('- ', item);
    }
}

listar(monica.materias);