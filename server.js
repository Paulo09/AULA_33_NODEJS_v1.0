import express, { request, response } from "express";
const app = express();


app.get('/teste1', function(request,response){
     
    return response.send("Teste1");

})

app.get('/teste/:id', function(request,response){
    
    const id = request.params.id;
    return response.send("Teste:"+id);

})


app.get('/teste/:id/:outro', function(request,response){
    const id = request.params.id;
    const outro = request.params.outro;
    return response.send("Teste:"+id+"-"+"Outro:"+outro);

})


app.get('/teste3', function(request,response){
     
    return response.send("Teste3");

})


app.listen(8000,function() {
   console.log("Servidor Executando.....");    
})