# Aula_7-Ling.Programacao

Aula 07 — Assincronia e Manipulação de Arquivos

Nesta aula, aprendi sobre sincronia e assincronia no Node.js. De forma simples, uma operação síncrona faz uma tarefa e espera ela terminar para continuar, enquanto uma operação assíncrona permite que o programa continue realizando outras tarefas enquanto espera o resultado.

Também aprendi sobre Promises, que representam um resultado que ainda vai estar disponível no futuro. Para trabalhar com elas de uma forma mais simples, utilizamos async/await. O await faz a função esperar uma Promise terminar antes de continuar, sem bloquear o programa inteiro.

Na prática, utilizei fs/promises para trabalhar com arquivos de forma assíncrona, aprendendo a ler e escrever arquivos e também a manipular dados em formato JSON.

Durante os exercícios, desenvolvi:

Um sistema simples de logs, salvando mensagens com timestamp em app.log;

Um sistema de tarefas, permitindo concluir e remover tarefas e mantendo os dados em um arquivo JSON;

Uma função para realizar a leitura segura de arquivos utilizando try/catch, retornando null quando o arquivo não existe.

Essa aula foi importante para entender como o Node.js trabalha com operações que podem demorar, como arquivos e requisições, e também servirá de base para o uso de fetch e para o desenvolvimento do backend nas próximas aulas.