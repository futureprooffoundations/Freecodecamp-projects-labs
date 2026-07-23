const inventory = [];

function findProductIndex (name) {
  let index = -1;
  for (let i=0; i<inventory.length; i++) {
    if (inventory[i]["name"]===name.toLowerCase()){
      index = i;
      break;
    }
  }
  return index;
}



function addProduct (product) {
  let b=0;
for (let i=0; i<inventory.length; i++) {
  if (inventory[i]["name"]===product["name"].toLowerCase()) {
    inventory[i]["quantity"] += product["quantity"];
    console.log(`${inventory[i]["name"]} quantity updated`)
    b++
    break;
  }
}

if (b == 0) {
  product["name"] = product["name"].toLowerCase();
  inventory.push(product);
  console.log(`${product["name"]} added to inventory`)
}
}


function removeProduct (name, quantity) {
  let not=0;
  for (let i=0; i<inventory.length; i++) {
if (inventory[i]["name"] === name.toLowerCase()) {
  if (inventory[i]["quantity"] >= quantity) {
    inventory[i]["quantity"] -= quantity
    if (inventory[i]["quantity"] ==0){
      inventory.splice(i, 1);
      break;
    }
    else {console.log(`Remaining ${name.toLowerCase()} pieces: ${inventory[i]["quantity"]}`)}
  }
  else {
    console.log (`Not enough ${name.toLowerCase()} available, remaining pieces: ${inventory[i]["quantity"]}`)
  }
  not++
}
  }
  if (not == 0 ) {
    console.log(`${name.toLowerCase()} not found`)
  }
}


