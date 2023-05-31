const allProduct=[
  { name: "Product A", profit: -100 },
  { name: "Product B", profit: -100},
  { name: "Product C", profit: 93 },
  { name: "Product D", profit: 5 },
  { name: "Product Z", profit: -5 },
  { name: "Product E", profit: 8 },
  { name: "Product F", profit: 29 },
];



const topProduct=(array)=> {
  
    if (array.length === 0) {
      return "No Data";
    }
    let top=array[0].profit;
    let name;
    for (let i = 0; i < array.length; i++) {
      if (array[i].profit > top && array[i].profit > 0) {
       top=array[i].profit;
       name=array[i].name;
      }
    }
 return "the top product sales "+ name;
  }
 
  
const bottomProduct=(array)=> {
    if (array.length === 0) {
      return "No Data";
    }
    let bottom=array[0].profit;
    let name=array[0].name;
    for (let i = 1; i < array.length; i++) {
      if (array[i].profit < bottom ) {
       bottom=array[i].profit;
       name=array[i].name;
      }
    }
 return "the bottom product Sales "+ name;
  }
 
  function zeroProduct(array) {
    if (array.length === 0) {
      return "No Data"; 
    }
  
    let closestValue = array[0].profit;
    let closestDistance = Math.abs(array[0].profit);
    let name=array[0].name
  
    for (let i = 1; i < array.length; i++) {
      const distance = Math.abs(array[i].profit);
      if (distance < closestDistance) {
        closestValue = array[i].profit;
        closestDistance = distance;
        name=array[i].name;
      }
    }
    return "the zero product Sales "+ name;
  }




  console.log(topProduct(allProduct)); 
  console.log(bottomProduct(allProduct));
  console.log(zeroProduct(allProduct));
