## Minimal Tomcat Server For Static Files

## Installing

## Build
    docker build -t minimal-tomcat-static .

## Clean Up
    docker container rm -f minimal-tomcat-static-container
    docker image rm -f minimal-tomcat-static

## Run
    docker run -p 8812:8080 --name minimal-tomcat-static-container minimal-tomcat-static

# Test
    http://localhost:8812/files/sample-image.jpg
