// Book constructor
function Book(title, author, pages, read = false) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = () => {
		return `${title} by ${author}, ${pages} pages, ${read ? ' has been read' : ' not read yet'}`;
	};
}

const library = [
	new Book('the hobbit', 'jrr tolkien', 295, false),
	new Book('the road', 'cormac mccarthy', 412, true),
	new Book('100 years of solitude', 'gabriel garcia marquez', 417, false),
];

const dialog = document.querySelector('dialog');
const form = document.querySelector('#form');
const showDialogBtn = document.querySelector('#show-dialog');
const formSubmitBtn = document.querySelector('#submitBtn');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');

function addToLibrary() {
	const title = titleInput.value;
	const pages = pagesInput.value;
	const author = authorInput.value;
	const read = readInput.checked;
	const newBook = new Book(title, author, pages, read);
	library.push(newBook);
}

function removeBook(e) {
	console.log(e.target);
	const bookIndex = e.target.getAttribute('data-index');
	library.splice(bookIndex, 1);
	displayLibrary();
}

function changeReadStatus(e) {
	const bookIndex = e.target.getAttribute('data-index');
	library[bookIndex].read = !library[bookIndex].read;
	displayLibrary();
}

function displayLibrary() {
	const bookDiv = document.querySelector('.book-div');
	bookDiv.textContent = '';

	library.forEach((book, index) => {
		const bookCard = document.createElement('div');
		bookCard.classList.add('card');

		const title = document.createElement('h2');
		title.textContent = book.title;

		const author = document.createElement('p');
		author.textContent = `By ${book.author}`;

		const pages = document.createElement('p');
		pages.textContent = `Pages: ${book.pages}`;

		const readCheckbox = document.createElement('input');
		readCheckbox.type = 'checkbox';
		readCheckbox.setAttribute('data-index', index);
		readCheckbox.addEventListener('click', changeReadStatus);
		readCheckbox.checked = book.read ? true : false;

		const readStatus = document.createElement('span');
		readStatus.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;

		const removeButton = document.createElement('button');
		removeButton.setAttribute('data-index', index);
		removeButton.appendChild(document.createTextNode('Remove Book'));
		removeButton.addEventListener('click', removeBook);

		bookCard.appendChild(title);
		bookCard.appendChild(author);
		bookCard.appendChild(pages);
		bookCard.appendChild(readCheckbox);
		bookCard.appendChild(readStatus);
		bookCard.appendChild(removeButton);

		bookDiv.appendChild(bookCard);
	});
}

function validateInput() {
	const titleFilled = titleInput.value.length > 0;
	const pagesFilled = pagesInput.value !== '';
	const authorFilled = authorInput.value.length > 0;
	return titleFilled && pagesFilled && authorFilled;
}

function clearForm() {
	titleInput.value = '';
	pagesInput.value = '';
	authorInput.value = '';
	readInput.checked = false;
}

showDialogBtn.addEventListener('click', (e) => {
	dialog.showModal();
});

dialog.addEventListener('close', (e) => {
	console.log('closing modal!');
	console.log(dialog.returnValue);
});

formSubmitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	if (validateInput()) {
		addToLibrary();
		displayLibrary();
		clearForm();
		dialog.close();
	} else {
		console.log('fill out the form, coward');
		const errorText = document.querySelector('#errorText');
		errorText.textContent = '';
		errorText.textContent = 'Please fill out all fields';
		form.appendChild(errorText);
	}
});

form.addEventListener('submit', (e) => {
	console.log('submit event handler engaged');
});
displayLibrary();
console.log('hey there heh');
