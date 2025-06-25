select produto.nome, produto.foto1, itensvenda.quantidade
from produto inner join itensvenda
on produto.id = itensvenda.id_produto
order by itensvenda.quantidade desc
limit 0,10