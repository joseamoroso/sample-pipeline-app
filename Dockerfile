FROM node:16-alpine
WORKDIR /usr/src/sample-app
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]
