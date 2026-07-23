const lunches =[];

function addLunchToEnd (lunches, string) { 
  lunches.push(string);
  console.log(`${string} added to the end of the lunch menu.`);
  return lunches;
};


function addLunchToStart (array, string) { 
  array.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return array;
};

function removeFirstLunch (array) { 
  let firstlunch = array[0]; 
  array.shift(array);
  if (array.length > 0){
  console.log(`${firstlunch} removed from the start of the lunch menu.`);}
  else {
    console.log ("No lunches to remove.")
  };
  return array;
};


function removeLastLunch (lunches) { 
  let a = lunches.length-1;
  let lastLunch = lunches[a]; 
  lunches.pop(lunches);
  if (lunches.length > 0){
  console.log(`${lastLunch} removed from the end of the lunch menu.`);}
  else {
    console.log ("No lunches to remove.")
  };
  return lunches;
};


function getRandomLunch (array) {

let b = array.length
  const random = Math.floor(Math.random() * b);

  
  if (array.length > 0){
  console.log(`Randomly selected lunch: ${array[random]}`);}
  else {
    console.log ("No lunches available.")
  };
  return array;
};


function showLunchMenu (array) { 
  if (array.length >0){
  return console.log(`Menu items: ${array.join(", ")}`);}
  else {
   return console.log ("The menu is empty.")
  };
};





