## Minimal Docker-PHP-GraphQL Example

## Install PHP dependencies
    composer install --no-dev

## Build
    docker build -t php-graphql .

## Run
    docker run --name php-graphql-container -d -p 8812:3000 php-graphql
    
## Clean Up
    docker container rm -f php-graphql-container
    docker image rm -f php-graphql

## Navigate
    http://localhost:8812

You can use `GraphQL Playground` to test the API using this query

    query {
      echo(message: "Hello World")
    }

You should see the response below, if the setup is OK.

    {
      "data": {
        "echo": "You said: Hello World"
      }
    }

     
