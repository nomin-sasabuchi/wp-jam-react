<?php
//Add image size サムネイル追加 
// https://qiita.com/gatespace/items/d6419b0b7e49c98ce829
add_theme_support( 'post-thumbnails', array( 'info','brand','product' ) );
//　ピックアップイベント
add_image_size( 'img1',1920,9999,true );

/*-------------------------------------------------------

カスタム投稿

----------------------------------------------------------*/  
//作成者追加
function codex_custom_init() {
	$args = array(
	'public' => true,
	'label' => '作成者',
	'supports' => array( 'title', 'editor', 'author',
	'thumbnail' => true
	)
	);
	register_post_type( 'test', $args );
}
add_action( 'init', 'codex_custom_init' );
//カスタム投稿追加
add_action( 'init', 'create_post_type' );
function create_post_type() {
$title_list = array(
	'test' => 'テスト',
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
			'show_in_rest' => true,
    	'rest_base' => 'tests',
		)
	);
}
}
//カテゴリー追加
add_action( 'init', 'create_post_type_cat' );
function create_post_type_cat() {
register_taxonomy(
	'test_cat',
	//カスタムタクソノミー名
	'test',
	//新規カスタムタクソノミーを反映させる投稿タイプの定義名
	array(
		'hierarchical' => true,
		'update_count_callback' => '_update_post_term_count',
		'label' => 'カテゴリー',
		'show_ui' => true,
		'query_var' => true,
		'rewrite' => true,
		'singular_label' => 'カテゴリー'
	)
);
}
//タグ追加
function post_tag_checkbox() {
global $wp_rewrite;
$rewrite = array(
	'slug' => get_option('tag_base') ? get_option('tag_base') : 'tag',
	'with_front' => ! get_option('tag_base') || $wp_rewrite->using_index_permalinks(),
	'ep_mask' => EP_TAGS,
);
$labels = array(
	'name' => _x( 'Tags', 'taxonomy general name' ),
	'singular_name' => _x( 'Tag', 'taxonomy singular name' ),
	'search_items' => __( 'Search Tags' ),
	'popular_items' => __( 'Popular Tags' ),
	'all_items' => __( 'All Tags' ),
	'parent_item' => null,
	'parent_item_colon' => null,
	'edit_item' => __( 'Edit Tag' ),
	'view_item' => __( 'View Tag' ),
	'update_item' => __( 'Update Tag' ),
	'add_new_item' => __( 'Add New Tag' ),
	'new_item_name' => __( 'New Tag Name' ),
	'separate_items_with_commas' => __( 'Separate tags with commas' ),
	'add_or_remove_items' => __( 'Add or remove tags' ),
	'choose_from_most_used' => __( 'Choose from the most used tags' ),
	'not_found' => __( 'No tags found.' )
);
register_taxonomy( 'test_tag', 'test', array(
	'hierarchical' => true,
	'query_var' => 'tag',
	'rewrite' => $rewrite,
	'public' => true,
	'show_ui' => true,
	'show_admin_column' => true,
	'_builtin' => true,
	'labels' => $labels,
	
));
}
add_action( 'init', 'post_tag_checkbox', 1 );