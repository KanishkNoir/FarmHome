let addItemsBtn = document.getElementById('addItemsBtn');
let itemsList = document.querySelector('.itemsList');
let itemsDiv = document.querySelectorAll('.itemsDiv')[0];

addItemsBtn.addEventListener('click', function(){
    let newItems = itemsDiv.cloneNode(true);
    let input = newItems.getElementsByTagName('input')[0];
    input.value = '';
    itemsList.appendChild(newItems);
});