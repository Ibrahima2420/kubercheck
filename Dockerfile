FROM node:18-slim

WORKDIR /app

COPY server.js .

RUN npm install express

RUN mkdir /data

EXPOSE 3000

CMD ["node", "server.js"]