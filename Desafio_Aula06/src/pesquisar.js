function pesquisarPessoaPorCPF (cpf) {
    const pessoas = [
  {
    nome: 'Alice',
    cpf: '123456789',
    animalFavoritos: ['gato', 'cachorro'],
  },
  {
    nome: 'Bruna',
    cpf: '123456788',
    animalFavoritos: ['macaco', 'girafa'],
  },
  {
    nome: 'Carlos',
    cpf: '987654321',
    animalFavoritos: ['tigre', 'gato'],
  },
  {
    nome: 'João',
    cpf: '987654322',
    animalFavoritos: ['leão', 'jacaré'],
  },
  {
    nome: 'Maria',
    cpf: '987654332',
    animalFavoritos: ['cavalo', 'galinha'],
  },
  {
    nome: 'Maria',
    cpf: '00621806148',
    animalFavoritos: ['gato', 'cachorro'],
  },
  {
    nome: 'Natalia',
    cpf: '987654532',
    animalFavoritos: ['elefante', 'arara'],
  },
  {
    nome: 'Tiago',
    cpf: '287654532',
    animalFavoritos: ['urso', 'leão'],
  }
 ]

 for (let indice = 0; indice < pessoas.length; indice++) {
   if (cpf == pessoas[indice].cpf) {
       return pessoas[indice]
   }
 }   

 return 'CPF não encontrado'
}

module.exports = {
    pesquisarPessoaPorCPF
}