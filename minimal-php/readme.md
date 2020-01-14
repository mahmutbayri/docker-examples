# Clean Up

    docker image rm -f minimal-php

# Build

    docker build -t minimal-php .

# Run
    docker run -p 8812:3000 minimal-php

# Navigate
navigate http://localhost:8812
