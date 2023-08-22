

    let cartCounter = 1;
    let price = 0 ;
    const applyBtn = document.getElementById("applyBtn");

    function productclass(target) {
    const productName = target.querySelector("h2").innerText;
    const cartItem = cartCounter + ". " + productName;
    
    const li = document.createElement('li');
    li.innerText = cartItem;
    cartCounter++;
    
    const itemDisplay = document.getElementById('product-display');
    itemDisplay.appendChild(li);
    
    const newTotal = target.querySelector("h1").innerText.split(' ')[0];
    price = parseFloat(price) + parseFloat(newTotal);
    document.getElementById('totalPrice').innerText = price.toFixed(2);
    document.getElementById('remaining').innerText = price.toFixed(2) ;
    if (price >= 200) {
        applyBtn.removeAttribute('disabled');
    } 
    const makePurchesBtn = document.getElementById('makePurches')
    if (price > 0) {
      makePurchesBtn.removeAttribute('disabled');
    } 
      }

    function cuponCodeBtn() {

    const cuponField = document.getElementById("couponCode").value;
      
    if (cuponField === "SELL200") {
        const discaunt = document.getElementById("discount");
        const remainingSpan = document.getElementById("remaining");
        const discountPercentage = parseFloat(20);
    
        const bakitaka = document.getElementById('totalPrice');
        const originalAmount = parseFloat(bakitaka.innerText);
                        
        const discauntAmount = (discountPercentage / 100) * originalAmount;
        const remainingBalance = originalAmount - discauntAmount;
                        
        discaunt.innerText = discauntAmount.toFixed(2); 
        remainingSpan.innerText = remainingBalance.toFixed(2); 
        
          } else {
        return alert('please provide a correct coupon code');
          }
          }