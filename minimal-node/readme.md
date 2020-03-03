# Minimal Node Example

This project is used express library to create a web server that uses 3000 port. In `docker run` command 3000 port number is mapped to 8812 port. 

# Build
    docker build -t minimal-node .

# Run
    docker run -p 8812:80 --name minimal-node-container minimal-node

# Clean Up
    docker container rm -f minimal-node-container && docker image rm -f minimal-node
    // this command removes the container and image

# Navigate
    http://localhost:8812
