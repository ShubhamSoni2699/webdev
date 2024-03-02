import menu, {menuComponent} from "./constants.js";



let search = "";
let cardContainer = document.getElementById("card-container");

document.getElementById("search-input").addEventListener("keyup" , (event)=>{
  
  
  if(event.key=="Backspace"){
    search = search.substring(0,search.length-1);
  }else{
    search += event.key;
  }

  if(search == ""){
    selectCategory("all");
  }else{

    let searchItems = menu.filter((item)=>{
      if(item.title.toLowerCase().includes(search)){
        return item;
      }
    })

    if(searchItems.length==0){
      selectCategory("all");
    }else{
      cardContainer.innerHTML = "";

    searchItems.forEach( (item) => {
      cardContainer.innerHTML += menuComponent(item);
    } )

  }
    }

    



});






function selectCategory(menuCategory){
  
  if(menuCategory=='all'){
    cardContainer.innerHTML = "";
    menu.forEach( (item) => {
      cardContainer.innerHTML += menuComponent(item);
    } )
  
  }

  else{
    cardContainer.innerHTML = "";

  let categoryItems = menu.filter((item)=>{
    if(item.category==menuCategory){
      return item;
    }
  })

  //document.getElementById("card-container").innerHTML = "";
  categoryItems.forEach( (item) => {
    cardContainer.innerHTML += menuComponent(item);
  } )
  }

}

selectCategory("all");



  

  
  
  