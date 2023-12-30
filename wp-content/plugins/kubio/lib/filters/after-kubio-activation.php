<?php

use Kubio\Flags;

function kubio_set_editor_ui_version() {
	Flags::setSetting( 'editorUIVersion', 2 );
	Flags::setSetting( 'enableAICapabilities', apply_filters( 'kubio/enable_ai_capabilities', kubio_is_pro() ) );
	Flags::setSetting( 'editorMode', 'simple' );
	Flags::setSetting( 'activatedOnStage2', true );
}



add_action( 'kubio/after_activation', 'kubio_set_editor_ui_version' );
add_action( 'kubio/after_activation', '_kubio_set_fresh_site' );

//For this issue. https://mantis.iconvert.pro/view.php?id=52025. On Bluehost all the rest api return 404 and needs a flush permalink to fix it
add_action( 'kubio/after_activation', 'flush_rewrite_rules' );
