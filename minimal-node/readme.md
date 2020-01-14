# Clean Up

    docker image rm -f minimal-node

# Build

    docker build -t minimal-node .

# Run
    docker run -p 8812:3000 minimal-node

# Navigate
navigate http://localhost:8812
