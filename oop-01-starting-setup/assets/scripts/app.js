const productList = {
    products: [
        {
            title: 'lorem', 
            imgUrl: 'https://m.media-amazon.com/images/I/716qXMdyT1L._AC_SX679_.jpg', 
            price: 2.99, 
            desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,'
        },
        {
            title: 'lorem', 
            imgUrl: 'https://m.media-amazon.com/images/I/51p80Me6ZfL._AC_UL320_.jpg', 
            price: 5.99, 
            desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,'
        }
    ],
    render() {
        const renderHook = document.getElementById('app')
        const prodList = document.createElement('ul')
        prodList.classList.add('product-list')
        for (const prod of this.products){
            console.log(prod);
            const prodEl = document.createElement('li')
            prodEl.classList.add('product-item')
            prodEl.innerHTML = `
                <div>
                    <img src="${prod.imgUrl}" alt="${prod.title}"/>
                    <div class="product-item__content">
                        <h3>${prod.title}</h3>
                        <h4>\$${prod.price}</h4>
                        <p>${prod.desc}</p>
                    </div>
            `
            prodList.append(prodEl)
        }
        renderHook.append(prodList)
    }
}
productList.render()