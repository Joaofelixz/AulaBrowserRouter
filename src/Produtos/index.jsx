import {useState} from "react";
import ListarProdutos from "../components/Listarprodutos";
import "../globals.css";

export default function Produtos(){
    const [Produtos, setProdutos] = useState([
    {
        id:1,
        
        nome:"Tênis Nike KD17 Sunrise Masculino",

        Item:"Calçado",

        imagem: "https://imgnike-a.akamaihd.net/768x768/02917451A9.jpg",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:2,    

        nome:"Tênis Nike Air Zoom G.T. Academy Masculino",

        Item:"Calçado",

        imagem: "https://imgnike-a.akamaihd.net/768x768/028173IDA8.jpg",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:3,

        nome:"Tênis Nike LeBron Witness 7 Masculino",

        Item:"Calçado",
        
        imagem: "https://imgnike-a.akamaihd.net/768x768/02418482A8.jpg",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:4,

        nome:"",

        Item:"Calçado",

        imagem: "",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:5,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:6,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:7,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:8,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:9,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:10,

        nome:"",

        Item:"Calçado",

        imagem: "",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:11,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:12,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:13,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:14,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:15,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:16,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:17,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:18,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:19,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:20,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    ]);

return(
    <div>
      <ListarProdutos lista={Produtos}/>
    </div>
)
}