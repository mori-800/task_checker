# nodeのLTSバージョンを指定する
FROM node:lts

# コンテナ内の作業ディレクトリを/appに指定
WORKDIR /app

# 依存関係ファイルをコピー
COPY package*.json ./

# パッケージのインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# Prisma CLIを導入
RUN npm install -g prisma

# ポート3000を使用する
EXPOSE 3000

# 起動コマンドを実行
CMD ["sh", "-c", "npx prisma generate && npx prisma migrate deploy && npx prisma db seed && node index.js"]