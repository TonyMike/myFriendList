import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import friends from "../friends";
import 'tachyons'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      friends: friends,
      searchField: ''
    }
  }
  onSearchchange = (e)=>{
    this.setState({ searchField: e.target.value})
  }
  render() {
    const filtered = this.state.friends.filter(scan => {
      return scan.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1 className='shadow-5 pa3'>My Friend List</h1>
        <SearchBox searchChange={this.onSearchchange}/>
        <CardList friends={filtered}/>
     </div>
    );
  }
}

export default App;
