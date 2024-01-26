const library = [
	new Book('the hobbit', 'jrr tolkien', 295, false),
	new Book('the road', 'cormac mccarthy', 412, true),
	new Book('100 years of solitude', 'gabriel garcia marquez', 417, false),
];

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
	const main = document.querySelector('main');

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

		main.appendChild(bookCard);
	});
}

displayLibrary();
