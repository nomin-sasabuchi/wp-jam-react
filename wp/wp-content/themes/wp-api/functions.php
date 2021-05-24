<?php
/*
*	Function.php
*
*		1. Remove action
*		2. css/js
*		5. その他オプション
*		6. customCSS
*
*/


/*-------------------------------------------------------

Remove action 

----------------------------------------------------------*/  
//https://qiita.com/pscreator/items/9cd90ef0a418c1fcaf51
//https://osyu-web.com/wordpress/setting-after-installing-wordpress/
remove_action('wp_head', 'wp_resource_hints', 2);
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_head', 'rest_output_link_wp_head');
remove_action('wp_head', 'wp_oembed_add_discovery_links');
remove_action('wp_head', 'wp_oembed_add_host_js');
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
remove_action('wp_head', 'rel_canonical');
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('wp_print_styles', 'print_emoji_styles' );
remove_action('admin_print_styles', 'print_emoji_styles');
// APIによるバージョンチェックの通信をさせない
remove_action('wp_version_check', 'wp_version_check');
remove_action('admin_init', '_maybe_update_core');
function remove_block_library_style()
{
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
}
//verを消す
function remove_cssjs_ver2( $src ) {
    if ( strpos( $src, 'ver=' ) )
        $src = remove_query_arg( 'ver', $src );
    return $src;
}
add_filter( 'style_loader_src', 'remove_cssjs_ver2', 9999 );
add_filter( 'script_loader_src', 'remove_cssjs_ver2', 9999 );




/*-------------------------------------------------------

Add image size サムネイル追加

----------------------------------------------------------*/  
// https://qiita.com/gatespace/items/d6419b0b7e49c98ce829
add_theme_support( 'post-thumbnails', array('test'));
//　ピックアップイベント
add_image_size( 'works-img',750,464,true );



/*-------------------------------------------------------

Dashboard サイドメニュー

----------------------------------------------------------*/  
// 一部メニュー非表示
function remove_menus () {
	global $menu;
	unset($menu[5]); // 投稿
	unset($menu[25]); // コメント
	if (!current_user_can('level_10')) { //level10以下のユーザーの場合ウィジェットをunsetする
		unset($menu[15]); // リンク
		unset($menu[20]); // ページ
		unset($menu[60]); // テーマ
		unset($menu[65]); // プラグイン
		unset($menu[75]); // ツール
		unset($menu[80]); // 設定
	}
}
add_action('admin_menu', 'remove_menus');//管理メニューの追加・削除
//http://hapisupu.com/2015/11/wordpress-plugin-create-02/
function custom_menu_order($menu_ord) {
	if (!$menu_ord) return true;
	return array(
		'index.php', // ダッシュボード
		'separator1', // 最初の区切り線
		'edit.php', // 投稿
        'edit.php?post_type=test',//制作実績
		'separator2', // 二つ目の区切り線
		'upload.php', // メディア
		'themes.php', // 外観
		'plugins.php', // プラグイン
		'users.php', // ユーザー
		'tools.php', // ツール
		'options-general.php', // 設定
		'separator-last', // 最後の区切り線
	);
}
add_filter('custom_menu_order', 'custom_menu_order'); // Activate custom_menu_order
add_filter('menu_order', 'custom_menu_order');


/*-------------------------------------------------------

管理画面ダッシュボード

----------------------------------------------------------*/  

function custom_login_logo() {
	echo '<style type="text/css">h1 a { background: url(/module/images/logo.png) no-repeat center top !important; width: 100% !important; background-size:contain !important; }</style>';
}
add_action('login_head', 'custom_login_logo');
// バージョン更新を非表示にする
add_filter('pre_site_transient_update_core', '__return_zero');
// フッターWordPressリンクを非表示に
function custom_admin_footer() {
	echo '　';
}
add_filter('admin_footer_text', 'custom_admin_footer');

// 管理バーの項目を非表示
//https://bl6.jp/web/wordpress/hide-toolbar-wp/
function remove_admin_bar_menu( $wp_admin_bar ) {
	$wp_admin_bar->remove_menu( 'wp-logo' ); // WordPressシンボルマーク
}
add_action( 'admin_bar_menu', 'remove_admin_bar_menu', 70 );

// 管理バーのヘルプメニューを非表示にする
//http://wpdocs.osdn.jp/%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%81%AE%E7%A8%AE%E9%A1%9E%E3%81%A8%E6%A8%A9%E9%99%90
function my_admin_head(){
	if (!current_user_can('level_10')) {
		echo '<style type="text/css">#contextual-help-link-wrap,#screen-options-link-wrap{display:none;}</style>';
	}
}
add_action('admin_head', 'my_admin_head');

