
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../globals.css";
import ListarProdutos from '../components/Listarprodutos'


export default function Home(){

    const [ProdutosHome, setProdutosHome] = useState([
    {
        id:1,

        nome:"",

        Item:"Calçado",
        
        imagem: "https://imgnike-a.akamaihd.net/768x768/02917451A9.jpg",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:2,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

        marca:"Nike",

        descricao:"Tenis de Basqute",

        preco:"1988,00",

        tamanhos:["38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:3,

        nome:"",

        Item:"Calçado",
        
        imagem: "",

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
        id:9,

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
        <>
        <header/>
            <p>Minha Home</p>

            <Carousel
                infiniteloop usekeyboardArrows autoPlay 
                showArrows={true}
                showStatus={false}
                showThumbs={false}
            >
            
        <div>
            <img src="https://imgnike-a.akamaihd.net/branding/home-sbf/touts/Banner-Join-Us-refresh-22-05-desktop.jpg"/>
        </div>
         </Carousel>
         <div>oi
      <ListarProdutos lista={ProdutosHome}/>
    </div>
        </>
    );
}

