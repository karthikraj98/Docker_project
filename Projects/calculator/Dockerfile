FROM node:18-alpine

WORKDIR /myapp

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 4001

CMD [ "npm", "start" ]