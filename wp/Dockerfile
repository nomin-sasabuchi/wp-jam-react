# WordPress公式イメージでは /usr/local/etc/php/conf.d 内に適当な名前の ini ファイルを作れば、
# php.ini に書き加えたのと同じ扱いになるので、起動時に /usr/local/etc/php/conf.d/*.ini を読み込むように設定する
FROM wordpress:latest

COPY ./tmp/ /var/www/html/

# PHP.ini Settings
# file_uploads - HTTP ファイルアップロード を有効とするかどうか	- 初期値：1 → 1
# memory_limit - 一回のリクエストに使用できるメモリの上限	- 初期値：128MB → 500MB
# upload_max_filesize - アップロードされるファイルの最大サイズ - 初期値：2MB → 500MB
# post_max_size - POSTデータに許可される最大サイズ 初期値：8MB → 500MB
# max_execution_time - スクリプトがパーサにより強制終了されるまでに許容される最大の 時間を秒単位で指定します 初期値：30 → 600
RUN echo "file_uploads = On\n" \
  "memory_limit = 600M\n" \
  "upload_max_filesize = 600M\n" \
  "post_max_size = 600M\n" \
  "max_execution_time = 600\n" \
  > /usr/local/etc/php/conf.d/conf.ini

# MailHog でメールを受信できるように設定]
#--location = リダイレクトされている場合でもデータをが欲しい場合にはこのオプションを指定する
#--output = ダウンロードしたデータをファイルとして保存
#chmod = ファイル or ディレクトリに対する権限を設定するコマンド
#+x =  すべてのユーザーに実行権限を与える
RUN curl --location --output /usr/local/bin/mhsendmail https://github.com/mailhog/mhsendmail/releases/download/v0.2.0/mhsendmail_linux_amd64 && \
  chmod +x /usr/local/bin/mhsendmail

#sendmail_path = sendmail プログラムを探すパスを指定します
RUN echo 'sendmail_path="/usr/local/bin/mhsendmail --smtp-addr=mailhog:1025 --from=admin@example.com"' > /usr/local/etc/php/conf.d/mailhog.ini