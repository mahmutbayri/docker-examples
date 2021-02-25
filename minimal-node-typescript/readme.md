# Minimal TypeScript + Express Server Example

This project is used express library to create a web server that uses 3000 port. In `docker run` command 3000 port number is mapped to 8812 port. 

# Build
    docker build -t minimal-node-typescript .

# Run
    docker run -p 8812:3000 --name minimal-node-typescript-container minimal-node-typescript

# Clean Up
    docker container rm -f minimal-node-typescript-container && docker image rm -f minimal-node-typescript
    // this command removes the container and image
    // if you will use docker run command often, you can add --rm option. This will automaticaly remove the container.

# Navigate
    http://localhost:8812
