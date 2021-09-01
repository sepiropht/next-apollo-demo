FROM node:alpine

WORKDIR /app
COPY package.json ./
COPY ./ ./


ENV NODE_ENV production


RUN yarn install --frozen-lockfile
EXPOSE 3000

CMD ["yarn", "build"]