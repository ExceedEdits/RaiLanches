document.addEventListener('DOMContentLoaded', () => {
    const descCard = document.getElementById('descCard');
    const descTitle = document.getElementById('descTitle');
    const descText = document.getElementById('descText');

    const descriptions = {
        btn1: {
            title: 'Lanches',
            text: 'Descontos para os hambúrgeres com a melhor grelha mundial e para os frangos mais suculentos, estamos falando de carne de nível A5, simplesmente a nata do mundo todo! Tudo isso com os melhores molhos, pães e principalmente salada!'
        },
        btn2: {
            title: 'Combos',
            text: 'Você está pronto para uma explosão de sabor? Venha conhecer os melhores combos de lanche do mundo, onde cada mordida é uma experiência inesquecível. Tudo isso com descontos imperdíveis!'
        },
        btn3: {
            title: 'Acompanhamentos',
            text: 'Prepare-se para uma verdadeira experiência gastronômica com os acompanhamentos mais deliciosos que você já experimento e é claro, com os preços baratíssimos com nossos cupons! Na Rai Lanches, os acompanhamentos são as estrelas do show, e prometemos levar suas papilas gustativas a uma viagem inesquecível.'
        },
        btn4: {
            title: 'Bebidas',
            text: 'Prepare-se para uma experiência refrescante com as bebidas mais deliciosas que você já experimentou! No nosso fast food, com os cupons exclusivos, as bebidas se tornam tão importantes quanto os pratos, e prometemos matar sua sede com frescor e muito sabor.'
        },
        btn5: {
            title: 'Sobremesas',
            text: 'Com esses cupons, uma experiência doce e deliciosa com as sobremesas mais incríveis que você já experimentou te aguardam! Aqui na Rai Lanches, as sobremesas são o ponto alto da refeição, garantindo doçura completa ao seu paladar!'
        }
    };

    function showDescription(event) {
        const button = event.target.closest('a');
        if (button && descriptions[button.id]) {
            descTitle.textContent = descriptions[button.id].title;
            descText.textContent = descriptions[button.id].text;
            descCard.classList.remove('invisible');
        }
    }

    function hideDescription() {
        descCard.classList.add('invisible');
    }

    document.querySelectorAll('.btn-group .btn').forEach(button => {
        button.addEventListener('mouseover', showDescription);
        button.addEventListener('mouseout', hideDescription);
    });
});
