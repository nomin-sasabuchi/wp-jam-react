<?php
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
		'edit.php?post_type=news',//お知らせ
		'edit.php?post_type=info',//最新情報
		'edit.php?post_type=brand',//ブランド
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