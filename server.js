import express, { request, response } from "express";
const app = express();


app.get('/teste1', function(request,response){
     
    return response.send("Teste1");

})

app.get('/teste2', function(request,response){
     
    return response.send("Teste2");

})


app.get('/teste3', function(request,response){
     
    return response.send("Teste3");

})


app.listen(8000,function() {
   console.log("Servidor Executando.....");    
})