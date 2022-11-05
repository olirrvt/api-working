# API para o Working

### Objetivos

* Facilitar a vida dos recrutadores e de quem os procuram pela a região.
* Disponibilizar curriculos para os profissionais da sua categoria que estejam na mesma região. Ou o modelo remoto se o usuário preferir.
* Te levar apenas aos profissionais qualificados para a área desejada.
* Fazer o sistema de login da aplicação (sem utilizar JWT)



### Pré-requisitos:
* Para conseguir o projeto é necessário ter o `Node.js` instalado na sua máquina e o sowftare de versionamento `git` para poder baixar o projeto local em sua máquina.
* Projeto feito usando o banco de dados `MySql` server, então para que funcione é também necessário que tenha ele instalado em sua máquina ou rodar sua imagem no  `Docker`.

## Instalação e inicialização do projeto

Para poder instalar e rodar o projeto na sua máquina, é preciso realizar os seguintes passos:

Depois de ter instalado o projeto em sua máquina, entre na pasta pelo terminal:

``` git clone <url do projeto> ```   

``` cd <nome da pasta> ```

Depois de entrar na pasta pelo terminal você terá que baixar as dependências da aplicação, então basta usar o comando:

```
npm install
```

Agora você terá que configurar seu banco de dados, primeiro, crie um database na sua máquina (você pode fazer isso utilizando o MySQLWorkbench):

```
CREATE DATABASE <nomedb>
```
Depois de criado, você terá que criar um arquivo chamado `.env` na raiz do projeto e colocará os seus dados do banco de dados, para que a aplicação consiga ter acesso ao seu banco:

Você terá que criar um campo de teste e daclarar a variavel `ENVIROMENT` e declarar o valor `"STAGING"` nesse estilo:

```
ENVIRONMENT= "staging"

#CRUDSTAGING 
DATABASE_PORT_TESTE= A porta do seu banco de dados (geralmente é 3306)
DATABASE_NAME_TESTE= o nome do seu banco de dados
DATABASE_USERNAME_TESTE= o nome do seu usuário
DATABASE_PASSWORD_TESTE= a senha do seu usuário
DATABASE_HOST_TESTE= 'localhost'
```
## Rotas da Aplicação

### Cadastrar usuários (POST)

Rota: http://localhost:3015/newUser

Escrever os dados do usuário no corpo da requisição:

##### Requisição
```
{
    "nome": "usuario_teste"
    "email": "teste@teste.com",
    "senha": "pass123",
    "cep": "41354444",
    "cpf": "88394952342",
    "rg": "1431423423"
}
```
##### Resposta
```
{
    "message": "Usuário cadastrado com sucesso!",
    "usuario": {
        "id": 7,
        "nome": "usuario_teste",
        "email": "teste@teste.com",
        "senha": "$2b$08$kESgfZi0vM38p.FfaB5rtuCjwLKY.8.pcAiswORW1znbx.unjvSja",
        "cep": "41354444",
        "cpf": "88394952342",
        "rg": "1431423423",
        "logado": 1
    }
}
```
###### Cada campo está configurado para não receber um valor nulo, caso queira, terá que mudar na tabela e alterar para `àllowNull: True`

### Editar Registro do Usuário (PUT)

Rota: http://localhost:3015/editusuario/id (id do usuário que queira alterar)
exemplo: `http://localhost:3015/editusuario/3`


Para atualizar algum campo, basta escrever o campo que deseja mudar no corpo da requisição:

###### Requisição
```
  {
    nome: "Teste_Update"
  }
```
###### Resposta
```
{
    "message": "Usuário Atualizado!",
    "usuario": {
        "id": 7,
        "nome": "Teste_Update",
        "email": "teste@teste.com",
        "senha": "$2b$08$kESgfZi0vM38p.FfaB5rtuCjwLKY.8.pcAiswORW1znbx.unjvSja",
        "cep": "41354444",
        "cpf": "88394952342",
        "rg": "1431423423",
        "logado": 1
    }
}
```
### 3 Consultar um usuário ou vários. (GET)

