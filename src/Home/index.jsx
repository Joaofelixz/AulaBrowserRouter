
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../globals.css";
import ListarProdutos from '../components/Listarprodutos'


export default function Home(){

    const [ProdutosHome, setProdutosHome] = useState([
    {
        id:1,

        nome:"Tênis Nike KD17 Sunrise Masculino",

        Item:"Calçado",
        
        imagem: "https://imgnike-a.akamaihd.net/768x768/02917451A9.jpg",

        marca:"Nike",

        descricao:"Tênis de Basquete",

        preco:"R$:1999,90" ,

        tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:2,

        nome:"Tênis Nike Impact 4 Masculino",

        Item:"Calçado",
        
        imagem: "https://imgnike-a.akamaihd.net/360x360/024252IN.jpg",

        marca:"Nike",

        descricao:"Tênis de Basquete",

        preco:"R$:500,00",

        tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:3,

        nome:"Tênis Nike Giannis Immortality 3 Masculino",

        Item:"Calçado",
        
        imagem: "https://imgnike-a.akamaihd.net/768x768/026759O6A8.jpg",

        marca:"Nike",

        descricao:"Tênis de Basquete",

        preco:"R$:450,00",

        tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:4,

        nome:"Tênis Lebron XX",

        Item:"Calçado",
        
        imagem: "https://imgnike-a.akamaihd.net/768x768/025444NXA10.jpg",

        marca:"Nike",

        descricao:"Tênis de Basquete",

        preco:"R$:600,00",

        tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:5,

        nome:"Tênis Nike ION 1 Feminino",

        Item:"Calçado",
        
        imagem: "https://imgnike-a.akamaihd.net/768x768/027088MTA8.jpg",

        marca:"Nike",

        descricao:"Tênis de Basquete",

        preco:"R$:250,00",

        tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:6,

        nome:"Tênis Nike LeBron Witness 8 Masculino",

        Item:"Calçado",
        
        imagem: "https://imgnike-a.akamaihd.net/768x768/027294NDA9.jpg",

        marca:"Nike",

        descricao:"Tênis de Basquete",

        preco:"R$:950,00",

        tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:7,

        nome:"Tênis Nike Sabrina 2 Feminino",

        Item:"Calçado",
        
        imagem: "https://imgnike-a.akamaihd.net/768x768/029376NDA10.jpg",

        marca:"Nike",

        descricao:"Tênis de Basquete",

        preco:"R$:330,00",

        tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:8,

        nome:"Tênis Nike KD17 Sunrise Masculino",

        Item:"Calçado",
        
        imagem: "https://imgnike-a.akamaihd.net/768x768/029174IDA1.jpg",

        marca:"Nike",

        descricao:"Tênis de Basquete",

        preco:"R$:400,00",

        tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:9,

        nome:"Tênis Nike LeBron Witness 7 Masculino",

        Item:"Calçado",
        
        imagem: "https://imgnike-a.akamaihd.net/768x768/02418482A8.jpg",

        marca:"Nike",

        descricao:"Tênis de Basquete",

        preco:"R$:700,00",

        tamanhos:["Tamanho:38, 39, 40, 41, 42, 43, 44, 45"],

    },
    {
        id:10,

        nome:"Tênis Nike KD17 Sunrise Masculino",

        Item:"Calçado",
        
        imagem: "https://imgnike-a.akamaihd.net/768x768/02917415A1.jpg",

        marca:"Nike",

        descricao:"Tênis de Basquete",

        preco:"R$:1889,90",

        tamanhos:["tamanhos:","38, 39, 40, 41, 42, 43, 44, 45"],

    },
]);


    return(
        <>
        <Header/>
            <Carousel class="carousel"
                infiniteloop usekeyboardArrows autoPlay 
                showArrows={true}
                showStatus={false}
                showThumbs={false}
            >
            
        <div>
            <img src="https://imgnike-a.akamaihd.net/branding/cdp-nike-app-3/assets/img/p5-desk.jpg"/>
        </div>
        <div>
            <img src="https://imgnike-a.akamaihd.net/branding/home-sbf/touts/Banner-Nike-Pegasus-Plus-22-08-desk.jpg"/>
        </div>
        <div>
            <img src="https://imgnike-a.akamaihd.net/branding/running/nrc-app/assets/img/p7.jpg"/>
        </div>
        <div>
            <img src="https://imgnike-a.akamaihd.net/branding/home-sbf/touts/Banner-Mad-Ambition-12-08-desk.jpg"/>
        </div>
         </Carousel>
         <div>
      <ListarProdutos lista={ProdutosHome}/>
    </div>
    <Footer/>
        </>
    );
}

