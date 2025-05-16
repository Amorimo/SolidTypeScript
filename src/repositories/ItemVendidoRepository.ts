import ItemVendido from "../classes/ItemVendido";
import { conexao } from "../database/Config";
import CommandsVenda from "../Interfaces/CommandsVenda";

export default class VendaRepository implements CommandsVenda<ItemVendido>{
    PesquisarPorData(data: Date): Promise<ItemVendido[]> {
        throw new Error("Method not implemented.");
    }
    PesquisarPorIntervalo(data_inicial: Date, data_final: Date): Promise<ItemVendido[]> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: ItemVendido): Promise<ItemVendido> {
        return new Promise((resolve,reject)=>{
           
            conexao.query("INSERT INTO itensvenda(id_venda,id_produto,quantidade) Values (?,?,?)",
            [obj.venda.id,
                obj.produto.id,
                obj.quantidade],
                (erro,end:any)=>{
              
                if(erro){
                    return reject(erro);
                }
                else{
                    return resolve(obj)
                }                    
            })
        })
       
    }
    Listar(): Promise<ItemVendido[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from itensvenda",(erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve(result as ItemVendido[])
                }
            })
        })

    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: ItemVendido): Promise<ItemVendido> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<ItemVendido> {
        throw new Error("Method not implemented.");
    }
    
}