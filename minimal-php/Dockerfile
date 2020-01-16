FROM php:7.4.1-cli-alpine3.11
RUN mkdir -p /src/app
COPY index.php /src/app
EXPOSE 3000
CMD ["php", "-S", "0.0.0.0:3000", "-t", "/src/app"]
