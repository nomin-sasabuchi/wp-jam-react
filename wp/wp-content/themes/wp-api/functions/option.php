<?php  
//Gutenbergを無効
add_filter('use_block_editor_for_post', '__return_false', 10);


// プレビューのリンクの修正
function replace_preview_post_link ( $url ) {
  $path = parse_url($url)["path"];
  $query = parse_url($url)["query"];
  parse_str($query, $results);
  $id = $results['preview_id'];
  $slug = str_replace("{$id}/", "", $path);
  $domain = "http://localhost:3000/api/preview";
  $token = "fdasffdasfasdfsa";
  $replace_url = "{$domain}?{$query}&secret={$token}&slug={$slug}&id={$id}";
  return $replace_url;
}
add_filter('preview_post_link', 'replace_preview_post_link');

wp_localize_script(
  'wp-api', 
  'WP_API_Settings', 
  array( 'root' => esc_url_raw( rest_url() ), 
  'nonce' => wp_create_nonce( 'wp_rest' ) ) );