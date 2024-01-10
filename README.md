# Latinhas LLC - Sistema de Planejamento de Demandas

Bem-vindo ao sistema de planejamento de demandas da Latinhas LLC! Este projeto consiste em um aplicativo web com um backend em Node.js (utilizando SQLite para armazenamento de dados) e um frontend em React.js (Next.js) com integração Redux.

## Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter o Docker instalado em sua máquina. Você pode baixá-lo em [Docker's Official Website](https://www.docker.com/get-started).

### Passos

1. Clone o repositório para a sua máquina:

   ```bash
   git clone https://github.com/frederycomiguel/latinhas-llc.git
   cd latinhas-llc

2. Construa e execute os containers do Docker:
    ```bash
    docker-compose up -d


Isso criará e iniciará os containers para o back-end e front-end.

3. Verifique o status dos containers:

   ```bash
    docker-compose ps

Isso mostrará os containers em execução.

4. Acesse o frontend em http://localhost:3000 no seu navegador.




    
## Funcionalidades

- Cadastrar demandas de produções.
- Visualizar todas as demandas.
- Editar demandas existentes.
- Remover demandas.


## Tecnologias Utilizadas

**Front-end:** 🔵 React.js (latest) 🔵 Next.js (latest) 🔵Redux(latest)

**Back-end:** 🟢 Node.js (v14) 🔵 SQLite (latest)


## Estrutura do Projeto

```bash
latinhas-llc/
|-- backend/
|   |-- Dockerfile
|   |-- server.js
|-- frontend/
|   |-- Dockerfile.frontend
|   |-- package.json
|   |-- pages/
|   |   |-- index.js
|   |-- redux/
|   |   |-- actions/
|   |   |   |-- demandsActions.js
|   |   |-- reducers/
|   |   |   |-- demandsReducer.js
|-- docker-compose.yml
|-- package.json
```

## Contribuição


Sinta-se à vontade para contribuir para o desenvolvimento deste projeto. Abra uma issue para discutir novas funcionalidades ou correções de bugs. Pull requests são bem-vindos!


## Licença

Este projeto é licenciado sob a [MIT](https://choosealicense.com/licenses/mit/).

