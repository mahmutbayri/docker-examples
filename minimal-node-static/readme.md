# Minimal Node Static Example

This project uses express library to create a web server that uses 3000 port. In `docker run` command 3000 port number is mapped to 8812 port. Nodejs can serve static files such as image, js, css. In production and especially high traffic you should these files over nginx or apache server.  

# Build
    docker build -t minimal-node-static .

# Run
    docker run -p 8812:3000 --name minimal-node-static-container minimal-node-static

# Clean Up
    docker container rm -f minimal-node-static-container && docker image rm -f minimal-node-static
    // this command removes the container and image

# Navigate
    http://localhost:8812
