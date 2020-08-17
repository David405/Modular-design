var app = new function() {
    this.element = document.getElementById('bookStore');
    this.bookStore = ["The Potter's Wheel", "Sugar Girl", "My Father's Car"];
    var lentBooks = [];

    this.Display = function() {
        var books = '';

        if (this.bookStore.length > 0) {
            for (i = 0; i < this.bookStore.length; i++) {
                books += '<tr>';
                books += '<td>' + (i + 1) + '. ' + this.bookStore[i] + '<td>';
                books += '<td><button onclick="app.Lend(' + i + ')" style="color: blue">Lend</button></td>';
            }
        }

        return this.element.innerHTML = books;
    }

    this.Add = function() {
        element = document.getElementById('addBook');
        var book = element.value
        if (book) {
            this.bookStore.unshift(book.trim());
            element.value = '';
            this.Display();
        }
    }

    this.Lend = function(item) {
        lentBooks.push(this.bookStore.splice(item, 1))
        this.Display();

        var element = document.getElementById('lentBooks')
        var books = '';

        if (lentBooks.length > 0) {
            for (i = 0; i < lentBooks.length; i++) {
                books += '<tr>';
                books += '<td>' + (i + 1) + '. ' + lentBooks[i] + '<td>';
            }
        }

        this.Track(lentBooks.length)
        return element.innerHTML = books;

    }

    this.Track = function(books) {
        var el = document.getElementById('counter');
        var message = "book(s) has been rented";
        if (books) {
            el.innerHTML = books + ' ' + message;
        }
    }
}

app.Display();
app.Track();