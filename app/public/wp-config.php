<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

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
define( 'AUTH_KEY',          '#.)MWaxxPya(/eij~!wQH&FS[Z/1dl+7;0}^PCjta-K@CwQe<~P6&^u2c`Th7BAh' );
define( 'SECURE_AUTH_KEY',   '0i&yu&{ kyEDo/9Y?670}n$3)c|c-av+05Qky}wEm4)Xwj==hOcuYXWur5UCi  K' );
define( 'LOGGED_IN_KEY',     ',8. hP5 |%O~4_Qhx`ufZI9qDA*$:K$W6mrMWekmERfBuRsm?Fr,&@1}A;u(s0Wz' );
define( 'NONCE_KEY',         'H6_6$@:|IK|9|p{+(=2P{jKkcmi|6/&Un_:da{Oqh4PJr.  j(3T#wY>o!l_!I-y' );
define( 'AUTH_SALT',         'aL|[753oCVrY>`tAr 3-hO:PSS{gF5lnEKaRZ$)I=i92H7>azc,>*El[dEH:J#t*' );
define( 'SECURE_AUTH_SALT',  '1Mn/+rA6c-S{h,b,lS&y131.CH7(gJAFs/mg#))3TORkmMOTT%siUB}7|Q0@PfJ|' );
define( 'LOGGED_IN_SALT',    'H9yo*sG)FVW{T-V~~K4%m32]KUQ*uFsX({k@,NWRO{yU1^sURDf HCJ,Bnf]kEy8' );
define( 'NONCE_SALT',        '-q7}_O ,4yn<iT)R(t(8vX~S?(^0D D{rZW[Jsy8mv ?`~Knl2 Xrf/KltLWzm?v' );
define( 'WP_CACHE_KEY_SALT', '3a| h_E!b<k{H$w`eUshoZEXtTQni,)#uT#Y <;1xCoi0.qJ6LX&`H+:l;YjPVwm' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
