FROM node:16-alpine
WORKDIR /usr/src/sample-app
COPY . .
COPY node_modules .
EXPOSE 3000
CMD [ "node", "server.js" ]
