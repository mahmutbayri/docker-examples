FROM php:7.4.19-cli-alpine3.13
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
CMD php artisan serve --host=0.0.0.0 --port=3000
EXPOSE 3000
