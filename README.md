# README - Projeto React Redux

Este projeto utiliza o React Redux para gerenciar o estado da aplicação, permitindo armazenar os planos e pedidos no store central. Além disso, é utilizado o hook PersistGate para garantir que os objetos sejam armazenados no localstorage, evitando a perda de dados dos planos quando a página é atualizada.

## Como executar o projeto

1. Execute o comando `npm install` para instalar as dependências do projeto.
2. Execute o comando `npm start` para iniciar a aplicação.

## Tecnologias utilizadas

React Redux: uma biblioteca que integra o React com o Redux, facilitando o gerenciamento do estado global da aplicação no React.

### Funcionalidades

Com o uso do Redux, este projeto permite incluir, alterar e excluir objetos do store central da aplicação. Isso significa que é possível adicionar novos planos, modificar informações existentes ou remover itens do armazenamento.

O uso do PersistGate garante que os objetos armazenados no store sejam preservados mesmo quando a página é atualizada. Isso é possível graças ao armazenamento dos dados no localstorage do navegador. Dessa forma, os planos não são perdidos e podem ser recuperados após a atualização da página.


