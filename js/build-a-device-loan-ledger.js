const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/30/2024" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

const ledger = {
  "1": {
    type: "Laptop",
    status: "CheckedIn",
    borrower: {
      name: "",
      email: ""
    },
    dueDate: ""
  }
};
function checkoutDevice(ledger, assetTag, borrower) {
  const {email, name} = borrower
  const updatedLedger = structuredClone(ledger)

  if (!updatedLedger[assetTag]) {
    return {ledger:updatedLedger,  message: assetTag + " was not found "}
  }
  else if (updatedLedger[assetTag]["status"] == "CheckedOut") {
    return {ledger:updatedLedger,  message: assetTag + " is already checked out"}
  }
  
  else {
    updatedLedger[assetTag]["borrower"]["name"] = name;
    
    updatedLedger[assetTag]["status"] = "CheckedOut";
  
  
    updatedLedger[assetTag]["borrower"]["email"] = email;
    
    return { ledger: updatedLedger, message: "Asset tag no: "+ assetTag + " name: " +updatedLedger[assetTag]["borrower"]["name"] + " has been checkedout" }
    
  } }


function checkinDevice(ledger, assetTag){
  const cloned = structuredClone(ledger);
  
  if (cloned[assetTag]==undefined) {
    return {ledger: cloned, message: assetTag + " was not found "}
  }

  else{
    let i = cloned[assetTag]
    i["borrower"]["name"] = ""
    i["borrower"]["email"] = ""
    i["dueDate"] = ""
    i["status"]= "CheckedIn"
  

  return { ledger: cloned, message: `Asset tag no: ${assetTag} has been updated` }}
}

function listOverdueDevices(ledger, today){
let arr = [];
let len;
let date = today.split("/")
if (date[0].length == 1 ) {date[0] = "0"+date[0]}
if (date[1].length == 1 ) {date[1] = "0"+date[1]}
date.join("")


for (let i in ledger){
len = i
}
for (let i=1 ; i <= len; i++) {
  if (ledger[i]["dueDate"].length > 0 ){
    let x = ledger[i]["dueDate"].split("/")
  if ( x[0].length == 1 ) {x[0] = "0"+x[0]}
  if ( x[1].length == 1 ) {x[1] = "0"+x[1]}
  x= x.join("/")
  ledger[i]["dueDate"] = x}
 if (ledger[i]["status"] == "CheckedOut" && ledger[i]["dueDate"].split("/").join("") < date){
  arr.push(ledger[i])
 }
}
for(let i=0; i<arr.length; i++) {
  
  let x = arr[i]["dueDate"].split("/")
  if (x[0].length == 1 ) {x[0] = "0"+x[0]}
  if (x[1].length == 1 ) {x[1] = "0"+x[1]}
  x= x.join("/")
  arr[i]["dueDate"] = x
}

arr.sort((a, b) => {   
  return parseInt(a["dueDate"].split("/").join("")) - parseInt(b["dueDate"].split("/").join(""))
  });
return arr
}
console.log(listOverdueDevices(equipmentLedger, "11/31/2025"))

function serializeLedger(ledger){
return JSON.stringify(ledger)
}
function loadLedger(json){
return JSON.parse(json)
}