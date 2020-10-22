<?php

require_once __DIR__ . "/vendor/autoload.php";

$loop = React\EventLoop\Factory::create();

$port = $_SERVER['port'] ?? 3003;

$server = new React\Http\Server($loop, function (Psr\Http\Message\ServerRequestInterface $request) use ($port) {
    return new React\Http\Message\Response(
        200,
        ['Content-Type' => 'text/plain'],
        "Hello World! \n" . $request->getUri() . ", port: " . $port . "\n"
    );
});

$socket = new React\Socket\Server("0.0.0.0:" . $port, $loop);
$server->listen($socket);

echo "Server running at " . $socket->getAddress() . "\n";

$loop->run();
