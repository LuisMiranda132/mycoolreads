import React from 'react';
import { Link } from 'react-router-dom';

import Bookshelf from './Bookshelf';

function MainList (props){

    const { changeShelf, bookList } = props;
    
    return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>My Cool Reads</h1>
          </div>
          <div className="list-books-content">
            <Bookshelf title="Currently Reading" tag="currentlyReading" bookList={bookList} changeShelf={changeShelf}/>
            <Bookshelf title="Want to Read" tag="wantToRead" bookList={bookList} changeShelf={changeShelf}/>
            <Bookshelf title="Read" tag="read" bookList={bookList}  changeShelf={changeShelf}/>
          </div>
          <div className="open-search">
            <Link to='/search' >
              <button>Add a book</button>
            </Link>
          </div>
        </div>
    );
}

export default MainList;
