import "../globals.css"

export default function ListarProdutos({ lista }){
    return(
        <div>
              {
            lista.map((produto)=>
            <div class="Card" key={produto.id}>
            <h2>{produto.nome}</h2>
            <img class="produtoimg" src={produto.imagem}/>
            <p>{produto.marca}</p>
            <p>{produto.descricao}</p>
            <p>{produto.preco}</p>
            <p>{produto.tamanhos}</p>
            <button>Comprar</button>
            </div>
            )
        }
        </div>
    )
}

