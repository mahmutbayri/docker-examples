FROM php:7.3-apache
COPY . /var/www/html
RUN apt-get update && apt-get install --yes --no-install-recommends libssl-dev
RUN pecl install mongodb && docker-php-ext-enable mongodb
