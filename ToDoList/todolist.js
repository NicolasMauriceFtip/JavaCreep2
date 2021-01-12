let form = document.getElementById('addForm');
let itemList = document.getElementById('to-do-items');
let filter = document.getElementById('filter');
let itemCompleted = document.getElementById('items-completed');

//add item
form.addEventListener('submit', addItem);
function addItem(e) {
	// bloque action par defaut de l'interface event
	e.preventDefault();

	//retrieve item
	let newItem = document.getElementById('item').value;

	//create list
	let li = document.createElement('li');
	li.className = 'todo-lists';

	li.appendChild(document.createTextNode(newItem));

	itemList.appendChild(li);

	//create completeBtn

	//	let completeBtn = document.createElement('input');

	let completeBtn = document.createElement('button');
	completeBtn.className = 'complete';
	completeBtn.appendChild(document.createTextNode('complete'));

	li.appendChild(completeBtn);
	itemList.appendChild(li);

	//create delete btn
	let deleteBtn = document.createElement('button');
	deleteBtn.className = 'delete';
	deleteBtn.appendChild(document.createTextNode('X'));

	li.appendChild(deleteBtn);
	itemList.appendChild(li);

	document.getElementById('item').value = '';
}

//delete Item
itemList.addEventListener('click', removeItem);
function removeItem(e) {
	if (e.target.classList.contains('delete')) {
		if (confirm('Delete an item?')) {
			let li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}

//completed Items
itemList.addEventListener('click', completeItem);
function completeItem(e) {
	//retrieve value from list
	let item = document.getElementsByClassName('todo-lists')[0].childNodes[0]
		.nodeValue;

	//create list
	let del = document.createElement('del');
	let li = document.createElement('li');
	li.className = 'completed-lists';
	li.appendChild(document.createTextNode(item));
	del.appendChild(li);
	itemList.removeChild(e.target.parentElement);
	itemCompleted.appendChild(del);
}

// Filter Items
filter.addEventListener('keyup', filterItems);
function filterItems(e) {
	var text = e.target.value.toLowerCase();
	// Get lists
	var items = itemList.getElementsByTagName('li');
	// Convert to an array
	Array.from(items).forEach(function (item) {
		var itemName = item.firstChild.textContent;
		if (itemName.toLowerCase().indexOf(text) != -1) {
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	});
}
