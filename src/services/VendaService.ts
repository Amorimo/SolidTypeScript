import {Request, Response} from "express";
import Venda from "../classes/Venda";
import VendaRepository from "../repositories/VendaRepository";

export default class VendaService{
    venRepository = new VendaRepository();

    async cadastroVenda(req:Request, res:Response){
        const ven:Venda = new Venda();
        // console.log(req.body)
        ven.funcionario = req.body.id_funcionario
        ven.cliente = req.body.id_cliente;
        
        try{
            const rs = await this.venRepository.Cadastrar(ven);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }

    async listarVendas(req:Request, res:Response){
        try{
            const rs = await this.venRepository.Listar();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

}