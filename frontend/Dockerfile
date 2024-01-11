# Use uma imagem oficial do Node.js como imagem base
FROM node:14

# Define o diretório de trabalho no contêiner
WORKDIR /usr/src/app/frontend

# Copia o package.json e package-lock.json para o diretório de trabalho
COPY frontend/package.json /usr/src/app/frontend

# Instala as dependências do aplicativo
RUN npm install

# Copia o código-fonte do aplicativo
COPY ./frontend .

# Expõe a porta em que o aplicativo será executado
EXPOSE 3000

# Define o comando para executar o aplicativo
CMD ["npm", "run", "dev"]
