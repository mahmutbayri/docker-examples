<?php

$client = new Memcached();

$client->addServer("memcached", 11211);
$client->add('counter', 1);
$client->increment('counter');

echo $client->get('counter');
