# セットアップ手順

*** 前提条件 ***

docker/docker-compose　composer が使える状態にあること

## インストールはこちら

- [Docker for Mac](https://docs.docker.com/docker-for-mac/install/)

- [Docker for Windows](https://docs.docker.com/docker-for-windows/install/)

- [composer インストール方法](https://qiita.com/sano1202/items/50e5a05227d739302761)
- [composer](https://getcomposer.org/)

## 手順

### 1.envファイルの設定
```bash:.env
# DB
MYSQL_ROOT_USER=root
MYSQL_ROOT_PASSWORD=root
MYSQL_DATABASE=wordpress
MYSQL_USER=wordpress
MYSQL_PASSWORD=wordpress

# PhpAdmin
PMA_HOST=db:3306
PMA_USER=root
PMA_PASSWORD=root

# WordPress
WORDPRESS_DB_HOST=db:3306
WORDPRESS_DB_USER=wordpress
WORDPRESS_DB_PASSWORD=wordpress
WORDPRESS_DB_NAME=wordpress
```

### 2.Docker イメージのビルド
```コンテナの作成
$ docker-compose up -d
```

### 3.テーマ直下で下記コマンドを実行
*twigを使用するためのtimberのインストール*
$ composer require timber/timber
*npmのセットアップ*
$ yarn
*静的環境*
$ yarn dev
*動的環境 (ワードプレス環境)*
$ yarn build

**Web ブラウザーでアクセス**

- WordPress：[http://localhost:8083]
- phpMyAdmin：[http://localhost:80]

※docker コマンドはプロジェクトディレクトリから実行してね

### その他コマンド

**コンテナ起動**

```bash:terminal
docker-compose start
```

**コンテナ停止**

```bash:terminal
docker-compose stop
```

**シャットダウン(コンテナ全て削除されるので注意)**

```bash:terminal
docker-compose down
```

**起動確認**

Status が `Up` になっていれば OK

```bash:terminal
docker-compose ps
```

option `--volumes`で、コンテナー、ネットワーク、および WordPress データベースも削除

**起動中のコンテナに入る**

```bash:terminal
docker exec -i -t コンテナ名 bash
```

# チェックリスト

- [ ] Docker がビルドできて、WordPressにログインできた
- [ ] オリジナルテーマを有効化した
