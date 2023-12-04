const add_item = () => {
	// Get the textbox element
	const textbox = document.getElementById('list');

	// Get the text that is currently in "textbox"
	const textbox_value = textbox.value;

	// Create a new element with the type "li"
	const list_item = document.createElement('li');

	// Change the text in "list_item" to the text we stored in "textbox_value"
	list_item.innerText = textbox_value;

	// Give "list_item" a class of "red" (Or className)
	list_item.classList.add('red');
            
	// Get the list container element
	const list = document.getElementById('list2');

	// Add the newly created list item to the list container
	list.appendChild(list_item);
};