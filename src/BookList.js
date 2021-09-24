import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

function BookList(props){
    return (
	<ol className="books-grid">
    	  {props.books.map((book) => (<Book key={book.id} changeShelf={props.changeShelf} {...book} />))}
	</ol>
    );
}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func
};

export default BookList
