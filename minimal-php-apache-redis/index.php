<?php

$client = new Redis();
$client->connect('redis', 6379);

$client->incr('counter');

echo $client->get('counter');
