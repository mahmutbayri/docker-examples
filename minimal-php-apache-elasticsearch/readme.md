# Installing PHP dependencies
    composer install
# Run
    docker-compose up
# Test
    http://localhost:8812/
    
    curl -XGET http://localhost:9200/_cat/health
    
    

Composer dependencies can installed when image is built.
