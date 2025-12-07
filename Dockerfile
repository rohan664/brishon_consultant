FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

WORKDIR /app/brishon_consultant

RUN npm i

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]