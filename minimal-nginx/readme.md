# Build Image
    docker build -t static-html .

# Run Container
    docker run -p 8812:80 static-html

# Test

http://localhost:8812
