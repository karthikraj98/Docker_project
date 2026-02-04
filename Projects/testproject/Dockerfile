FROM node:20

WORKDIR /myapp

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3003

CMD [ "npm", "start" ]