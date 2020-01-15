FROM php:7.3-apache
COPY . /var/www/html
RUN pecl install redis && docker-php-ext-enable redis
