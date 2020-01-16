# Build
    docker build -t minimal-php-reactphp .

# Run
    docker run --name minimal-php-reactphp-container -d -p 8812:3000 minimal-php-reactphp
    
# Clean Up
    docker container rm -f minimal-php-reactphp-container
    docker image rm -f minimal-php-reactphp

# Navigate
    http://localhost:8812
