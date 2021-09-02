FROM node:alpine

WORKDIR /app
COPY package.json ./
COPY ./ ./

RUN yarn
EXPOSE 3000

CMD ["yarn", "dev"]