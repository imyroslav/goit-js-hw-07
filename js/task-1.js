const categoryItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryItems.length}`);



for( let i = 0; i <= 2; i += 1) {
    let categoryItemLi = []; 
    const el =categoryItems[i].querySelector("h2")
    categoryItemLi[i] = categoryItems[i].querySelectorAll("li");
    console.log(`Category:  ${el.textContent}`); 
    console.log(`Elements:  ${categoryItemLi[i].length}`)
}