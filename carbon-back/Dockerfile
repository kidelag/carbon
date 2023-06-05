FROM node:19.0.0-alpine

WORKDIR /home/node

COPY package*.json ./

RUN npm install

CMD ["npm", "run", "start:dev"]