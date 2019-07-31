FROM node:11.9

WORKDIR /usr/src/app

COPY ./*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]
