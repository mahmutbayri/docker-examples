# Minimal PHP-NGINX, reverse proxy example

Let's imagine that we have multiple applications and they work different ports. The project contains two very simple PHP scripts which are run by supervisor. The http requests come from two different paths (which are `/project-1` and `/project-1`) are passed to their applications that are configured in `nginx` configuration file. Any type of applications can be used the same way such as node applications.

In this example `8812` port is used to show example. I know this is a weird port number :) You can change it in `docker-compose.yml` file if you wish.

# Build
    docker-compose up

# Navigate

## Project 1
    http://localhost:8812/project-1
    // Output: script is located at /src/app/project-1/index.php
    
## Project 2
    http://localhost:8812/project-2
    // Output: script is located at /src/app/project-2/index.php
