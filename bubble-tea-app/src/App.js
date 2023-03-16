import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from '../src/SearchBox';
import { teas } from './bubble-tea';

class App extends Component {
    constructor(){
        super()
        this.state = {
            teas: teas,
            searchfield: ''
        }
    }

  onSearchChange = (event) => {
    // this.setState({ searchfield: event.target.value })
    const filteredTeas = this.state.teas.filter(teas => {
        return teas.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    
  })
}

    render() {
        return (
            <div className='tc'>
                <h1>Bubble Tea Menu</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList teas={this.state.filteredTeas}/> 
            </div>
        );
    }
    
}
export default App; 

// must use arrows funcs to ensure that this refers to the 'this' in THIS file
