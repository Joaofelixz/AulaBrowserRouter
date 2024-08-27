import {useState} from "react";
import ListarProdutos from "../components/Listarprodutos";
import "../globals.css";

export default function Produtos(){
    const [Produtos, setProdutos] = useState([
        {
            id:1,
            
            nome:"Tênis Nike Pegasus Plus Masculino",
    
            Item:"Calçado",
    
            imagem: "https://imgnike-a.akamaihd.net/768x768/0294007TA2.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Treino & Academia",
    
            preco:"R$:300,00",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:2,    
    
            nome:"Tênis Nike Pegasus Plus Masculino",
    
            Item:"Calçado",
    
            imagem: "https://imgnike-a.akamaihd.net/768x768/029400IMA11.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Treino & Academia",
    
            preco:"R$:550,00",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:3,
    
            nome:"Tênis Nike Pegasus 41 Feminino",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/02866151A11.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Treino & Academia",
    
            preco:"R$:289,90",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:4,
    
            nome:"Tênis Nike Invincible 3 Masculino",
    
            Item:"Calçado",
    
            imagem: "https://imgnike-a.akamaihd.net/768x768/0252311HA9.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Treino & Academia",
    
            preco:"R$:1300,00",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:5,
    
            nome:"Tênis Nike Downshifter 13 Masculino",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/02791583A11.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Treino & Academia",
    
            preco:"R$:800,00",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:6,
    
            nome:"Tênis Nike Downshifter 13 Feminino",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/027983NMA9.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Treino & Academia",
    
            preco:"R$:500,00",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:7,
    
            nome:"Tênis Nike Pegasus 40 Feminino",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/025808O6A12.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Treino & Academia",
    
            preco:"R$:699,99",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:8,
    
            nome:"Tênis Nike Revolution 7 Infantil",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/0273171EA8.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Treino & Academia",
    
            preco:"R$:598,90",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:9,
    
            nome:"Tênis Nike Invincible 3 Masculino",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/0252311GA10.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Treino & Academia",
    
            preco:"R$:1900,00",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:10,
    
            nome:"Tênis Nike Zoom Fly 5 Feminino",
    
            Item:"Calçado",
    
            imagem: "https://imgnike-a.akamaihd.net/768x768/022826NNA8.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Treino & Academia",
    
            preco:"R$:1000,00",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:11,
    
            nome:"Tênis Nike Zoom Fly 5 Feminino",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/0228265BA8.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Treino & Academia",
    
            preco:"R$:599,90",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:12,
    
            nome:"Tênis Nike Invincible 3 Feminino",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/025191IOA12.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Treino & Academia",
    
            preco:"R$:200,00",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:13,
    
            nome:"Tênis Nike Revolution 7 Masculino",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/0272851FA8.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Treino & Academia",
    
            preco:"R$:250,00",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:14,
    
            nome:"Tênis Nike Revolution 7 Infantil",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/0273175AA8.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Treino & Academia",
    
            preco:"R$:400,00",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:15,
    
            nome:"Tênis Nike Revolution 7 Infantil",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/027317IMA8.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Treino & Academia",
    
            preco:"R$:199,90",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
    ]);

return(
    <div>
      <ListarProdutos lista={Produtos}/>
    </div>
)
}