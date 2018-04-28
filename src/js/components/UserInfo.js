import React from 'react';

export default class KittenInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shown: false
    }
  }
  handleClick = () => {
    this.setState(prevState => ({
      shown: !prevState.shown
    }));
  }
  render() {
    let usersInterests;
    let displayText = 'more';
    
    if (this.state.shown) {
      usersInterests = <div className='kitten-info__interests'>
        <p className='kitten-info__interests-title'>Interests</p>
        <ul className='kitten-info__interests-list'>
          {this.props.user.interests.map((interest, index) => {
            return <li key={index}>{interest}</li>
          })}
        </ul>
      </div>;

      displayText = 'less';
    }

    return (
      <div className='kitten-info'>
        <p className='kitten-info__name'>
          {this.props.user.name}
          <span className='kitten-info__more' onClick={this.handleClick}>Show {displayText} <i className="icon-info-circled"></i></span>
        </p>
        <p className='kitten-info__bio'>{this.props.user.bio}</p>
        {usersInterests}
      </div>
    )
  }
}