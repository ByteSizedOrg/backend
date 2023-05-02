FROM node:alpine as builder

RUN mkdir -p /usr/app/
WORKDIR /usr/app/

COPY package.json /usr/app/
RUN yarn install

COPY tsconfig.json /usr/app/
COPY /src /usr/app/src

RUN yarn build


# Run the app
FROM node:alpine
WORKDIR /app/

COPY --from=builder /usr/app/dist/ /app/
COPY package.json /app/

RUN yarn install --production
CMD ["node", "index.js"]