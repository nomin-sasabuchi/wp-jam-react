
<?php
    $post_data = [];

    $post_args = [
        'post_type'      => 'test',
        'posts_per_page' => 30,
        'post_status'    => 'publish',
        'orderby'        => 'date',
        'order'          => 'DESC'
    ];

    $post_query = new WP_Query( $post_args );
    if ( $post_query->have_posts() ) :
    while ( $post_query->have_posts() ) :
    $post_query->the_post();
    global $post;

    //著者情報
    $author          = get_userdata($post->post_author);
    $author_id       = $author->ID;
    $author_nicename = get_the_author_meta('user_nicename');

    //カテゴリ取得
    $category   = get_the_terms($post->ID, 'test_cat');
    $cat_name   = $category[0]->name;
    $cat_slug   = $category[0]->slug;
    //タグ
    $tags       = get_the_terms($post->ID, 'test_tag');
    $tags_array = [];
    foreach ($tags as $tag) {
        $tags_array[] = [
            'tag_id'    => $tag->term_id,
            'tag_name'  => $tag->name
        ];
    }

    $post_data[] = [
        //記事ID
        'id'            => $post->ID,
        //公開日
        'time'          => get_the_time('Y.m.d'),
        'title' => get_the_title(),
        'testtitle' => post_custom('title'),
        //執筆者
        'author_name'   => $author_nicename,
        //執筆者の画像
        'avatar_src'    => $avatar_src,
        'category'      => $cat_name,
        'category_slug' => $cat_slug,
        //タグ
        'tags'          => $tags_array,
    ];

    endwhile;
    wp_reset_postdata();
    endif;

    return $post_data;
?>

