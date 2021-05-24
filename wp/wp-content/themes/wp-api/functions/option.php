<?php  
//その他オプション

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

//カスタム投稿 カテゴリーラジオボタン
add_filter( "radio_buttons_for_taxonomies_no_term_info_cat", "__return_FALSE" );
add_filter( "radio_buttons_for_taxonomies_no_term_brand_cat", "__return_FALSE" );