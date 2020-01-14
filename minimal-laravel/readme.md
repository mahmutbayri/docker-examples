# Build project

    composer install --no-dev

# Build Docket
    docker build -t minimal-laravel .

# Run
    docker run -d -p 8812:3000 minimal-laravel

# Navigate
navigate http://localhost:8812
