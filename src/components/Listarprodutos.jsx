import "../globals.css"

export default function ListarProdutos({ lista }){
    return(
        <div>
              {
            lista.map((produto)=>
            <div class="Card" key={produto.id}>
            <h2>{produto.nome}</h2>
            <img class="produtoimg" src={produto.imagem}/>
            <p class="Card">{produto.marca}</p>
            <p class="Card">{produto.descricao}</p>
            <p class="Card">{produto.preco}</p>
            <p class="Card">{produto.tamanhos}</p>
            <button>Comprar</button>
            </div>
            )
        }
        </div>
    )
}

