<?php
//Add image size サムネイル追加 
// https://qiita.com/gatespace/items/d6419b0b7e49c98ce829
add_theme_support( 'post-thumbnails', array( 'info','brand','product' ) );
//　ピックアップイベント
add_image_size( 'img1',1920,9999,true );

//カスタム投稿設定
add_action( 'init', 'create_post_type' );
function create_post_type() {
	$title_list = array(
	'news' => 'お知らせ',
	'info' => '最新情報',
	'brand' => 'ブランド'
	);
	foreach( $title_list as $title_key => $title_value ){
		$labels = array(
			'name' => $title_value,
			'singular_name' => $title_value,
			'add_new' => '新しい'.$title_value,
			'add_new_item' => '新しい'.$title_value.'を追加',
			'edit_item' => $title_value.'を編集',
			'new_item' => '新しい'.$title_value.'を追加',
			'search_items' => $title_value.'を検索',
			'view_item' => $title_value.'を表示',
		);
		register_post_type(
			$title_key,
			array(
				'labels' => $labels,
				'public' => true,
				'rewrite' => array('slug' => $title_key),
				'has_archive' => true,
				'supports' => array( 'title','editor','page-attributes','thumbnail' ),
				'register_meta_box_cb' => null,
				'hierarchical' => true,
				'show_ui' => true,
				'exclude_from_search' => true,
			)
		);
	}
}

add_action( 'init', 'create_post_type_cat' );
function create_post_type_cat() {
	register_taxonomy(
			'info_cat',
		//カスタムタクソノミー名
			'info',
		//新規カスタムタクソノミーを反映させる投稿タイプの定義名
			array(
				'hierarchical' => true,
				'label' => 'カテゴリー分類',
				'show_ui' => true,
				'query_var' => true,
				'rewrite' => true,
				'singular_label' => 'カテゴリー分類',
				'exclude_from_search' => true,
			)
	);
	
	register_taxonomy(
		'brand_cat',
		//カスタムタクソノミー名
		'brand',
		//新規カスタムタクソノミーを反映させる投稿タイプの定義名
		array(
			'hierarchical' => true,
			'label' => 'カテゴリー分類',
			'show_ui' => true,
			'query_var' => true,
			'rewrite' => true,
			'singular_label' => 'カテゴリー分類'
		)
	);
}