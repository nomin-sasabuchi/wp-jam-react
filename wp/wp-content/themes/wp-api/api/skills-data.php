
<?php
    $post_data = [];

    $post_args = [
        'post_type'      => 'skills',
        'posts_per_page' => -1,
        'post_status'    => 'publish',
        'orderby'        => 'date',
        'order'          => 'DESC'
    ];

    $post_query = new WP_Query( $post_args );
    if ( $post_query->have_posts() ) :
    while ( $post_query->have_posts() ) :
    $post_query->the_post();
    global $post;


    $post_data[] = [
        //記事ID
        'id' => $post->ID,
        //公開日
        'time' => get_the_time('Y.m.d'),
        'title' => get_the_title(),
        'icon' =>  wp_get_attachment_image_src(SCF::get('icon'),'full')[0],
        'level' => post_custom('level'),
    ];

    endwhile;
    wp_reset_postdata();
    endif;

    return $post_data;
?>