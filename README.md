# Miadota

Miadota é uma plataforma de adoção de pets, permitindo que usuários visualizem, filtrem e adicionem pets à sua lista de interesse. O sistema possui três principais componentes: a aplicação do front-end, o painel de administração, e a API back-end que realiza a comunicação com o banco de dados.

![miadota](https://github.com/user-attachments/assets/7ec9fe60-c76b-4e82-ae1e-82d386fdf6b8)


## Funcionalidades
- Listagem e filtragem de pets por especie.
- Adição de pets para adoção.
- Listagem de pessoas interessadas no pet.
- Status de andamento da adoção.
- Possibilidade de manifestar interesse nos pets.
- Autenticação de usuários via JWT.
- Aprovação de novos pets cadastrados pelo painel de administração.

## Estrutura do Projeto
- frontend/: Contém a aplicação front-end que os usuários utilizam para visualizar e interagir com a lista de pets.
- admin/: Painel administrativo para aprovar novos pets cadastrados.
- backend/: API back-end que gerencia a comunicação com o banco de dados e autenticação.

## Clonando o Repositório
Para clonar o projeto em sua máquina local, execute o seguinte comando no terminal:
git clone https://github.com/seu-usuario/miadota.git

Em seguida, navegue para o diretório clonado:
cd miadota

## Variáveis de Ambiente
Antes de iniciar a aplicação, é necessário configurar as variáveis de ambiente. Crie um arquivo .env na pasta backend/ com as seguintes variáveis:

- MONGODB_URI= (sua-URI-do-MongoDB)
- JWT_SECRET= (sua-chave-secreta-para-JWT)
  
Essas variáveis são necessárias para conectar o back-end ao banco de dados MongoDB e garantir a segurança das autenticações via JWT.

## Instalação de Dependências
Navegue até as pastas front/, admin/ e back/ separadamente e instale as dependências necessárias utilizando o comando:

- npm install

## Executando o Projeto

### Front-End
Na pasta front/ e admin/, execute:
- npm run dev

### Back-End
Na pasta backend/, execute:
- npm run server

O projeto estará rodando localmente e pronto para ser utilizado.






