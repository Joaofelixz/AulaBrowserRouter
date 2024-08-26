import "../globals.css"

export default function ListarProdutos({ lista }){
    return(
        <div>
              {
            lista.map((produto)=>
            <div key={produto.id}>
            <h2>{produto.nome}</h2>
            <img class="produtoimg" src={produto.imagem}/>
            <p class="produto">{produto.marca}</p>
            <p class="produto">{produto.descricao}</p>
            <p class="produto">{produto.preco}</p>
            <p class="produto">{produto.tamanhos}</p>
            <button>Comprar</button>
            </div>
            )
        }
        </div>
    )
}

