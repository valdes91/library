const library = [
	new Book('the hobbit', 'jrr tolkien', 295, false),
	new Book('the road', 'cormac mccarthy', 412, true),
	new Book('100 years of solitude', 'gabriel garcia marquez', 417, false),
];

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

function addToLibrary() {}

function displayLibrary() {
	const bookDiv = document.querySelector('.book-div');

	library.forEach((book) => {
		const bookCard = document.createElement('div');
		bookCard.classList.add('card');

		const title = document.createElement('h2');
		title.textContent = book.title;

		const author = document.createElement('p');
		author.textContent = `By ${book.author}`;

		const pages = document.createElement('p');
		pages.textContent = `Pages: ${book.pages}`;

		const read = document.createElement('p');
		read.textContent = `Read: ${read ? 'Yes' : 'No'}`;

		bookCard.appendChild(title);
		bookCard.appendChild(author);
		bookCard.appendChild(pages);
		bookCard.appendChild(read);

		bookDiv.appendChild(bookCard);
	});
}

const dialog = document.querySelector('dialog');
const showDialogBtn = document.querySelector('#show-dialog');
const formSubmitBtn = document.querySelector('#submitBtn');

showDialogBtn.addEventListener('click', (e) => {
	dialog.showModal();
});

dialog.addEventListener('close', (e) => {
	console.log('closing modal!');
	console.log(dialog.returnValue);
});

displayLibrary();
console.log('hey there heh');
