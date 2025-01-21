const createError = require("http-errors");
const Book = require("./schemas/Book");

exports.getAllBooks = async (req, res) => {
  try {
    //.find allows us to return all items in the collection
    const books = await Book.find();
    res.send(books);
  } catch (error) {
    next(createError(500, error.message));
  }
};

//make async and deal with database
exports.deleteAllBooks = (req, res) => {
  books = [];
  res.send(books);
};

exports.addBook = async (req, res) => {
  try {
    const { title, author, read } = req.body;
    const newBook = await Book.create({
      title,
      author,
      read: Boolean(read),
    });
    res.send(newBook);
  } catch (error) {
    next(createError(500, error.message));
  }
};

exports.getBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return next(createError(404, "no book with that id"));
    }
    res.send(book);
  } catch (error) {
    next(createError(500, error.message));
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return next(createError(404, "no book with that id"));
    }
    res.send(books);
  } catch (error) {
    next(createError(500, error.message));
  }
};

exports.updateBook = async (req, res, next) => {
  try {
    const { title, author, read } = req.body;
    const id = req.params.id; // `id` comes from the route parameter

    const book = await Book.findByIdAndUpdate(
      id,
      { title, author, read },
      { new: true } // This ensures the updated book is returned
    );

    if (!book) {
      return next(createError(404, "No book with that id"));
    }

    res.send(book); // Respond with the updated book
  } catch (error) {
    next(createError(500, error.message));
  }
  res.send(todos);
};



  

  