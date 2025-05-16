import {Request, Response} from "express";
import ItemVendido from "../classes/ItemVendido";
import ItemVendidoRepository from "../repositories/ItemVendidoRepository";
import Venda from "../classes/Venda";
import Produto from "../classes/Produto";

export default class ItemVendidoService{
    itnRepository = new ItemVendidoRepository();

    async cadastroItemVendido(req:Request, res:Response){
        const itn:ItemVendido = new ItemVendido();
        // console.log(req.body)
        itn.quantidade = req.body.quantidade
        itn.venda = new Venda()
        itn.venda.id = req.body.id_venda;
        itn.produto = new Produto()
        itn.produto.id = req.body.id_produto
        
        try{
            const rs = await this.itnRepository.Cadastrar(itn);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }

    async listarItensVendidos(req:Request, res:Response){
        try{
            const rs = await this.itnRepository.Listar();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

}