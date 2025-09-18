FROM node:18-alpine

WORKDIR /app

# Copia os arquivos de dentro da pasta hello-fly
COPY hello-fly/package*.json ./
RUN npm install

COPY hello-fly/. .

EXPOSE 8080
CMD ["node", "server.js"]