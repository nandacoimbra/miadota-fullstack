# Miadota

Miadota é uma plataforma de adoção de pets, permitindo que usuários visualizem, filtrem e adicionem pets à sua lista de interesse. O sistema possui três principais componentes: a aplicação do front-end, o painel de administração, e a API back-end que realiza a comunicação com o banco de dados.

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

### Back-End
Acesse a pasta back/ e execute o seguinte comando para instalar as dependências do back-end:
npm install express jsonwebtoken bcrypt cors dotenv body-parser multer validator nodemon

### Front-End
Acesse as pastas front/ e admin/ e execute o seguinte comando para instalar as dependências do front-end:
npm install axios react-toastify react-router-dom

## Executando o Projeto

### Front-End
Na pasta front/ e admin/, execute:
npm run dev

### Back-End
Na pasta backend/, execute:
npm run server

O projeto estará rodando localmente e pronto para ser utilizado.






