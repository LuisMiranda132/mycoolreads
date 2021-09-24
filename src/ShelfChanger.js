import React from 'react';
import PropTypes from 'prop-types';

class ShelfChanger extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            selected: props.shelf
        };
    }
    
    onChange = (event) => {
        this.props.onChange(event.target.value);
        this.setState({ selected: event.target.value});
    }
    
    render(){
        return(
	    <div className="book-shelf-changer">
	      <select onChange={this.onChange} value={this.state.selected} >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>);
    }
}

ShelfChanger.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default ShelfChanger;
