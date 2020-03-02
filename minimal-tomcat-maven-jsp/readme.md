# A simple deploying a maven jsp project

## Docker build

### Build and Run
    // This command will create `simple-jsp.war` artifact in the `target` folder
    mvn clean install 

    // This command will create an image which is called simple-jsp, then it will create a container.
    docker build -t simple-jsp . && docker run -p 8812:8080 --name simple-jsp-container simple-jsp

### Clean Up
    docker container rm -f simple-jsp-container && docker image rm -f simple-jsp

### Navigate
    http://localhost:8812/simple-jsp/
