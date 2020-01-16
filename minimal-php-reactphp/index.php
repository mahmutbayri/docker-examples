<?php

require_once __DIR__ . '/vendor/autoload.php';

$loop = React\EventLoop\Factory::create();

$server = new React\Http\Server(function (Psr\Http\Message\ServerRequestInterface $request) {

    echo 'sadasf';

    return new React\Http\Response(
        200,
        array('Content-Type' => 'text/plain'),
        "Hello World!\n"
    );
});

$socket = new React\Socket\Server('0.0.0.0:3000', $loop);
$server->listen($socket);

echo "Server running at http://0.0.0.0:3000\n";

$loop->run();
