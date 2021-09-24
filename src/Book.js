import React from 'react';
import PropTypes from 'prop-types';

import ShelfChanger from './ShelfChanger';

function Book(props){
    const { id, title, authors, imageLinks, shelf } = props;

    const changeShelf = (shelf) => (props.changeShelf(id, shelf));
    
    return (
        <div className="book">
          <div className="book-top">
            <img className="book-cover" style={{ width: 128, height: 193}} src={imageLinks && imageLinks.thumbnail} alt={title}/>
            <ShelfChanger onChange={changeShelf} shelf={shelf ? shelf : "none"}/>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors && authors.map((author)=>(author))}</div>
        </div>
    );
}

Book.propTypes = {
    changeShelf: PropTypes.func
};

export default Book;
