<<<<<<< Updated upstream
FROM node:12.18.1
 
WORKDIR /app
 
COPY package.json package.json
COPY package-lock.json package-lock.json
 
RUN npm install
 
COPY . .
 
CMD [ "node", "src/main.ts" ]
=======
FROM node:9.4.0

ENV MONGODB_URI='mongodb://localhost:27017/finpro'

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install

EXPOSE 5000

HEALTHCHECK --interval=2m --timeout=5s --start-period=2m \
  CMD nc -z -w5 127.0.0.1 5080 || exit 1

CMD echo "Warming up" && sleep 5 && npm start

# https://dockertraining.readthedocs.io/en/latest/nodejs/angularjs-mongodb.html
>>>>>>> Stashed changes
