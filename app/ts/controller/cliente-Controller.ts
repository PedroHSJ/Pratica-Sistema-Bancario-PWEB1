class ClienteController{

    private inputnome: HTMLInputElement;
    private inputcpf: HTMLInputElement;
    private campoul: HTMLUListElement
    private inputpesquisa: HTMLInputElement
    private pesquisacliente: HTMLUListElement;
    private classclientes: Clientes;



    constructor(){
        this.inputnome = document.querySelector<HTMLInputElement>('#nomecliente');
        this.inputcpf = document.querySelector<HTMLInputElement>('#cpfcliente');
        this.campoul = document.querySelector<HTMLUListElement>('#listaDeCientes');
        this.inputpesquisa = document.querySelector<HTMLInputElement>('#buscarclienteCpf');
        this.pesquisacliente = document.querySelector<HTMLUListElement>("#resultadodabusca");
       this.classclientes = new Clientes();
    }

    criarCliente (): void{
        let inputnome = this.inputnome.value;
        let inputcpf = this.inputcpf.value;  
        let conta = new Conta("1", 150);

        let novoCliente = new Cliente(inputnome, inputcpf, conta);
        let verificador = this.classclientes.inserir(novoCliente);
        verificador ? this.exibirCliente(novoCliente, conta) : alert("Esse cliente já existe");
    }

    exibirCliente(cliente:Cliente, conta:Conta): void{
        let li =  document.createElement("li");
        li.textContent = `Cliente: ${cliente} /  Conta => ${conta}`;

        let botaoapagar = document.createElement("button")
        botaoapagar.textContent = "X"

        botaoapagar.addEventListener('click', 
        (Event) =>{
            this.classclientes.remover(cliente.cpf);
            (<Element>event.target).parentElement.remove();
        }
        );
        li.appendChild(botaoapagar);
        this.campoul.appendChild(li);
    }

    pesquisar(){
        let pesquisa = this.inputpesquisa.value;
        let verificador = this.classclientes.pesquisar(pesquisa)
        verificador ? this.exibircliente(verificador) : alert("Esse cliente não existe!")

    }

    exibircliente(cliente:Cliente) : void{
        let li = document.createElement("li");
        li.textContent = `${cliente}`;

        this.pesquisacliente.appendChild(li);

    }


}