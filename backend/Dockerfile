FROM node:latest AS build
WORKDIR /usr/src/app
COPY . .

FROM node:alpine
WORKDIR /usr/src/app
ENV DOCKERIZE_VERSION v0.7.0
RUN apk update --no-cache \
  && apk add --no-cache wget openssl \
  && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
  && apk del wget
COPY --from=build /usr/src/app .
RUN npm install -g npm@latest \
  && apk add --upgrade postgresql-client \
  && npm install --legacy-peer-deps
EXPOSE 3000
