# Clean Up
    docker image rm -f minimal-php

# Build
    docker build -t minimal-php .

# Run
    docker run --publish 8812:3000 --name minimal-php-container minimal-php 

# Navigate
    http://localhost:8812

## Clean Up
    docker container rm -f minimal-php-container && docker image rm -f minimal-php 

# Docs
    
