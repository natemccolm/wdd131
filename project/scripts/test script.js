const artifacts=document.querySelector('#artifacts');

artifacts.addEventListener('click', ()=> {

artifacts.addEventListener('click', ()=>){
    let deckBuild=cards.filter(cards=>cards.deck==(headingCategory.innerHTML))
    let artifactQuantity=deckBuild.filter(deckBuild=>deckBuild.type=='artifact')
    createDeck(artifactQuantity)
}

creatures.addEventListener('click', ()=>){
    let deckBuild=cards.filter(cards=>cards.deck==(headingCategory.innerHTML))
    let creatureQuantity=deckBuild.filter(deckBuild=>deckBuild.type=='creature')
    createDeck(creatureQuantity)
}

instants.addEventListener('click', ()=>){
    let deckBuild=cards.filter(cards=>cards.deck==(headingCategory.innerHTML))
    let instantQuantity=deckBuild.filter(deckBuild=>deckBuild.type=='instant')
    createDeck(instantQuantity)
}

land.addEventListener('click', ()=>){
    let deckBuild=cards.filter(cards=>cards.deck==(headingCategory.innerHTML))
    let landQuantity=deckBuild.filter(deckBuild=>deckBuild.type=='land')
    createDeck(landQuantity)
}

other.addEventListener('click', ()=>){
    let deckBuild=cards.filter(cards=>cards.deck==(headingCategory.innerHTML))
    let otherQuantity=deckBuild.filter(deckBuild=>deckBuild.type=='other')
    createDeck(otherQuantity)
}

planeswalker.addEventListener('click', ()=>){
    let deckBuild=cards.filter(cards=>cards.deck==(headingCategory.innerHTML))
    let planeswalkerQuantity=deckBuild.filter(deckBuild=>deckBuild.type=='planeswalker')
    createDeck(planeswalkerQuantity)
}

sorcery.addEventListener('click', ()=>){
    let deckBuild=cards.filter(cards=>cards.deck==(headingCategory.innerHTML))
    let sorceryQuantity=deckBuild.filter(deckBuild=>deckBuild.type=='sorcery')
    createDeck(sorceryQuantity)
}


const deck=document.querySelector(headingCategory.innerHTML.toLocaleLowerCase());

buildDeck.addEventListener('click', () => {
	let deckBuild=cards.filter(cards => cards.deck==headingCategory.innerHTML.toLocaleLowerCase());
	createDeck(deckBuild);
    headingCategory.innerHTML=cards.deck.toUpperCase();
	})



    deck.addEventListener('click', () => {
        let deckBuild=cards.filter(cards => cards.deck==headingCategory.innerHTML.toLowerCase());
        createDeck(deckBuild);
        headingCategory.innerHTML=cards.deck.toUpperCase();
        })
    
    



        const deck=document.querySelector(headingCategory.innerHTML.toLocaleLowerCase());

        buildDeck.addEventListener('click', () => {
            let deckBuild=cards.filter(cards => cards.deck==headingCategory.innerHTML.toLocaleLowerCase());
            createDeck(deckBuild);
            headingCategory.innerHTML=cards.deck.toUpperCase();
            })
        







if (headingCategory.innerHTML=='Vampire'){
    let vampireDeckBuild=cards.filter(cards => cards.deck=='vampire');
    let artifactQuantity=vampireDeckBuild.filter(vampireDeckBuild=>vampireDeckBuild.type=='artifact')
    createDeck(artifactQuantity);
    }

else if (headingCategory.innerHTML=='Dinosaur'){
    let dinosaurDeckBuild=cards.filter(cards => cards.deck=='dinosaur' && cards.type=='artifact');
    createDeck(dinosaurDeckBuild);
    }


else if (headingCategory.innerHTML=='Counter'){
    let counterDeckBuild=cards.filter(cards => cards.deck=='counter' && cards.type=='artifact');
    createDeck(counterDeckBuild);
    }
    
else if(headingCategory.innerHTML=='Angel'){
    let angelDeckBuild=cards.filter(cards => cards.deck=='angel' && cards.type=='artifact');
    createDeck(angelDeckBuild)}


else if (headingCategory.innerHTML=='Sliver'){
    let sliverDeckBuild=cards.filter(cards => cards.deck=='sliver' && cards.type=='artifact');
    createDeck(sliverDeckBuild)}

else {null}
})

vampireDeck.addEventListener('click', () => {
	let vampireDeckBuild=cards.filter(cards => cards.deck=='vampire');
	cardCount.innerHTML='There are ' +vampireDeckBuild.length + ' unique cards in this deck.'
    headingCategory.innerHTML='Vampire';
	createDeck(vampireDeckBuild);
	})


dinosaurDeck.addEventListener('click', () => {
let dinosaurDeckBuild=cards.filter(cards => cards.deck=='dinosaur');
createDeck(dinosaurDeckBuild);
cardCount.innerHTML='There are ' +dinosaurDeckBuild.length + ' unique cards in this deck.'
headingCategory.innerHTML='Dinosaur';
})


counterDeck.addEventListener('click', () => {
	let counterDeckBuild=cards.filter(cards=> cards.deck=='counter');
	createDeck(counterDeckBuild);
	cardCount.innerHTML='There are ' +counterDeckBuild.length + ' unique cards in this deck.'
    headingCategory.innerHTML='Counter';
	})


sliverDeck.addEventListener('click', () => {
    let sliverDeckBuild=cards.filter(cards=> cards.deck=='sliver');
    createDeck(sliverDeckBuild);
    cardCount.innerHTML='There are ' +sliverDeckBuild.length + ' unique cards in this deck.'
    headingCategory.innerHTML='Sliver';
    })

angelDeck.addEventListener('click', () => {
    let angelDeckBuild=cards.filter(cards=> cards.deck=='angel');
	createDeck(angelDeckBuild);
	cardCount.innerHTML='There are ' +angelDeckBuild.length + ' unique cards in this deck.'
    headingCategory.innerHTML='Angel';
	})


    