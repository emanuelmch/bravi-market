var basket_list = [];

exports.add = function(type, price, quantity) {
  if (!quantity) quantity = 1;
  
  if (basket_list.indexOf(type) !== -1) {
    basket_list[type].quantity += quantity;
  } else {
    basket_list[type] = {
      type: type,
      price: price,
      quantity: quantity
    }; 
  }
}

exports.count = function() {
  return basket_list.length;
}

exports.totalPrice = function () {
  var totalPrice = 0;
  for(var i in basket_list)
  {
    var item = basket_list[i];
    totalPrice += item.price;
  }

  return totalPrice;
}

exports.clear = function () {
  basket_list = [];
}


exports.printList = function () {
  var items = [];
  basket_list.forEach(function(item) {
    items.push(item.quantity + 'x ' +  item.type + " " + item.price);
  });
  return items.join('\n');
}

