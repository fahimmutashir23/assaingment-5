


//------------------------------add to cart function------------------------------------------

let sum = 0
function addTocart (terget){
    const cartField = document.getElementById("add-cart");
    const count = cartField.childElementCount
    const li = document.createElement("li")
    const cartName = terget.childNodes[3].childNodes[1].innerText;
    li.innerText = cartName
    li.innerHTML= `${count + 1}. ${cartName}`
    cartField.appendChild(li)

    //--------------------add total section----------------------------------------

    const productPriceInput = terget.childNodes[3].childNodes[5].childNodes[0].innerText;
    
    const productPrice = parseFloat(productPriceInput)
    const total = sum += productPrice
    const finalTotal = total.toFixed(2)
    
    const totalPrice = document.getElementById("total-price");
    totalPrice.innerText = finalTotal
    
    //------------------------button enable & disable section----------------------------

    if(finalTotal > 0){
        document.getElementById("make-Purchase").removeAttribute('disabled')
    }
    
    if(finalTotal > 200.00){
        document.getElementById("cupon-btn").removeAttribute('disabled')
    }

    //--------------------discount section----------------------

    document.getElementById('cupon-btn').addEventListener('click', function(){

        const cuponInput = document.getElementById('cupon-input');
        const cuponInputValue = cuponInput.value;
        cuponInput.value = ""

        if(cuponInputValue === "SELL200"){
            const discount = totalPrice.innerText - (totalPrice.innerText * 20/100)
            const discountTotal = totalPrice.innerText - discount
            document.getElementById("discount").innerText = discountTotal.toFixed(2)
            document.getElementById('total').innerText = discount.toFixed(2)
        }
    })

}

//---------------------modal--------------------------------------------------

document.getElementById('go-home-btn').addEventListener('click', function(){
    document.getElementById("total-price").innerText = "00.00"
    document.getElementById("discount").innerText = "00.00"
    document.getElementById("total").innerText = "00.00"
    document.getElementById("add-cart").innerText = ""
    window.location.href = "index.html"
})
