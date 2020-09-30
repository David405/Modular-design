const functions = require('./functions');

test('Display the list of books', () => {
    books = ["The Potter's Wheel", "Sugar Girl", "My Father's Car"];
    expect(functions.display()).toStrictEqual(books);
});

test('Check if new book is added to Bookstore', () => {
    book = "new book";
    expect(functions.add()).toContain(book);
});

test('Check if book is deleted from bookStore', () => {
    book = "Sugar Girl";
    expect(functions.lend(2)).toBe(book);
});

test('Check for the number of lentbooks', () => {
    expect(functions.track(1)).toBe("1 book(s) has been rented")
});