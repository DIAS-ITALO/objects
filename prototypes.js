/* 
JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Protótipo: é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções

Cadeia:
pessoa1 --> Pessoa.prototype --> Object.prototype

Todos os objetos tme uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.

*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Luiz', 'O.');
const pessoa2 = new Pessoa('Maria', 'A.');
const data = new Data();

console.dir(pessoa1);
console.dir(data);