// ダッシュボードウィジェット非表示
function example_remove_dashboard_widgets() {
	if (!current_user_can('level_10')) { //level10以下のユーザーの場合ウィジェットをunsetする
		global $wp_meta_boxes;
		unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']); // 現在の状況
		unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']); // 最近のコメント
		unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']); // 被リンク
		unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']); // プラグイン
		unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press']); // クイック投稿
		unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_recent_drafts']); // 最近の下書き
		unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']); // WordPressブログ
		unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']); // WordPressフォーラム
	}
}
add_action('wp_dashboard_setup', 'example_remove_dashboard_widgets');

add_filter( 'dashboard_recent_posts_query_args', 'my_dashboard_recent_posts_query_args', 10, 1 );



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
				'show_ui' => true
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





/*-------------------------------------------------------

お問い合わせ

----------------------------------------------------------*/  


function wpcf7_custom_item_error_position( $items, $result ) {
    $class = 'wpcf7-custom-item-error';
    $names = array( 'tel-1','tel-2','tel-3','fax-1','fax-2','fax-3');
    
    if ( isset( $items['invalidFields'] ) ) {
        foreach ( $items['invalidFields'] as $k => $v ) {
            $orig = $v['into'];
            $name = substr( $orig, strrpos($orig, ".") + 1 );
            if ( in_array( $name, $names ) ) {
                $items['invalidFields'][$k]['into'] = ".{$class}.{$name}";
            }
        }
    }
    return $items;
}
add_filter( 'wpcf7_ajax_json_echo', 'wpcf7_custom_item_error_position', 10, 2 );

//メールアドレス 確認
function wpcf7_main_validation_filter( $result, $tag ) {
    $type = $tag['type'];
    $name = $tag['name'];
    $_POST[$name] = trim( strtr( (string) $_POST[$name], "\n", " " ) );
    if ( 'email' == $type || 'email*' == $type ) {
      if (preg_match('/(.*)_confirm$/', $name, $matches)){
        $target_name = $matches[1];
        if ($_POST[$name] != $_POST[$target_name]) {
          if (method_exists($result, 'invalidate')) {
            $result->invalidate( $tag,"確認用のメールアドレスが一致していません");
        } else {
            $result['valid'] = false;
            $result['reason'][$name] = '確認用のメールアドレスが一致していません';
          }
        }
      }
    }
    return $result;
}

add_filter( 'wpcf7_validate_email', 'wpcf7_main_validation_filter', 11, 2 );
add_filter( 'wpcf7_validate_email*', 'wpcf7_main_validation_filter', 11, 2 );


/*-------------------------------------------------------

その他オプション

----------------------------------------------------------*/  


//タイトルタグ自動
add_theme_support('title-tag');

//Gutenbergを無効
add_filter('use_block_editor_for_post', '__return_false', 10);


/* 自動で入るpタグ削除 */
add_action('init', function () {
    remove_filter('the_excerpt', 'wpautop');
    remove_filter('the_content', 'wpautop');
});
add_filter('tiny_mce_before_init', function ($init) {
    $init['wpautop'] = false;
    $init['apply_source_formatting'] = true;
    return $init;
});



/*-------------------------------------------*/
/* 独自エンドポイント登録
/*-------------------------------------------*/
function add_custom_endpoint()
{
	//
	register_rest_route(
	//ネームスペース
	'custom/v0',
	//ベースURL
	'/test',
	//オプション
		array(
			'methods'  =>  WP_REST_Server::READABLE,
			'callback' => 'fetch_test_data'
		)
	);
}
add_action('rest_api_init', 'add_custom_endpoint');

//https://yukiyuriweb.com/introduction-to-wordpress-action-and-filter-hooks/
//フック = イベントトリガー
//add_action( 'フックさせたい場所の名前', '呼び出してほしい関数名' );
// rest_api_init = WP_REST_Server インスタンスの生成後に呼び出される。REST エンドポイントオブジェクトが生成されているため、エンドポイントの追加などを行う際にフックされる。

/*
* WP REST APIのレスポンス処理
* @param {String} $file_name ファイル名（拡張子なし）
* @param {Array} $param ajaxで受け取ったデータ
*/
//rest_response = テーマ内にある、APIの処理を書いたファイルからAPIで処理した内容を取得
function rest_response($file_name, $param = null) {
	$api_file = locate_template("api/${file_name}.php");
	$res      = !empty($api_file) ? include_once $api_file : [];
	$response = new WP_REST_Response($res);
	$response->set_status(200);
	return $response;
}

//テストデータ取得
function fetch_test_data($param)
{
	return rest_response('fetch-test-data', $param);
}