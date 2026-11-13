<?php
// PHP on this host does not populate process environment variables into $_ENV/$_SERVER.
$storage=getenv('LARAVEL_STORAGE_PATH');
$root=realpath(__DIR__.'/../../.qa');
$resolved=$storage?realpath($storage):false;
if (getenv('APP_ENV')!=='qa' || !$root || !$resolved || !str_starts_with($resolved,$root.DIRECTORY_SEPARATOR)) {
 throw new RuntimeException('Refusing HTTP QA outside its dedicated storage directory.');
}
$_ENV['LARAVEL_STORAGE_PATH']=$resolved;
$_SERVER['LARAVEL_STORAGE_PATH']=$resolved;
