<?php
function get_skill_fields($skill) {
  $skill_custom = get_post_custom($skill->ID);
  $skill_fields = [
    //記事ID
    'id' => $skill->ID,
    // 公開日
    'time' => date('Y.m.d', strtotime($skill->post_date)),
    'title' => $skill->post_title,
    'icon' => wp_get_attachment_url($skill_custom['icon'][0],'full'),
    'level' => $skill_custom['level'][0],
  ];
  return $skill_fields;
}

function get_skills( $data ) {
  if( $data['id']) return get_skill_by_id($data);

  $default_args = [
    'post_type'      => 'skills',
    'posts_per_page' => -1,
    'post_status'    => 'publish',
    'orderby'        => 'date',
    'order'          => 'DESC'
  ];

  $skills = get_posts($default_args);

  if ( empty( $skills ) ) {
    return null;
  }

  $return_posts = array_map('get_skill_fields', $skills);

  return $return_posts;
}

function get_skill_by_id( $data ) {
  global $default_args;

  $post = get_post( $data['id'], OBJECT, $default_args);

  if ( empty( $post ) ) {
    return null;
  }

  $return_posts = get_skill_fields($post);

  return $return_posts;
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'custom/v1', '/skills', array(
    'methods' => 'GET',
    'callback' => 'get_skills',
  ) );
});