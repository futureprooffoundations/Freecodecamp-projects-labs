const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];







const shipment = parseShipment(rawData);
const actions = planRestock(pantry, shipment);




function parseShipment(rawData) {
const arrayOfarrysOfRawData = [] ;
const obj = [];
for (let i=0; i<rawData.length; i++) {
  arrayOfarrysOfRawData.push(rawData[i].split("|"));
}

for (let i=0; i<arrayOfarrysOfRawData.length; i++){
    obj.push({})
}

 let skus = [];
for (let i=0; i<obj.length; i++){
 

  if (!skus.includes(arrayOfarrysOfRawData[i][0]))
  {
    skus.push(arrayOfarrysOfRawData[i][0])
  obj[i]["sku"]= arrayOfarrysOfRawData[i][0]
  obj[i]["name"]= arrayOfarrysOfRawData[i][1]
  obj[i]["qty"]= parseInt(arrayOfarrysOfRawData[i][2])
  obj[i]["expires"]= arrayOfarrysOfRawData[i][3]
  if (arrayOfarrysOfRawData[i][4]===undefined){
obj[i]["zone"]= "general"
  }
  else {
    obj[i]["zone"]= arrayOfarrysOfRawData[i][4]
  }
  }
  
}
for (let i=0; i<obj.length; i++){
  if(obj[i]["sku"]===undefined) {
     obj.splice(i,1)
    
  }
}
  

return obj;
}


 

function planRestock(pantry, shipment){
  const action=[];
let p=[];
  for (let item of pantry ){
    p.push(item["sku"])
  }
  for (let i=0; i<shipment.length; i++){
let x={};
if (shipment[i]["qty"] <= 0) {
x["type"]= "discard";
 x["item"] = shipment[i];
  }
 else if (p.includes(shipment[i]["sku"])){
  x["type"]= "restock";
 x["item"] = shipment[i];
 }
 else {
  x["type"]= "donate";
 x["item"] = shipment[i];
 }
  action.push(x);
  }
  return action
}




function groupByZone(actions){
  let objects={};
let zones=[];
  for (let i=0; i<actions.length; i++){
if (!zones.includes(actions[i]["item"]["zone"])){
  zones.push(actions[i]["item"]["zone"])
}
  }
  for (let i of zones) {
    objects[i]=[];
  }
  for (let i=0; i<actions.length; i++){

    
    if (actions[i]["item"]["zone"] in objects) {
objects[actions[i]["item"]["zone"]].push(actions[i])
  }
  }
return objects;
}

groupByZone(actions)


function clonePantry(pantry) {
  const deepCopy = [];
  
  for (let i of pantry) {
      deepCopy.push({sku: i["sku"], name: i["name"], qty: i["qty"], expires: i["expires"], zone: i["zone"]});
  }
  return deepCopy;
}


console.log(groupByZone(actions))