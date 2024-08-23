import {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../globals.css";

export default function Home(){
    const [ProdutosOfertas, setProdutosOfertas] = useState([
    {
        id:1,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricaco:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:2,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricaco:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:3,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricaco:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:4,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricaco:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:5,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricaco:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:6,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricaco:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:7,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricaco:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:8,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricaco:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:9,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricaco:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:10,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricaco:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:11,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricaco:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:12,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricaco:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:13,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricaco:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:14,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricaco:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:15,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricaco:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
]);
return(
    <div>
      <ListarProdutos lista={ProdutosOfertas}/>
    </div>
)
}