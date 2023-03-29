let contaController = new ContaController();
contaController.listar();
const c1 = new Conta('1', 110);
const c2 = new Conta ('1',250);
const p1 = new Poupanca('2', 430);
const cb1 = new ContaBonificada('3', 0);
console.log('conta comum: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('poupança: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: '+ cb1.saldo);

// 3. Alterar o arquivo app.ts para criar um objeto da classe Clientes e inserir clientes dentro, listar,
//  remover e pesquisar (pode fazer o código diretamente no app.ts e imprimir no console o resultado)

let cliente1 = new Cliente("Joao", "11125052457", c1);
let cliente2 = new Cliente ("Bruno", "111", c2);

let objCliente = new Clientes;

//insere
objCliente.inserir(cliente1);
objCliente.inserir(cliente2);

//lista
console.log(objCliente.listar());

//busca
console.log(objCliente.pesquisar("11125052457"));

//remover
objCliente.remover("111");
console.log(objCliente.listar());



