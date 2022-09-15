// run `node index.js` in the terminal
/*
const saldoMaxwell = 100
const saldoMarina = 200

const total = saldoMaxwell + saldoMarina;
console.log(total);
*/

// Vetores - Arrays
/*
const saldoContas = [100, 200, 500, 50, 1.9, 2.99, 300];

const total = saldoContas.reduce ((acumulador, valor) => acumulador + valor);
 console.log(total);

 // Função 'reduce' - Realiza a soma de todos os itens do array
 */

 // Matriz de 3 dimensões
/*
 const bandeiras = [
   ['Brasil', ['verde', 'branco', 'azul', 'amarela']],
   ['Canadá', ['vermelho', 'branco']],
   ['México', ['verde', 'branco', 'vermelho']],
   ['EUA', ['azul', 'Branco', 'vermelho']],
 ];
 console.log(bandeiras[1][1][0]);
 */
  
 /*
 
let frutas = new Array('Abacaxi');

frutas.push('Banana');
frutas.push('Maçã');
frutas.push('Morango');
frutas.unshift('Tangerina');

frutas.pop();
frutas.shift();
frutas.splice(2, 1, 'Fruta do Conde');
console.table(frutas);

const redesSociais = [
  'Instagram',
  'YouTube',
  'Facebook',
  'TikTok',
  'Twitter',
  'Linkedin',
  'Pinterest',
];


const tiktok = redesSociais.indexOf('TikTok');
console.log(tiktok);

console.log (redesSociais.includes ('tumblr'));

for (let i=0; i < redesSociais.length; i++) {
  console.log(redesSociais[i]);
}

for (const i in redesSociais) {
console.log(`${i}: ${redesSociais[i]}`);
}

for (const valor of redesSociais){
  console.log(valor);
}

redesSociais.forEach((valor, indice, redes) => {
  console.log(valor);
  console.log(indice);
  console.log(redes);
})

let i = 0
while (i < redesSociais.length) {
  console.log(redesSociais[i]);
  i++;
}


let i = 0
do {
  console.log(redesSociais[i]);
  i++;
}
  while (i < redesSociais.length);

*/

// Operações de Arrays usando callbacks

// map()
/*
const aPagarEmReais = [10,20,40,100];
const cotacaoDolar = 5;
const aPagarEmDolar = aPagarEmReais.map ( (valor) => valor * cotacaoDolar);

console.table(aPagarEmReais);
console.table(aPagarEmDolar);
*/

// filter()
/*
const aPagarEmReais = [10,20,40,100];
const aPagarEmVanessa = aPagarEmReais.filter ( (valor) => valor > 30);

console.table(aPagarEmReais);
console.table(aPagarEmVanessa);
*/

// find()
/*
const aPagarEmReais = [10,20,40,100];
const aPagarEmVanessa = aPagarEmReais.find( (valor) => valor > 30);

console.table(aPagarEmReais);
console.table(aPagarEmVanessa);
*/

// findIndex()
/*
const aPagarEmReais = [10,20,30,100];
const aPagarEmVanessa = aPagarEmReais.findIndex( (valor) => valor > 30);

console.table(aPagarEmReais);
console.table(aPagarEmVanessa);
*/

// reduce()
/*
const aPagarEmReais = [10,20,30,100];
const totalAPagar = aPagarEmReais.reduce((acumulador, valor) => acumulador + valor, 0);

console.table(aPagarEmReais);
console.table(totalAPagar);
*/

// every()
/*
const aPagarEmReais = [10,20,30,100];
const contasBaixas = aPagarEmReais.every( (valor) => valor < 10);

console.table(aPagarEmReais);
console.table(contasBaixas);
*/

// some()
/*
const aPagarEmReais = [5000,20,30,100];
const temContaAlta = aPagarEmReais.some( (valor) => valor > 1000);

console.table(aPagarEmReais);
console.table(temContaAlta);
*/

// concat()

/*
const contasMarina = [10,20,30,40];
const contasMaxwell = [5,6,7,8];

const contasDoCasal = contasMarina.concat(contasMaxwell);
console.table(contasDoCasal);
*/

/*
contasDoCasal.fill(0);
console.table(contasDoCasal);
*/

// Ordenação

// sort()

/*
const clientes =  ['Vanessa', 'Gabriel', 'Andreia', 'Juliana', 'Gilberto'];
console.table(clientes);
clientes.sort();
console.table(clientes);

const numeros = [10, 5, 1000, 500000, 1.99];
console.table(numeros);
numeros.sort((a, b) => b - a);
console.table(numeros);
*/

/*
const clientes =  [
 ['Vanessa', 4],
 ['Gabriel', 1], 
 ['Andreia', 3],
 ['Juliana', 5], 
 ['Gilberto', 2],
];

console.table(clientes);
clientes.sort();
console.table(clientes);

const numeros = [10, 5, 1000, 500000, 1.99];
console.table(numeros);
numeros.sort((a, b) => b[1] - a[1]);
console.table(numeros);
*/

// Objetos e JSON
/*
const programador = {
  nome: 'Maxwell',
  nascimento: '10/08/1997',
  casado: false,
  linguagensFavoritas: ['JavaScript', 'C#', 'Python'],
  trabalhoDesde: 2015,
};

console.table(programador);
console.log(programador.linguagensFavoritas);
*/

// classes
/*
class Programador {
  constructor(nome, nascimento, casado, linguagensFavoritas = [], trabalhoDesde = null){
    this.nome = nome
    this.nascimento = nascimento
    this.casado = casado
    this.linguagensFavoritas = linguagensFavoritas
    this.trabalhoDesde = trabalhoDesde
  }
}
const maxwell = new Programador('Maxwell Ferreira', '10/08/1997', false, ['JavaScript', 'C#', 'Python'], 2015);

const marina = new Programador('Marina Ribeiro', '8/10/1997', false, ['Java', 'JavaScript', 'PHP'], 2022);

console.table(maxwell);
console.table(marina);

for (const propriedade in marina) {
  console.log (`${propriedade}: ${marina[propriedade]}`);
}
*/

// Pilhas

/*
class Pilha {
  constructor(){
    this.itens = []
  }

push(item) {
    this.itens.push(item);
  }

pop() {
  this.itens.pop();
}

top(){
  return this.itens[this.itens.length - 1];
}

isEmpty(){
  return this.itens.length === 0;
}

}

const pilha = new Pilha();
pilha.push(10);
pilha.push(20);
pilha.push(30);
pilha.push(40);

pilha.pop();
console.table(pilha.isEmpty());
*/

// Filas 

/*
class Fila {
  constructor(){
    this.itens = []
  }
  enqueue(item){
    this.itens.push(item);
  }

  isEmpty(){
    return this.itens.length == 0;
  }

 dequeue(){
   if (this.isEmpty()) return undefined
   return this.itens.shift();
 }
 front(){
   return this.itens[0];
 }
 rear(){
   return this.itens[this.itens.length - 1];
 }
}

const fila = new Fila();
fila.enqueue('Ferrari');
fila.enqueue('Fusca');
fila.enqueue('Del Rey');
fila.enqueue('HB20');
fila.dequeue();

console.table(fila.itens);
console.log(fila.isEmpty());

console.log(fila.front());
console.log(fila.rear());
*/

// Deques

class Deque{
  constructor(){
    this.itens = []
  }
  insertFront(item){
    return this.itens.unshift(item)
  }
  insertLast(item){
    return this.itens.push(item)
  }
  deleteFront(){
    return this.itens.shift() 
  }
  deleteLast(){
    return this.itens.pop()
  }
  isEmpty(){}
  front(){}
  rear(){}

}









