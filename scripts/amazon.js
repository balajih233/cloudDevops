
let productsHtml='';


products.forEach((prod)=>{
    const html=`<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${prod.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${prod.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${prod.rating.stars *10}.png">
            <div class="product-rating-count link-primary">
              ${prod.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${prod.price/100}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${prod.id}">
            Add to Cart
          </button>
        </div>`;
        productsHtml+=html;
})


document.querySelector(`.js-products-grid`).innerHTML=productsHtml;
document.querySelectorAll(`.js-add-to-cart`).forEach((button)=>{
  button.addEventListener('click',() =>{
    const prodId=button.dataset.productId;
    let found;
    cart.forEach((items)=>{
      if(items.prodId==prodId){
        found=items;
      }
    });
    if(found){
      found.quantity+=1;
    }
    else{
      cart.push({
        prodId:prodId,
        quantity:1
      });
    }
    let quantity=0;
    cart.forEach((item) => {
      quantity+=1;
    });
    document.querySelector(`.js-cart-quantity`).innerHTML=quantity;
 
    });
    
  
});