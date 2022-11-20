#Image de Origem
FROM node:18.12-alpine3.16

# Configurando a imagem do container
ENV LC_ALL = C.UTF-8

# Diretório de Trabalho
WORKDIR /app

#Copiando tudo para pasta app
COPY . .

#Instalar as dependências da aplicação no projeto
RUN yarn || npm install

# Exportando a porta do servidor para o container
EXPOSE 5173

# Executa  a aplicação
CMD  yarn dev
