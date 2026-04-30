import express from 'express';

//Instanciando o servidor express()
const server = express();

/**
 * 1o. Parâmetro - Rota (endpoint)
 * 2o. Parâmetro - Callback (função a ser executada quando a rota for acessada)
 */
server.get("/", (req, res)=>{
    /**
     * req - Objeto de requisição (request)
     * res - Objeto de resposta (response)
     */
    res.send("Rota Raiz " + Date());
});

//Iniciando o servidor na porta 3000
/**
 * listen() - Método para iniciar o servidor
 * Parâmetros:
 * 1o. Parâmetro - Porta (número da porta onde o servidor irá escutar as requisições)
 * 2o. Parâmetro - Callback (função a ser executada quando o servidor for iniciado)
 */
server.listen(3000, ()=>{
    console.log("Server on port 3000");
});



