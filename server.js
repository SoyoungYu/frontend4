const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());
// 데이터 가져올 때 생기는 문제를 해결할 수 있음

const path = require('path');
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views'), 'index.html');
})
app.get('/*', (req, res)=>{ // 에러 났을 때 404 페이지 불러오기
    //res.sendFile(path.join(__dirname, 'views'), '404.html');
    res.send('File not Found');
})

app.listen(PORT, ()=>{
    console.log(`server running on PORT ${PORT}`);
})