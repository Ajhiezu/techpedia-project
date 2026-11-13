<?php
$public=realpath(__DIR__.'/../../backend/public');
$path=parse_url($_SERVER['REQUEST_URI'],PHP_URL_PATH);
$file=realpath($public.$path);
if ($file && str_starts_with($file,$public.DIRECTORY_SEPARATOR) && is_file($file)) return false;
require $public.'/index.php';
