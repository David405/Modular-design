const bookStore = ["The Potter's Wheel", "Sugar Girl", "My Father's Car"];
var lentBooks = [];

const functions = {
    display: () => {
        var books = [];

        if (bookStore.length > 0) {
            for (i = 0; i < bookStore.length; i++) {
                books.push(bookStore[i]);
            }
        }

        return books;
    },

    add: () => {
        element = "new book"
        var book = element;
        if (book) {
            bookStore.unshift(book.trim());
        }
        return bookStore
    },

    lend: (item) => {
        lentBooks.push(bookStore.splice(item, 1))

        var books = '';

        if (lentBooks.length > 0) {
            for (i = 0; i < lentBooks.length; i++) {
                books += lentBooks[i];
            }
        }
        return books;
    },

    track: (books) => {
        var element = '';
        var message = "book(s) has been rented";
        if (books) {
            element = books + ' ' + message;
        }
        return element;
    }
};

module.exports = functions;