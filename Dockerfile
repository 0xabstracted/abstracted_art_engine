FROM node:16.15.0

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "run" , "generate"]