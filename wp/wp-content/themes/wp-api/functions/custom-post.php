<?php
//Add image size サムネイル追加 
// https://qiita.com/gatespace/items/d6419b0b7e49c98ce829
add_theme_support( 'post-thumbnails', array('works','skills' ) );
//　ピックアップイベント
add_image_size( 'img1',1920,9999,true );

/*-------------------------------------------------------

カスタム投稿

----------------------------------------------------------*/  
add_action( 'init', 'create_post_type' );
function create_post_type() {
	$title_list = array(
    'works' => '制作実績',
    'skills' => 'スキル',
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
				'rest_base' => $title_key,
				'show_in_graphql' => true,
				'graphql_plural_name' => $title_key,
				'graphql_single_name' => $title_key.'item'
			)
		);
	}
}

add_action( 'init', 'create_post_type_cat' );
function create_post_type_cat() {
	register_taxonomy(
			'works_cat',
		//カスタムタクソノミー名
			'works',
		//新規カスタムタクソノミーを反映させる投稿タイプの定義名
			array(
				'hierarchical' => true,
				'label' => '制作物種類',
				'show_ui' => true,
				'query_var' => true,
				'rewrite' => true,
				'singular_label' => '制作物種類',
				'exclude_from_search' => true,
			)
	);
}

add_action( 'init', 'post_tag_checkbox', 1 );
function post_tag_checkbox() {
	global $wp_rewrite;
	$rewrite = array(
	  'slug' => get_option('tag_base') ? get_option('tag_base') : 'tag',
	  'with_front' => ! get_option('tag_base') || $wp_rewrite->using_index_permalinks(),
	  'ep_mask' => EP_TAGS,
	);
	$labels = array(
	  'name' => '使用言語',
	  'singular_name' => '使用言語',
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
		'not_found' => __( 'No tags found.' ),
	);
	register_taxonomy( 'works_tag_skills', 'works', array(
		'hierarchical' => true,
		'query_var' => 'tag',
		'rewrite' => $rewrite,
		'public' => true,
		'show_ui' => true,
		'show_admin_column' => true,
		'_builtin' => true,
		'labels' => $labels
	));
}

add_action( 'init', 'post_tag', 1 );
function post_tag() {
	register_taxonomy( 'works_tag', 'works', array(
		'hierarchical' => false,
		'query_var' => 'tag',
		'rewrite' => $rewrite,
		'public' => true,
		'show_ui' => true,
		'show_admin_column' => true,
		'_builtin' => true,
		'labels' => $labels
	));
}
/*-------------------------------------------------------

Rest-API アイキャッチ画像追加

----------------------------------------------------------*/ 
add_action('rest_api_init', 'customize_api_response');
function customize_api_response() {
  // アイキャッチ画像のレスポンスを追加する投稿タイプ
  $post_types = ['works'];

  foreach ($post_types as $post_type) {
    register_rest_field(
      $post_type,
      'thumbnail',
      array(
        'get_callback'  => function ($post) {
          $thumbnail_id = get_post_thumbnail_id($post['id']);

          if ($thumbnail_id) {
            // アイキャッチが設定されていたらurl・width・heightを配列で返す
            $img = wp_get_attachment_image_src($thumbnail_id, 'large');

            return [
              'url' => $img[0],
              'width' => $img[1],
              'height' => $img[2]
            ];
          } else {
            // アイキャッチが設定されていなかったら空の配列を返す
            return [];
          }
        },
        'update_callback' => null,
        'schema'          => null,
      )
    );
  }
}


/*-------------------------------------------------------

Rest-API Worksカスタムフィールド追加

----------------------------------------------------------*/ 
// rest apiにカスタムフィールドを出力
add_action( 'rest_api_init', 'slug_register_fruits' );
function slug_register_fruits() {
  register_rest_field( 
    'works',   //フィールドを追加したいcustom投稿タイプを指定（先ほど登録したカスタム投稿タイプslugを指定）
    'works_meta',  // rest-apiに追加するキー
    array(
      'get_callback' => function( $object, $field_name, $request ) {
        // 出力したいカスタムフィールドのキーをここで定義
        $meta_fields = array(
					'startData',
					'endData',
					'language',
					'FlameWork',
					'Use',
					'link',
					'Github',
					'tests',
        );
        $meta = array();
        foreach ( $meta_fields as $field ) {
          // バリデーションを一切してないので注意
          $meta[ $field ] = SCF::get($field); // 第3引数はfalse、Smart Custom Fieldの繰り替えし機能を使うため
        }
        return $meta;
      },
      'update_callback' => null,
      'schema'          => null,
    )
  );
}

/*-------------------------------------------------------

独自エンドポイント登録

----------------------------------------------------------*/ 
include( get_template_directory().'/api/works-data.php' );
include( get_template_directory().'/api/skills-data.php' );