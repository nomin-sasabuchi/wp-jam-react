<?php
function get_work_fields($work) {
  $work_custom = get_post_custom($work->ID);
  // var_dump($work);
  $work_fields = [
    'id' => $work->ID,
    //公開日
    'time'  => date('Y.m.d', strtotime($works->post_date)),
    'title' => $work->post_title,
    'thumbnail' => get_the_post_thumbnail_url( $work->ID,"large"),
    'startData' => $work_custom['startData'],
    'endData' => $work_custom['endData'],
    'language' => $work_custom['language'],
    'FlameWork' => $work_custom['FlameWork'],
    'Use' => $work_custom['Use'],
    'link' => $work_custom['link'],
    'Github' => $work_custom['Github'],
    'category' => get_the_terms($work->ID, 'works_cat'),
    'skillsTags' =>  get_the_terms($work->ID, 'works_tag_skills'),
    'freeTags' =>  get_the_terms($work->ID, 'works_tag'),
  ];

  return $work_fields;
}

function get_works( $data ) {
  if( $data['id']) return get_work_by_id($data);
  $default_args = [
    'post_type'      => 'works',
    'posts_per_page' => -1,
    'post_status'    => 'publish',
    'orderby'        => 'date',
    'order'          => 'DESC'
  ];
  // $works = new WP_Query( $default_args );
  $works = get_posts($default_args);
  
  if ( empty( $works ) ) {
    return null;
  }

  $return_posts = array_map('get_work_fields', $works);

  return $return_posts;
}



function get_work_by_id( $data ) {
  global $default_args;
  $post = get_post( $data['id'], OBJECT, $default_args);

  // var_dump($post);
  if ( empty( $post ) ) {
    return null;
  }
  $return_posts = get_work_fields($post);
  return $return_posts;
}



add_action( 'rest_api_init', function () {
  register_rest_route( 'custom/v1', '/works', array(
    'methods' => 'GET',
    'callback' => 'get_works',
  ) );
});

// var_dump(WP_REST_Request);

// add_action = 