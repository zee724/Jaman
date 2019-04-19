const express = require('express');

const app = express();


app.set('port',(process.env.PORT || 5000));
app.get('/',(req,res) => {
  res.send('Hello | ' + new Date(Date.now()));
});

app.get('/api/articles',(req,res)=>{
  res.send([1,2,3]);
})

app.listen(app.get('port'),()=>{
  console.log('Listening on port : '+app.get('port'))}
);