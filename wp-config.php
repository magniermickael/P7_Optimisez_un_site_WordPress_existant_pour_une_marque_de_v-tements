<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', 'C:\xampp\htdocs\ChicDressing\wp-content\plugins\wp-super-cache/' );
define( 'DB_NAME', 'chic_dressing' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '6t=a?2Pr3<,49;}7@~2l/{wp(UG9>6bDavZx(+Mt;)zb[=Bn2u~)JeSmDce{a:kZ' );
define( 'SECURE_AUTH_KEY',  'Y#nt~KGHC^d6J4G.uLfRHBB+l162RIH[-O+vI)70:{|JCn@a9}|HHl]n7`$^`o)z' );
define( 'LOGGED_IN_KEY',    'u>K5beqyI)rt47Pb8lk97Syp`uCJVZNJRI+u,;@jb3L_AF[SJ1>RXU&Z9)k*Ls)h' );
define( 'NONCE_KEY',        'B,525SAx =-BAyv)O~TDSy(t$|ZMJ1q[j,@6>|t`b`#yQ&j2T_oZ>nMCrxc=5.,4' );
define( 'AUTH_SALT',        'a~m-ImJ|vXogR5+l]F((c4Ew&MN&9hroi>I(uGEuNsJ_.1adlV>?T1-gmcF{*I91' );
define( 'SECURE_AUTH_SALT', '[TF16_. !v4^H0m=+lhcC_#*?O}E8XZ~-i5<!|~r&fp(pb6_MCzE_3(CH@:# #.P' );
define( 'LOGGED_IN_SALT',   'Tnz,1hK6HzVC.%*:~39lVBLH]YGuQP)T``9}g~}<K!JymeT}<8V2}*u15E^e)jXQ' );
define( 'NONCE_SALT',       '+aq|o(V*08&l;zhd+{Q*8$Ub`dbG:UnAwIc-:3n6jHcSO$.mNuCV--*I_#>hCx|2' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
