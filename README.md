<h1 align="center">TaskFlow</h1>
<p align="center">
  <img alt="ReactJS" src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white">
  <img alt="Express.js" src="https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white">
  
</p>

![image](https://github.com/user-attachments/assets/1cef315b-48c4-4e52-849d-cc53cdfed1f8)


<p align="center">
  <a href="#introdu%C3%A7%C3%A3o">Introdução</a> |
  <a href="#recursos">Recursos</a> |
  <a href="#finalidade">Finalidade</a> |
  <a href="#como-utilizar">Como utilizar</a> |
  <a href="#cr%C3%A9ditos">Créditos</a>
</p>

### Introdução

TaskFlow é um Sistema de Gestão de Tarefas que auxilia o usuário na organização de suas tarefas ao permití-lo criar e gerenciar listas e quadros de tarefas.

### Recursos

O TaskFlow possui os seguintes recursos:

- **Cadastro**: O usuário é capaz de criar uma conta utilizando nome de usuário, e-mail e senha, além de poder entrar em sua conta.
- **Usuário**: O usuário é capaz de mudar seu nome, e-mail, senha e foto de perfil quando quiser.
- **Quadros**: O usuário é capaz de criar, visualizar, editar e remover quadros, onde cada quadro possui suas próprias listas e tarefas. O usuário também pode atribuir nome e descrição a um quadro.
- **Listas**: O usuário, dentro de um quadro, é capaz de criar, visualizar, editar e remover listas de tarefas, onde cada lista possui seu próprio conjunto de tarefas. O usuário também pode atribuir um nome a uma lista.
- **Tarefas**: O usuário, numa lista, é capaz de criar, visualizar, editar e remover tarefas. O usuário também pode atribuir nome, descrição, data de vencimento e até três etapas a uma tarefa.

Além disso, a aplicação conta com um sistema de estado das tarefas definido pelas cores dos cards:
- **Card com cor normal**: A tarefa não passou da data de vencimento.
- **Card com cor azul**: A tarefa vence hoje.
- **Card com cor vermelha**: A tarefa está atrasada.
- **Card com cor verde**: A tarefa foi concluída. Todas as etapas de uma tarefa precisam ser cumpridas para que o usuário possa concluí-la.

### Finalidade

O TaskFlow foi idealizado pelos membros internos do Ramo Estudantil IEEE CEFET-RJ e desenvolvido por um grupo de trainees candidatos à equipe de desenvolvimento web da WolfByte durante o Processo Seletivo Externo 24.2. No início da fase trainee, os trainees foram capacitados para criar o projeto e no decorrer da fase, foram avaliados durante todo o processo de desenvolvimento.

### Tecnologias utilizadas
- **Design**: FlutterFlow, Figma
- **Front-end**: React.js
- **Back-end**: Node.js Express

### Como utilizar

O TaskFlow possui alguns requisitos para funcionar:
- **MySQL Server** (O usuário precisa criar um banco de dados local para armazenar as informações da aplicação)
- **Node.js e NPM** (Gerenciador de pacotes para o Node.js, utilizado para instalar os pacotes utilizados na aplicação)

Primeiro, crie o banco de dados local no MySQL Terminal:
```
CREATE DATABASE taskflowdb;
```
Então, utilize o seu terminal para ir até o diretório do projeto (Case-Web/taskflow) e instale os pacotes utilizados no projeto:
```
npm i
```
E atualize o banco de dados para ter as tabelas utilizadas pela aplicação:
```
npx knex migrate:latest
```
Também é necessário configurarmos nossas variáveis de ambiente utilizando o .env. Para isso:
1. Crie um arquivo de texto chamado .env na pasta taskflow
2. Dentro desse arquivo, insira as variáveis de ambiente. O .env nesse caso deve conter:
  - **DB_HOST** ("anfitrião" do banco)
  - **DB_PORT** (porta utilizada pelo banco)
  - **DB_DATABASE** (nome da base de dados a ser utilizada)
  - **DB_USERNAME** (nome de usuário do banco)
  - **DB_PASSWORD** (senha do usuário do banco)
  - **JWT_KEY** (pode ser "minhachave")

Informações como o HOST, PORT e USERNAME podem ser obtidas pelo terminal do MySQL ao utilizar os seguintes comandos:
  ```
  SHOW GLOBAL VARIABLES LIKE [opção];
  ```

Após estas etapas de configurações, podemos executar a aplicação.
Em um terminal na pasta taskflow, inicie o back-end:
```
npm run start
```
Em outro terminal, também na pasta taskflow, inicie o front-end:
```
npm run dev
```
No terminal que você iniciou o front-end, aperte O e depois Enter e uma aba será aberta no seu navegador contendo a aplicação.

### Créditos

- **Lucas Ferreira de Ornelas Santos**: Primeiro líder geral, atuando na subdivisão do grupo em equipes, no design e na modelagem do banco de dados.
- **Luiz Felipe Ribeiro Zuim Teixeira**: Líder geral atual, atuando no design e desenvolvimento front-end.
- **Allan Ribeiro de Souza**: Assessor de gestão, auxiliando na organização da equipe.
- **Rafael do Amaral Costa**: Líder de desenvolvimento, atuando no design, revisão da modelagem do banco de dados, desenvolvimento front-end e desenvolvimento back-end.
- **Erick Martins Silva**: Membro técnico, atuando no design, revisão da modelagem do banco de dados e desenvolvimento front-end.
- **Ennya Gomes Oliveira Campos**: Membro técnico, atuando no design, revisão da modelagem do banco de dados, desenvolvimento front-end e desenvolvimento back-end.
- **Luiz Antonio de Souza da Silva**: Membro técnico, atuando no design e desenvolvimento front-end.
- Agradecimentos especiais aos assessores técnicos **Gustavo Barros Rosa de Andrade** e **João Pedro Weydt Faria** por auxiliar os trainees durante o desenvolvimento. Obrigado!
