import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

import MainList from './MainList';
import BookSearch from './BookSearch';

class BooksApp extends React.Component {
    state = {
        bookList: []
    }
    
    componentDidMount(){
        BooksAPI.getAll()
            .then((books) => (this.setState({
                bookList: books
            })));
    }

    changeShelf = (bookId, shelf) => {
	
        BooksAPI.update({ id: bookId }, shelf)
            .then((resp) => (this.setState((prevState) => {

                if(shelf === 'none'){
                    let bookList = prevState.bookList.filter((book) => {
                        return book.id !== bookId;
                    });

                    return { bookList: bookList };
                }
                
                let exist = false;
                
                let bookList = prevState.bookList.map((book) => {
		    let dummy = Object.assign({}, book);

		    if (dummy.id === bookId){
			dummy.shelf = shelf;
                        exist = true;
		    }

		    return dummy;
		});

                if (!exist) {
                    BooksAPI.get(bookId)
                        .then((book) => {
                            let newBook = Object.assign({shelf: shelf}, book);
                            bookList.push(newBook);
                        });
                }

		return { bookList: bookList };
            })));
    }


    render() {
        
        return (
            <div className="app">
              <Route exact path='/' render={() => (<MainList changeShelf={this.changeShelf} bookList={this.state.bookList}/>
              )}/>
              <Route path='/search' render={() => (<BookSearch changeShelf={this.changeShelf} myBooks={this.state.bookList} />
              )}/>
            </div>
        );
    }
}

export default BooksApp
