import {Request, Response} from "express";
import Pagamento from "../classes/Pagamento";
import PagamentoRepository from "../repositories/PagamentoRepository";
import Venda from "../classes/Venda";

export default class PagamentoService{
    pagRepository = new PagamentoRepository();

    async cadastroPagamento(req:Request, res:Response){
        const pag:Pagamento = new Pagamento();
        // console.log(req.body)
        pag.total_pagar = req.body.total_pagar
        pag.venda = new Venda()
        pag.venda.id = req.body.id_venda;
        
        try{
            const rs = await this.pagRepository.Cadastrar(pag);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }

    async listarPagamentos(req:Request, res:Response){
        try{
            const rs = await this.pagRepository.Listar();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

}