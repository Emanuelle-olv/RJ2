// função construtora endereço
function Endereco(rua, numero, cidade, estado) {
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;
  
    // método para descrever o endereço
    this.descricao = function() {
      return `-----------\nEndereço:\n-----------\nRua: ${this.rua}\nNúmero: ${this.numero}\nCidade: ${this.cidade}\nEstado: ${this.estado}`;
    };
  }


// função construtora telefone

function Telefone(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;
  
    // método para descrever o telefone
    this.descricao = function() {
      return `-----------\nTelefone:\n-----------\nDDD: ${this.ddd}\nNúmero: ${this.numero}`;
    };
  }


// função construtora cliente

function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome;
    this.telefoneCelular = telefoneCelular;
    this.email = email;
    this.endereco = endereco;
  
    // método de acesso para mostrar as informações do cliente
    this.descricao = function() {
      return `-----------\nInformações do Cliente:\n-----------\nNome: ${this.nome}\n${this.telefoneCelular.descricao()}\nE-mail: ${this.email}\n${this.endereco.descricao()}\n-----------`;
    };
    
    // método get e set para o nome
    this.getNome = function() {
      return this.nome;
    };
  
    this.setNome = function(novoNome) {
      this.nome = novoNome;
    };
  
    // método get e set para telefone
    this.getTelefone = function() {
      return this.telefoneCelular;
    };
  
    this.setTelefone = function(novoTelefone) {
      this.telefoneCelular = novoTelefone;
    };
  
    // método get e set para email
    this.getEmail = function() {
      return this.email;
    };
  
    this.setEmail = function(novoEmail) {
      this.email = novoEmail;
    };
  
    // método get e set para endereço
    this.getEndereco = function() {
      return this.endereco;
    };
  
    this.setEndereco = function(novoEndereco) {
      this.endereco = novoEndereco;
    };

    // método para retornar em caixa alta e caixa baixa

    this.getNomeCaixaAlta = function() {
      return this.nome.toUpperCase();
    };

    this.getNomeCaixaBaixa = function() {
      return this.nome.toLowerCase();
    };

    this.getTelefoneCaixaAlta = function() {
      return this.telefoneCelular.descricao().toUpperCase();
    };

    this.getTelefoneCaixaBaixa = function() {
      return this.telefoneCelular.descricao().toLowerCase();
    };

    this.getEmailCaixaAlta = function() {
      return this.email.toUpperCase();
    };

    this.getEmailCaixaBaixa = function() {
      return this.email.toLowerCase();
    };
  
    this.getEnderecoCaixaAlta = function() {
      return this.endereco.descricao().toUpperCase();
    };
  
    this.getEnderecoCaixaBaixa = function() {
      return this.endereco.descricao().toLowerCase();
    };
  }

//criar instâncias de objetos
let enderecoCliente = new Endereco('Av. Paulista', '987', 'São Paulo', 'SP');
let telefoneCliente = new Telefone('11', '999999999');
let cliente1 = new Cliente('Carlos Conrado Heinz', telefoneCliente, 'carlos.conrado@app.com', enderecoCliente);

// exibir a descrição do cliente
console.log(cliente1.descricao());

//alterar nome do cliente
console.log(cliente1.getNome());  
cliente1.setNome('Carlos Silva');  // alterar o nome do cliente com set
console.log(cliente1.getNome());  // mostrar nome alterado

//testando métodos get e set para caixa alta e baixa
console.log(cliente1.getNomeCaixaAlta());  
console.log(cliente1.getNomeCaixaBaixa());  
console.log(cliente1.getTelefoneCaixaAlta()); 
console.log(cliente1.getTelefoneCaixaBaixa());  
console.log(cliente1.getEmailCaixaAlta());  
console.log(cliente1.getEmailCaixaBaixa());  
console.log(cliente1.getEnderecoCaixaAlta());  
console.log(cliente1.getEnderecoCaixaBaixa());  

//função para ordenar clientes por nome
function ordenarClientesPorNome(clientes) {
  return clientes.sort(function(a, b) {
    return a.getNome().localeCompare(b.getNome());
  });
}
  
// adicionando mais clientes
let cliente2 = new Cliente('Ana Maria', telefoneCliente, 'ana.maria@app.com', enderecoCliente);
let cliente3 = new Cliente('José Almeida', telefoneCliente, 'jose.almeida@app.com', enderecoCliente);

// listar esses clientes
let listaDeClientes = [cliente1, cliente2, cliente3];

// ordenando clientes
let clientesOrdenados = ordenarClientesPorNome(listaDeClientes);

// exibir clientes ordenados
clientesOrdenados.forEach(cliente => {
  console.log(cliente.descricao());
});

// função para testar a saída formatada dos dados
let telefone = new Telefone('11', '999999999');
let endereco = new Endereco('Av. Paulista', '987', 'São Paulo', 'SP');
let cliente = new Cliente('Carlos Conrado Heinz', telefone, 'carlos.conrado@app.com', endereco);

// testando a saída formatada

console.log(cliente.descricao());
