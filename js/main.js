$('.owl-carousel').owlCarousel({
    loop:true,//Ativa o modo loop de filmes
    margin:10,//Margin entre os elementos
    nav:true,// ativa o botão de navegação
    responsive:{//cuida dos aspectos de responsividades
        0:{
            items:1
        },
        600:{//>=600px so vai exibir 3 itens
            items:3
        },
        1000:{//>=1000px vai exibir 5
            items:5
        }
    }
});