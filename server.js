import express, { request, response } from "express";

import Connection from "./config/Connection.js";


const app = express();

app.use(express.json());


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

app.get('/query',function(request,response){
    const dados = request.query;
    return response.send("Querys:"+dados.nome + dados.sobrenome);
})


app.get('/teste3', function(request,response){
     
    return response.send("Teste3");

})

// Crud de usuários

// CRUD - USUARIOS
app.post('/usuarios', function(request, response) {
    // CONEXAO COM BANCO E FAÇO UM SELECT EM USUARIOS
    response.json([
        {
            id: 1,
            nome: "Max3"
        }
    ]);
});

app.get('/usuarios', function(request, response) {
    const body = request.body;

    const connect = new Connection();

    connect.query("SELECT * FROM usuarios",{},function(error,results){

        response.json(results);

    })
    
});

app.get('/usuarios/:id', function(request, response) {
    const id = request.params.id;
    const connect = new Connection();
    connect.query("SELECT * FROM usuarios WHERE id = "+id, {}, function(error, results) {
        response.json(results);
    })
});



app.post('/usuarios', function(request, response) {
    const body = request.body;
    const connect = new Connection();
    connect.query("INSERT INTO usuarios SET ?", body, function(error, results) {
        response.json(results);
    })
});

app.put('/usuarios/:id', function(request, response) {
    const id = request.params.id;
    const body = request.body;
    const connect = new Connection();
    connect.query("UPDATE usuarios SET ? WHERE id = ?", [body, id], function(error, results) {
        response.json(results);
    })
});


app.delete('/usuarios/:id', function(request, response) {
    const id = request.params.id;
    const connect = new Connection();
    connect.query("DELETE FROM usuarios WHERE id = ?", [id], function(error, results) {
        response.json(results);
    })
});




app.put('/usuarios/:id', function(request, response) {
    const id = request.params.id;
    const body = request.body;
    // CONEXAO COM BANCO E FAÇO UM UPDATE EM USUARIOS
    response.json([
        {
            id: 1,
            nome: "Max"
        }
    ]);
});


app.delete('/usuarios/:id', function(request, response) {
    const id = request.params.id;
    // CONEXAO COM BANCO E FAÇO UM DELETE EM USUARIOS
    // DELETE FROM usuarios WHERE id = 1
    response.json([
        {
            id: 1,
            nome: "Max"
        }
    ]);
});



app.listen(8000,function() {
   console.log("Servidor Executando.....");    
})