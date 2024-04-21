const cardsData = [
    { title: "IPHONE 15 PRO", text:"Titanium", desc:"From $999 or $41.62/mo. for 24 mo.*", imageSrc: "./assets/images/store/store-01-01.jpeg" },
    { title: "APPLE VISION PRO", text:"Welcome to spatial computing.", desc:"From $999 or $41.62/mo. for 24 mo.*", imageSrc: "./assets/images/store/store-01-01.jpeg" },
    { title: "MACBOOK AIR", text:"Designed to go places", desc:"From $999 or $41.62/mo. for 24 mo.*", imageSrc: "./assets/images/store/store-01-01.jpeg" },
    { title: "APPLE WATCH SERIES 9", text:"Smarter. Brighter. Mightier.", desc:"From $999 or $41.62/mo. for 24 mo.*", imageSrc: "./assets/images/store/store-01-01.jpeg" },
    { title: "IPAD", text:"Lovable.Drawable.Magical.", desc:"From $999 or $41.62/mo. for 24 mo.*", imageSrc: "./assets/images/store/store-01-01.jpeg" },
    
  ];

// Function to create and populate cards
function createCards() {
    const cardTemplate = document.querySelector('#card-template'); // Select the template
    const cardContainer = document.getElementById('card-container');

    cardsData.forEach(data=> { 
        cardClone = cardTemplate.cloneNode(true); 
        const title = cardClone.querySelector('.card-title'); 
        const text = cardClone.querySelector('.card-text');
        const desc = cardClone.querySelector('.card-desc');
        const image = cardClone.querySelector('.card-image');
        title.textContent = data.title;
        image.src = data.imageSrc;
        text.textContent = data.text;
        desc.textContent = data.desc;


        cardContainer.appendChild(cardClone);
        console.log(cardClone);
    })
    cardTemplate.style.display = 'none'
}
createCards()