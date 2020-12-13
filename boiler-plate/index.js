// express 모듈 가져오기
const express = require('express')
const app = express()
const port = 5000

// 몽고디비 애플리케이션 연결 정보
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yoonar:ahdrhElQl-3-@boilerplate.vrhud.mongodb.net/boilerplate?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))


// 루트 디렉토리에 Hello World! 를 찍도록 함
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// 포트 5000 에서 이 앱을 실행함
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})