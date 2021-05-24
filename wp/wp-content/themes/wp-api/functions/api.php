<?php
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