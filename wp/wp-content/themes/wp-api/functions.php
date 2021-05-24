<?php
/*
*	Function.php
*
*		1. WordPressリセット
*		3. Dashboard 
*		4. カスタム投稿
*		7. その他オプション
*
*/

//WordPressリセット
include( get_template_directory().'/functions/remove.php' );

//Dashboard 
include( get_template_directory().'/functions/dashboard.php' );

//カスタム投稿
include( get_template_directory().'/functions/custom-post.php' );

//その他オプション
include( get_template_directory().'/functions/option.php' );

//WordPressリセット
include( get_template_directory().'/functions/api.php' );
