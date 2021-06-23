
<?php
    $post_data = [];

    $post_args = [
        'post_type'      => 'works',
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
        'time'  => get_the_time('Y.m.d'),
        'title' => get_the_title(),
        'thumbnail' => get_the_post_thumbnail_url( get_the_ID(),"large"),
        'startData' => post_custom('startData'),
        'endData' => post_custom('endData'),
        'language' => post_custom('language'),
        'FlameWork' => post_custom('FlameWork'),
        'Use' => post_custom('Use'),
        'link' => post_custom('link'),
        'Github' => post_custom('Github'),
    ];

    endwhile;
    wp_reset_postdata();
    endif;

    return $post_data;
?>