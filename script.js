const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de marcação para criar páginas web",
            "Uma linguagem de programação usada para criar interatividade em páginas web",
            "Um estilo de folha de estilo para tornar as páginas web mais bonitas",
        ],
        correta: 1
    },
    {
        pergunta: "Qual função exerce o 'Console.log()'?",
        respostas: [
            "Exibir um alerta na página",
            "Registrar mensagens de erro no console do navegador",
            "Imprimir mensagens no console do navegador",
        ],
        correta: 2
    },
    {
        pergunta: "Qual deles é de atribuição em Js?",
        respostas: [
            "++",
            "=",
            "===",
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma variável em JavaScript?",
        respostas: [
            "Um valor constante que não pode ser alterado",
            "Um nome simbólico para armazenar dados",
            "Uma função que retorna um valor específico",
        ],
        correta: 1
    },
    {
        pergunta: "O que o '===' faz?",
        respostas: [
            "Comparar dois valores sem levar em conta o tipo de dado",
            "Verificar se dois valores são estritamente iguais em valor e tipo",
            "Concatenar duas strings",
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
            "Um laço que repete um bloco de código",
            "Um conjunto de instruções que executa uma tarefa específica",
            "Uma estrutura de decisão que verifica uma condição",
        ],
        correta: 1
    },
    {
        pergunta: "Qual destas esta correta?",
        respostas: [
            "var x = 10",
            "variável x = 10",
            "int x = 10",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'addEventListener()'?",
        respostas: [
            "Remover um evento de um elemento HTML",
            "Adicionar um evento a um elemento HTML",
            "Modificar o estilo de um elemento HTML",
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma declaração 'if' ?",
        respostas: [
            "Um tipo de loop que executa um bloco de código várias vezes",
            "Uma estrutura de controle de fluxo que executa um bloco de código se uma condição for verdadeira",
            "Uma função que retorna o maior valor de dois números",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do 'querySelector()'?",
        respostas: [
            "Selecionar vários elementos HTML com base em uma classe",
            "Selecionar um único elemento HTML com base em um seletor CSS",
            "Selecionar elementos HTML com base em seus IDs",
        ],
        correta: 1
    }
];//Array com as Perguntas/Respostas(Objetos) dentro

//Variaveis que pegam os valores de quiz e do template
const quiz = document.getElementById('quiz')
const template = document.querySelector('template')
const corretas = new Set()
const totalPerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')


//Looping que roda as 10 perguntas
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    //Looping que roda as opções de resposta
    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value = item.correta
            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + 'de' + totalPerguntas
        }


        quizItem.querySelector('dl').appendChild(dt)



    }
    //remove a RESPOSTA A DENTRO DO SPAN
    quizItem.querySelector('dl dt').remove()



    //Coloca a pergunta na tela
    quiz.appendChild(quizItem)
}