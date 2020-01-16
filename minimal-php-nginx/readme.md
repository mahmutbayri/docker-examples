# Note

In this tutorial Nginx is serving your static files in your code directory and php files is being interpreted by php-fpm.

The key line is `fastcgi_pass php:9000;` in `php-docker.local`. This allows to access php-fpm container.

# Run    
    // run image
    docker-compose up
# Test

Add your host php-docker.local like below

    127.0.0.1 php-docker.local

http://php-docker.local:8812/index.php

Or you can test without adding your host file anything with curl like

    curl -XGET --header 'Host: php-docker.local' http://localhost:8812/index.php



