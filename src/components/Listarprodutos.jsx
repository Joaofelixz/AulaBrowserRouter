import "../globals.css"

export default function ListarProdutos({ lista }){
    return(
        <div>
              {
            lista.map((produto)=>
            <div key={produto.id}>
            <h2>{produto.nome}</h2>
            <img src={produto.imagem}/>
            <p>{produto.marca}</p>
            <p>{produto.descricao}</p>
            <p>{produto.preco}</p>
            <p>{produto.tamanhos}</p>
            </div>
            )
        }
        </div>
    )
}

