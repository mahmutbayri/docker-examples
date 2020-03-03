# Mimimal Nginx Example

This project shows how nginx server serves static files. In default nginx server configuration (located at /etc/nginx/conf.d/default.conf) points to `/usr/share/nginx/html` directory. Any files (*.js, *.css, *.html etc) are in this directory will be served by nginx without any change. We could also create a volume to share a directory with the created container. But i wanted to keep this example very simple.   

# Build Image
    docker build -t static-html .

# Run Container
    docker run -p 8812:80 --name static-html-container static-html

# Test
    http://localhost:8812

### Clean Up
    docker container rm -f static-html-container && docker image rm -f static-html
    // this command removes the container and image
