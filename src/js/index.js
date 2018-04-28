import '../scss/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Card from './components/Card';
import Match from './components/Match';
import Header from './components/Header';
import Buttons from './components/Buttons';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 1,
      answeredItem: 0,
      class: '',
      data: [],
      matched: false,
      matchedUser: [],
      selectType: ''
    };
  }
  componentDidMount() {
    this.fetchData();    
  }
  fetchData() {
    const url = 'https://my-json-server.typicode.com/airtame/kittens/kittens';
    
    return fetch(url)
      .then(response => response.json())
      .then(data => {        
        this.setState({
          data
        });
      })
      .catch(error => console.error('Error:', error));
  }
  handleChange = (selectType) => {   
    let active = this.state.activeItem;
    active++;

    // return things back to the beginning for continuity's sake
    if (this.state.activeItem === this.state.data.length) {
      this.setState({
        activeItem: 1
      });
      active = 1;
    }
    
    let answered = this.state.answeredItem;
    answered++; 

    // return things back to the beginning for continuity's sake
    if (this.state.answeredItem === this.state.data.length) {
      this.setState({
        answeredItem: 1
      });
      answered = 1;
    }

    let type;
    if (selectType === 'pass') type = ' pass';
    if (selectType === 'super') type = ' super';
    if (selectType === 'like') type = ' liked';

    let matched = false;
    if ((this.state.data[active - 1].likesYou) && (selectType !== 'pass')) {
      matched = this.state.data[active - 1].likesYou
    }

    if (selectType === 'super') {
      matched = true;
    }    
    
    if (!matched) {
      this.setState({
        activeItem: active,
        answeredItem: answered,
        selectType: type
      });
    } else {
      this.setState({
        matched,
        matchedUser: this.state.data[this.state.answeredItem],
        selectType: type
      });
    }
  }
  continuePlaying = () => {
    this.setState({
      activeItem: this.state.activeItem + 1,
      answeredItem: this.state.answeredItem + 1,
      matched: false
    });
  }
  render() {
    return (
      <section>
        <Match data={this.state} continuePlaying={this.continuePlaying} />
        <Header />
        <Card data={this.state} />
        <Buttons handleChange={this.handleChange} />
      </section>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);