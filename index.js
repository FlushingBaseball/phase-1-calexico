// Write your code here...

fetch("http://localhost:3000/menu")
.then(resp => resp.json())
.then(menuData => {
    menuData.forEach((menuItem)=>{
        console.log(menuItem);
        const span = document.createElement('span')
        span.textContent = menuItem.name
        document.querySelector('#menu-items').appendChild(span)

    });

    //add first menu item to main container

    const firstItem = menuData[0];
    renderMenuItem(firstItem)


})


function renderMenuItem(menuItem){
    const dishImage = document.querySelector('#dish-image')
   const dishName = document.querySelector('#dish-name') 
   const dishPrice = document.querySelector('#dish-price') 
   const dishDescription = document.querySelector('#dish-description') 

   dishName.textContent = menuItem.name
     dishPrice.textContent = menuItem.dishPrice
    dishDescription.textContent = menuItem.description

   dishImage.src = menuItem.image
   dishImage.alt = menuItem.name



}



//.then(menuData => console.log(menuData))


