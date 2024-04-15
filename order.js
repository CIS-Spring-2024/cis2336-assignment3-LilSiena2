


  function takeOrder() 
  {
    var selectedItem = document.getElementById("itemSelect").value;
    var selectedQuantity = document.getElementById("quantitySelect").value;
    var selectedPrice = document.getElementById("priceSelect").value;
    
    var totalPrice = parseInt(selectedQuantity) * parseFloat(selectedPrice);
    
    alert("Order Details:\n\nItem: " + selectedItem + "\nQuantity: " + selectedQuantity + "\nPrice per item: $" + selectedPrice + "\nTotal price: $" + totalPrice.toFixed(2));
  }

