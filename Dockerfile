FROM node

COPY server.js .
COPY ./api ./api
COPY package.json .

RUN npm install

CMD ["node", "server.js"]