FROM node:latest
RUN npm install -g nodemon
WORKDIR /usr/app
COPY package.json ./
COPY app.js ./
EXPOSE 3000
# CMD [ "npm", "run", "start" ]
CMD [ "nodemon"]
