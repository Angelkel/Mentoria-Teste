const { pesquisarPessoaPorCPF } = require('../src/pesquisar.js') 
const { strictEqual } = require('node:assert') 

describe('Pesquisar', () => {
    it('Ao informar o CPF da Alice, teremos o seu nome, CPF e animais favoritos', () => {
        //Arrange
        const cpfPesquisado = '123456789'
        const nomeEsperado = 'Alice'
        const cpfEsperado = '123456789'
        const primeiroAnimalEsperado = 'gato'
        const segundoAnimalEsperado = 'cachorro'
        
        //Act
        const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)
        
        //Assert
        strictEqual(pessoa.nome, nomeEsperado)
        strictEqual(pessoa.cpf, cpfEsperado)
        strictEqual(pessoa.animalFavoritos[0], primeiroAnimalEsperado)
        strictEqual(pessoa.animalFavoritos[1], segundoAnimalEsperado)
    })

    it('Ao informar um CPF que não existe, deve retornar CPF não encontrado', () => {
        //Arrange
        const cpfPesquisado = '000000000'    
        const mensagemEsperada = 'CPF não encontrado'

        //Act
        const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

        //Assert
        strictEqual(pessoa, mensagemEsperada)        
    })

    it('Ao informar os dois CPFs da Maria, devemos receber corretamente os dados de cada uma (nome, CPF e animais favoritos)', () => {
        //Arrange
        // Primeira Maria
        const cpfMaria1 = '987654332'
        const nomeEsperado = 'Maria'
        const cpfEsperado = '987654332'
        const primeiroAnimalEsperado = 'cavalo'
        const segundoAnimalEsperado = 'galinha'
        
        //Act
        const pessoaMaria1 = pesquisarPessoaPorCPF(cpfMaria1)
        
        //Assert
        strictEqual(pessoaMaria1.nome, nomeEsperado)
        strictEqual(pessoaMaria1.cpf, cpfEsperado)
        strictEqual(pessoaMaria1.animalFavoritos[0], primeiroAnimalEsperado)
        strictEqual(pessoaMaria1.animalFavoritos[1], segundoAnimalEsperado)

        // Segunda Maria
        const cpfMaria2 = '00621806148'
        const nomeEsperado2 = 'Maria'
        const cpfEsperado2 = '00621806148'
        const primeiroAnimalEsperado2 = 'gato'
        const segundoAnimalEsperado2 = 'cachorro'
        
        //Act
        const pessoaMaria2 = pesquisarPessoaPorCPF(cpfMaria2)
        
        //Assert
        strictEqual(pessoaMaria2.nome, nomeEsperado2)
        strictEqual(pessoaMaria2.cpf, cpfEsperado2)
        strictEqual(pessoaMaria2.animalFavoritos[0], primeiroAnimalEsperado2)
        strictEqual(pessoaMaria2.animalFavoritos[1], segundoAnimalEsperado2)
    })
})