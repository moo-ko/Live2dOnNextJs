# Next.js 上で動作する WEB アプリに Live2D Cubism SDK for Web の公式デモアプリを表示させるサンプル

## ビルド

```bash
cd livd2d-on-nextjs
npm i
npm run build
```

## 起動

```bash
npm run dev
```

[http://localhost:3000/live2d](http://localhost:3000/live2d) にLive2Dのモデルを表示するデモアプリが表示されます。

## 開発環境

* Live2D Cubism 5 SDK for Web R3
* Next.js 15.2.1
* Node.js 22.14.0

Dev Container の設定をしているので、Docker と VSCode の拡張機能 Dev Containers をインストールし、Docker と VSCode を起動した後に、VSCode を Dev Container で起動しなおせば開発に必要なものはそろった状態で動作させられると思います。

* Live2D<br>
https://www.live2d.com/
* Next.js<br>
https://nextjs.org/
* Node.js<br>
https://nodejs.org/
* Dev Containers<br>
https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers
* Docker<br>
https://www.docker.com/

## 大まかな構成

### src/app/live2d

ルーティング

### src/components/live2d

live2d を表示させるためのコンポーネントです。live2dのメソッドの呼び出しを行います。

### src/lid/live2d

Live2D Cubism SDK for Web の公式のソースをベースに配置しました。

`framework`、`core` は公式のソースコードそのままです。

`demo` は `lappdefine.ts` を実行環境に合わせて設定を少し修正しました。
また、`lappdelegate.ts` は  `document.createElement()` のキャンバスではなく、Reactコンポーネント側で用意したキャンバスを使用できるよう修正しました。

`main.ts` は本構成では不要なので削除しました。

## public/live2d

公式の js ファイルと `Resources` フォルダを配置しました。
