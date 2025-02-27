<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitff02514579b99f2cd0f1a99e7a75bc9b
{
    public static $prefixLengthsPsr4 = array (
        'N' => 
        array (
            'NbbBasketballStats\\' => 19,
        ),
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'NbbBasketballStats\\' => 
        array (
            0 => __DIR__ . '/../..' . '/core',
        ),
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitff02514579b99f2cd0f1a99e7a75bc9b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitff02514579b99f2cd0f1a99e7a75bc9b::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitff02514579b99f2cd0f1a99e7a75bc9b::$classMap;

        }, null, ClassLoader::class);
    }
}