Rota: http://localhost:3015/findUser (Se quiser pegar todos os usuários da aplicação)
Rota: http://localhost:3015/findUser/id (Adicione um id se quiser pegar um usuário específico)

###### Requisição de todos os usuários

```
http://localhost:3015/findUser
```

###### Resposta ( Se tiver mais usuários, irá retornar um array de objetos com todos os usuários já cadastrado no seu banco )
```
    [
        {
            "id": 7
            "nome": "Teste_Update",
            "email": "teste@teste.com",
            "senha": "$2b$08$kESgfZi0vM38p.FfaB5rtuCjwLKY.8.pcAiswORW1znbx.unjvSja",
            "cep": "41354444",
            "cpf": "88394952342",
            "rg": "1431423423",
            "logado": 1
        }
    ]
 ```
 
 ##### Requisição de um usuário específico
 
 ```
 http://localhost:3015/findUser/7
 ```
 ###### Resposta
 
         {
            "id": 7,
            "nome": "Teste_Update",
            "email": "teste@teste.com",
            "senha": "$2b$08$kESgfZi0vM38p.FfaB5rtuCjwLKY.8.pcAiswORW1znbx.unjvSja",
            "cep": "41354444",
            "cpf": "88394952342",
            "rg": "1431423423",
            "logado": 1
        }
    ]
    
 ### Fazer Login (POST)
 
 Rota: http://localhost:3015/login
 
 Para logar um usuário na aplicação
 
 ###### Requisição
 
 ```
 {
    "email": "teste@teste.com",
    "senha": "pass123"
}
```
###### Resposta

```
{
    "message": "Login efetuado com sucesso!",
    "usuario": {
        "id": 7,
        "nome": "Teste_Update",
        "email": "teste@teste.com",
        "senha": "$2b$08$kESgfZi0vM38p.FfaB5rtuCjwLKY.8.pcAiswORW1znbx.unjvSja",
        "cep": "41354444",
        "cpf": "88394952342",
        "rg": "1431423423",
        "logado": 1
    }
}
```
##### Atenção: O campo CPF e RG ainda não foram criptografados para facilitar a produção!

### Logout (PUT)
 
 Rota: http://localhost:3015/logoutUser/id (Indicar o id do usuário que pretende deslogar da aplicação)
 
 Para deslogar um usuário na aplicação
 
 ###### Requisição
 
 ```
 
 http://localhost:3015/logoutUser/7
 
 ```
 
 ###### Resposta
 
 ```
 {
    "message": "Usuário deslogado com sucesso!",
    "usuario": {
        "id": 7,
        "nome": "Teste_Update",
        "email": "teste@teste.com",
        "senha": "$2b$08$kESgfZi0vM38p.FfaB5rtuCjwLKY.8.pcAiswORW1znbx.unjvSja",
        "cep": "41354444",
        "cpf": "88394952342",
        "rg": "1431423423",
        "logado": 0
    }
}
```
### Deletar Registro de um usuário (DELETE)
Rota: http://localhost:3015/deleteUser/id (inserir o id do usuario que deseja apagar)

Essa rota irá apagar o usuário PARA SEMPRE da aplicação

###### Requisiçao

```

http://localhost:3015/deleteUser/7

```

###### Resposta

```
{
    "message": "Usuário deletado com sucesso!",
    "usuario": {
        "id": 7,
        "nome": "Teste_Update",
        "email": "teste@teste.com",
        "senha": "$2b$08$kESgfZi0vM38p.FfaB5rtuCjwLKY.8.pcAiswORW1znbx.unjvSja",
        "cep": "41354444",
        "cpf": "88394952342",
        "rg": "1431423423",
        "logado": 0
    }
}
```

### Outras rotas ainda estão em desenvolvimento...
