# Minimal C Apache

## Compiling the script
    docker run --rm -v "$PWD":/tmp -w /tmp frolvlad/alpine-gcc gcc --static hello-the-moon.c -o hello-the-moon

# Building the image using the Dockerfile
    docker build -t minimal-c-apache .

# Production
    // before run this command, you need to compile your script and build the image.
    docker run -d -it --rm -p 0.0.0.0:8812:80 --name minimal-c-apache-container minimal-c-apache

# Navigate
    http://localhost:8812/hello-the-moon

# Development
    // you need to compile your script before run this command
    // In development mode you don't need to build the image again 
    // because httdocs folder will be pointed to your project folder.
    docker run -d -it --rm -p 0.0.0.0:8812:80 --name minimal-c-apache-container -v $(pwd):/usr/local/apache2/htdocs minimal-c-apache

### Clean Up
    docker container rm -f minimal-c-apache-container && docker image rm -f minimal-c-apache

