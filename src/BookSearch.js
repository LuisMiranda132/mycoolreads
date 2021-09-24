import React from 'react';
import memoize from 'memoize-one';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

import BookList from './BookList';

class BookSearch extends React.Component {

    state = {
        bookList: [],
        error: false
    }
    
    searchBook = _.debounce((event) => {

        if (event.target.value !== "") {

            BooksAPI.search(event.target.value, 100)
                .then((books) => {
                    if(Array.isArray(books)){
                        
                        books.map((book) => {
                            
                            if(this.getMyBooks(this.props.myBooks).hasOwnProperty(book.id)){
                                book['shelf'] = this.getMyBooks(this.props.myBooks)[book.id];
                            }

                            return book;
                        });
                                                
                        this.setState({
                            bookList: books,
                            error: false
                        });
                    }else{
                        this.setState({ error: true, bookList: [] });
                    }
                });
        }else{
            this.setState({
                bookList: [],
                error: false
            });
        }
    },300)

    onChangeSearch = (event) => {
        event.persist();

        this.searchBook(event);
    }

    getMyBooks = memoize((bookList) => {
    	const myBooks = {};
        bookList.map((book) => (myBooks[book.id] = book.shelf));

        return myBooks;
    })


    render(){

        const { changeShelf } = this.props;
        const { bookList } = this.state;

        return(
            <div className="search-books">
              <div className="search-books-bar">
                <Link to='/'>
                  <button className="close-search" >
                    Close
                  </button>
                </Link>
                
                <div className="search-books-input-wrapper">
                  <input
                    type="text"
                    placeholder="Search by title or author"
                    onChange={this.onChangeSearch}
                  />
                  
                </div>
              </div>
              <div className="search-books-results">
                {this.state.error && <h3 className='error'>invalid query</h3>}
                <BookList books={bookList} changeShelf={changeShelf}/>
              </div>
            </div>);
    }
}

export default BookSearch;
