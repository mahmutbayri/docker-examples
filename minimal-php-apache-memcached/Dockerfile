FROM php:7.3-apache
COPY . /var/www/html
RUN apt-get update && apt-get install --yes --no-install-recommends libmemcached-dev zlib1g-dev
RUN pecl install memcached && docker-php-ext-enable memcached
