FROM php:7.4.1-cli-alpine3.11
RUN mkdir -p /src/app
COPY . /src/app
WORKDIR /src/app
EXPOSE 3000
# CMD ["php", "/src/app/index.php"]
ENTRYPOINT ["php", "/src/app/index.php"]
