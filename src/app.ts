import express from "express";
import cors from "cors";
import ClienteService from "./services/ClienteService";
import AutorService from "./services/AutorService";
import FuncionarioService from "./services/FuncionarioService";
import ProdutoService from "./services/ProdutoService";
import VendaService from "./services/VendaService";
import ItemVendidoService from "./services/ItemVendidoService";
import PagamentoService from "./services/PagamentoService";
import UsuarioService from "./services/UsuarioService";




const app = express();
app.use(express.json());
app.use(cors());

const cli = new ClienteService();
const aut = new AutorService()
const fun = new FuncionarioService()
const prod= new ProdutoService()
const ven = new VendaService()
const itn = new ItemVendidoService()
const pag = new PagamentoService()
const us = new UsuarioService()

app.get("/api/v1/cliente/listar",(req,res)=>{
    cli.listarClientes(req,res);
});



app.post("/api/v1/cliente/cadastro",(req,res)=>{
    cli.cadastroCliente(req,res);
})


// ############################################ Autor ##############################################

app.get("/api/v1/autor/listar",(req,res)=>{
    aut.listarAutores(req,res);
});

app.post("/api/v1/autor/cadastro",(req,res)=>{
    aut.cadastroAutor(req,res);
})

// ########################################### Funcionario #########################################

app.get("/api/v1/funcionario/listar",(req,res)=>{
    fun.listarFuncionarios(req,res);
});

app.post("/api/v1/funcionario/cadastro",(req,res)=>{
    fun.cadastroFuncionario(req,res);
})

// ########################################### Produto #########################################

app.get("/api/v1/produto/listar",(req,res)=>{
    prod.listarProdutos(req,res);
});

app.post("/api/v1/produto/cadastro",(req,res)=>{
    prod.cadastroProduto(req,res);
})

app.get("/api/v1/produto/listarmaisvendidos",(req,res)=>{
    prod.listarProdutosMaisVendidos(req,res);
})

app.get("/api/v1/produto/listarporcategoria/:categoria",(req,res)=>{
    prod.ListarPorCategoria(req,res);
})

app.get("/api/v1/produto/listarporid/:id",(req,res)=>{
    prod.ListarPorId(req,res);
})

// ########################################### Venda #########################################

app.get("/api/v1/venda/listar",(req,res)=>{
    ven.listarVendas(req,res);
});

app.post("/api/v1/venda/cadastro",(req,res)=>{
    ven.cadastroVenda(req,res);
})

// ########################################### Item Vendido #########################################

app.get("/api/v1/itemvendido/listar",(req,res)=>{
    itn.listarItensVendidos(req,res);
});

app.post("/api/v1/itemvendido/cadastro",(req,res)=>{
    itn.cadastroItemVendido(req,res);
})

// ########################################### Pagamento #########################################

app.get("/api/v1/pagamento/listar",(req,res)=>{
    pag.listarPagamentos(req,res);
});

app.post("/api/v1/pagamento/cadastro",(req,res)=>{
    pag.cadastroPagamento(req,res);
})

// ########################################### Usuários #########################################
app.post("/api/v1/usuario/cadastrar",(req,res)=>{
    us.cadastrarUsuario(req,res)
})




app.listen(5000,()=>{
    console.log(`Online em: http://127.0.0.1:5000`)
});


