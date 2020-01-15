FROM php:7.3-apache
RUN docker-php-ext-install pdo pdo_mysql mysqli
# RUN a2enmod rewrite
# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
COPY index.php /var/www/html/
