const express = require("express")
const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("listening on localhost 3000")
})

// corsをインポート
const cors = require('cors')

// corsをインポートして、アプリケーションに適用させる記述
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// multerのインポート
const multer = require('multer');
// クライアントからアップロードされたファイルの保存ディレクトリをuploads/に設定
const upload = multer({ dest: 'uploads/' });
// クライアントがブラウザから画像にアクセスするためのURL
app.use('/uploads', express.static('uploads'))

// prismaの読み込み
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// 全タスクの取得処理
app.get("/tasks", async(req, res) => {
  try {
  const AllTasks = await prisma.task.findMany();
  const updatedTasks = AllTasks.map((task) => {
    if (task.image_url) {
      task.image_url = `http://localhost:3000/${task.image_url}`
    } else {
      task.image_url = null;
    }
    return task;
  });

  res.json(updatedTasks)
  } catch(error) {
  console.log(error)
  }
})


// 全ジャンルの取得処理
app.get("/genres", async(req, res) => {
  try {
  const AllGenres = await prisma.genre.findMany();
  res.json(AllGenres)
  } catch(error) {
  console.log(error)
  }
})

app.post("/tasks", upload.single('image_url'), async (req, res) => {
  console.log("リクエストボディ",req.body)
  try {
    const imagePath = req.file ? req.file.path : null; // アップロードした画像のパス
    console.log("画像",req.file)
    const deadlineDate = new Date(req.body.deadlineDate)
    const savedData = await prisma.task.create({
      data: {
        ...req.body,
        image_url: imagePath,
        deadlineDate: deadlineDate,
        status: Number(req.body.status), 
        genreId: Number(req.body.genreId),  
      },
    });

   if (savedData.image_url) {
      savedData.image_url = `http://localhost:3000/${savedData.image_url}`
      console.log(savedData.image_url)
    } else {
      savedData.image_url = null;
    }

    res.json(savedData)
  } catch(error) {
    console.log(error)
    res.status(500).send("タスクの保存に失敗しました")
  }
})