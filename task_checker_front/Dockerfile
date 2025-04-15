# nodeのLTSバージョンを指定する
FROM node:lts

# コンテナ内の作業ディレクトリを/appに指定。
WORKDIR /app

# 依存関係ファイルをコピー
COPY package*.json ./

# node_modulesとpackage-lock.jsonを明示的に削除する。
RUN rm -rf node_modules package-lock.json

# パッケージのインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# ポート5173を使用する
EXPOSE 5173

# サーバー起動のコマンド
CMD ["npm", "run", "dev"]