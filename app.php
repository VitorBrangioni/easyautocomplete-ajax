<?php

class Test
{
    public function method($var)
    {
        $json = '[{"name": "vitor"}, {"name": "vitoria"}]';

        return $json;
    }
}

$test = new Test();
$json = $test->method($_POST['phrase'] ?? null);
header('Content-Type: application/json');
echo $json;