# Building   
    // build image
    docker build -t minimal-php-apache .
    
    // run image
    docker run --publish 8812:80 --name minimal-php-apache-container minimal-php-apache

# Test
    http://localhost:8812/ 
## Clean Up
    docker container rm -f minimal-php-apache-container && docker image rm -f minimal-php-apache 

