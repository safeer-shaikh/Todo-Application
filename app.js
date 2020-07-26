var list = document.getElementById('list');

function addTodo(){
	var todo_item = document.getElementById('todo-item');

	// creating li tag with textnode
	var li = document.createElement('li');
	var liText = document.createTextNode(todo_item.value);
	li.setAttribute('class', 'valuesHere');
	li.appendChild(liText);

	// creating edit button
	var editBtn = document.createElement('button');
	var editText = document.createTextNode('EDIT');
	editBtn.appendChild(editText);
	editBtn.setAttribute('class', 'editButton');
	editBtn.setAttribute('onclick', 'editItem(this)');

	// creating delete button
	var delbtn = document.createElement('button');
	var delText = document.createTextNode('DELETE');
	delbtn.setAttribute('class', 'btn')
	delbtn.setAttribute('onclick', 'deleteItem(this)')
	delbtn.appendChild(delText);

	li.appendChild(editBtn);
	li.appendChild(delbtn);
	list.appendChild(li);
	todo_item.value = " ";
	console.log(li);
}

function editItem(e){
	var val = e.parentNode.firstChild.nodeValue;
	var editValue = prompt('Enter Edit Value: ', val);
	e.parentNode.firstChild.nodeValue = editValue;
}

function deleteItem(e){
	e.parentNode.remove();
}



function allDelete(){
	list.innerHTML = '';
}

