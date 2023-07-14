function addItem() {

    const value = document.querySelector('#newItemText').value;

    const item = document.createElement('li');
    item.textContent = value;

    const deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.textContent = '[Delete]';
    item.appendChild(deleteButton);
    deleteButton.addEventListener('click', (e) => e.target.parentElement.remove());

    document.querySelector('ul').appendChild(item);
    document.querySelector('#newItemText').value = "";

}