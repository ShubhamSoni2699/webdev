import { menu , renderItems} from "./constants.js";

renderItems(menu);

let search = "";

document.getElementById("search-input").addEventListener("keyup" , (event)=>{  
  if(event.key=="Backspace"){
    search = search.substring(0,search.length-1);
  }else{
    search += event.key;
  }
  let menuItems = search==""?menu:menu.filter(item=>item.title.toLowerCase().includes(search));
  renderItems(menuItems);
});

document.querySelectorAll('.nav-link').forEach(element => {

  element.addEventListener("click", function () {
    let category = this.getAttribute('data-filter');
    let categoryItems = category=="all"?menu:menu.filter(item=>item.category==category);
    renderItems(categoryItems);
  });
  
});




  

  
  
  