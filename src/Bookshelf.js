import React from 'react';
import PropTypes from 'prop-types';

import BookList from './BookList';

function Bookshelf(props){
    
    const { title, tag, bookList, changeShelf } = props;

    var bookListFilter = bookList.filter((book) => (book.shelf === tag));
    
    return(
        <div className="bookshelf">
    	  <h2 className="bookshelf-title">{title}</h2>
    	  <div className="bookshelf-books">
            <BookList books={bookListFilter} changeShelf={changeShelf}/>
	  </div>
        </div>);
}

Bookshelf.propTypes = {
    title: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    bookList: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
};

export default Bookshelf;
