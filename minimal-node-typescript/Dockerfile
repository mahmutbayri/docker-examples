FROM node:14.15-alpine3.12
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app/
RUN npm install --only=prod
EXPOSE 3000
ENTRYPOINT ["npm", "start" ]
