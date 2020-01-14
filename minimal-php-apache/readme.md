# Cleanup    
  
    // delete image
    docker image rm -f minimal-docker

    // build image
    docker build -t minimal-docker .
    
    // run image
    docker run -p 8812:80 minimal-docker

# Test
navigate -> http://localhost:8812/ 
