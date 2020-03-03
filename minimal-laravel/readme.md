# About the project

In this project i want to show how a laravel project is created with a `Dockerfile`. All composer dependencies are installed in host machine to keep this example very simple. I didn't use any web server because the built-in server in php is enough for running a Laravel project. `php artisan serve` command in the Docker file creates a server, and allows us to access the project on a specific port.  

# Build project

    composer install --no-dev

Note: You should have composer in order to run this command. Please visit https://getcomposer.org/download/ to get it if you don't have yet.

# Build the image using the Dockerfile
    docker build -t minimal-laravel .

# Run
    docker run -d -p 8812:3000 --name minimal-laravel-container minimal-laravel

Note: the name option is optional, i use it because defining a name is always better than a randomly generated name.
    
### Clean Up
    docker container rm -f minimal-laravel-container && docker image rm -f minimal-laravel

# Navigate
    http://localhost:8812

I know that the port number is weird, you can change it in the Docker file if you would like to use another port.
