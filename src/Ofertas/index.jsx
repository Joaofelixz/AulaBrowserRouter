import {useState} from "react";
import ListarProdutos from "../components/Listarprodutos";
import "../globals.css";

export default function Ofertas(){
    const [ProdutosOfertas, setProdutosOfertas] = useState([
        {
            id:1,
    
            nome:"Air Jordan 1 Retro Hing",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/029121NXA9.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Casual",
    
            preco:"R$:300,00",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:2,
    
            nome:"Tênis Air Jordan 1 SE Masculino",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/02868551A10.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Casual",
    
            preco:"R$:550,00",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:3,
    
            nome:"Tênis Air Jordan 1 Elevate Low Feminino",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/01733551A8.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Casual",
    
            preco:"R$:550,00",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:4,
    
            nome:"Women's Air Jordan 1 Low",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/02927351A8.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Casual",
    
            preco:"R$:800,00",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:5,
    
            nome:"Air Jordan 1 Retro Low OG",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/0264227TA10.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Casual",
    
            preco:"R$:755,00",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:6,
    
            nome:"Air Jordan 1 Low",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/029901NXA2.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Casual",
    
            preco:"R$:900,00",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:7,
    
            nome:"Tênis Air Jordan 1 Low Infantil",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/0291767TA9.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Casual",
    
            preco:"R$:600,00",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:8,
    
            nome:"Tênis Air Jordan 1 SE Masculino",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/02869315A19.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Casual",
    
            preco:"R$:600,00",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:9,
    
            nome:"Tênis Nike Air Force 1 Feminino",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/0257945AA9.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Casual",
    
            preco:"R$:200,00",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        },
        {
            id:10,
    
            nome:"Tênis Nike Air Force 1 Mid '07 LV8 Masculino",
    
            Item:"Calçado",
            
            imagem: "https://imgnike-a.akamaihd.net/768x768/02424215A16.jpg",
    
            marca:"Nike",
    
            descricao:"Tênis de Casual",
    
            preco:"R$:330,00",
    
            tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],
    
        }
]);
return(
    <div>
      <ListarProdutos lista={ProdutosOfertas}/>
    </div>
)
}