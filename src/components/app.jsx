import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifID: "fqu8dnXGXkvio"
    }

    this.search("dog");
  }

  search = (query) => {
    giphy('DnNwxEV8SZfW8pubBeyUKIijtk1JkMGq').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    return(
        <div>
          <div className="left-scene">
            <SearchBar searchFunction={this.search} />
            <div className="selected-gif">
              <Gif id={this.state.selectedGifID} />
            </div>
          </div>
          <div className="right-scene">
            <GifList gifs={this.state.gifs}/>
          </div>
        </div>
      );
  }
}

export default App;

