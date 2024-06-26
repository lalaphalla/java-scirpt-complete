// Data for cards (titles and images)
const cardsData2 = [
    { title: "IPHONE 15 PRO", text:"Titanium", desc:"From $999 or $41.62/mo. for 24 mo.*", imageSrc: "./assets/images/store/store-01-01.jpeg" },
    { title: "IPHONE 15 PRO", text:"Titanium", desc:"From $999 or $41.62/mo. for 24 mo.*", imageSrc: "./assets/images/store/store-01-01.jpeg" },
    { title: "IPHONE 15 PRO", text:"Titanium", desc:"From $999 or $41.62/mo. for 24 mo.*", imageSrc: "./assets/images/store/store-01-01.jpeg" },
    { title: "IPHONE 15 PRO", text:"Titanium", desc:"From $999 or $41.62/mo. for 24 mo.*", imageSrc: "./assets/images/store/store-01-01.jpeg" },
    { title: "IPHONE 15 PRO", text:"Titanium", desc:"From $999 or $41.62/mo. for 24 mo.*", imageSrc: "./assets/images/store/store-01-01.jpeg" },
    
  ];
  
// Data for cards (titles and images)
// const cardsData = [
//     { title: "Card 1", imageSrc: "./store-card-13-airpods-nav-202209.png" },
//     { title: "Card 2", imageSrc: "./store-card-13-airpods-nav-202209.png" },
//     { title: "Card 3", imageSrc: "./store-card-13-airpods-nav-202209.png" },
//     { title: "Card 4", imageSrc: "./store-card-13-airpods-nav-202209.png" },
//     { title: "Card 5", imageSrc: "./store-card-13-airpods-nav-202209.png" }
//   ];

//   // Function to create and populate cards
//   function createCards() {
//     const cardTemplate = document.getElementById('card-template');
//     const cardContainer = document.getElementById('card-container');
//     console.log(cardTemplate)
//     cardsData.forEach(data => {
      
//       const cardClone = cardTemplate.content.cloneNode(true);
//       const card = cardClone.querySelector('.card');
//       const title = cardClone.querySelector('.card-title');
//       const image = cardClone.querySelector('.card-image');
      
//       title.textContent = data.title;
//       image.src = data.imageSrc;
      
//       cardContainer.appendChild(cardClone);
//     });
//   }
   
//   // Call the function to create and populate cards
//   createCards();

// Function to create and populate cards
function createCards() {
  const cardTemplate = document.querySelector('#card-template'); // Select the template
  const cardContainer = document.getElementById('card-container');
  console.log(cardTemplate);
  // const cardClone = cardTemplate.cloneNode(true); // Clone the template content
  // console.log(cloneNode);
  // const card = cardClone.querySelector('.card');
  // const title = cardClone.querySelector('.card-title');
  // const image = cardClone.querySelector('.card-image');

  // title.textContent = "hello world"
  // image.src = "./store-card-13-airpods-nav-202209.png"
  // cardContainer.appendChild(cardClone)

  cardsData2.forEach(data => {
      // const cardClone = cardTemplate.cloneNode(true); // Clone the template content
      
      const card = cardClone.querySelector('.card');
      const title = cardClone.querySelector('.card-title');
      const image = cardClone.querySelector('.card-image');
      
      title.textContent = data.title;
      image.src = data.imageSrc;
      
      cardContainer.appendChild(cardClone);
  });

}

// Call the function to create and populate cards
createCards();
