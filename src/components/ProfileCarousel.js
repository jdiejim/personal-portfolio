import React, { Component } from 'react';
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.jpeg';
import './styles/ProfileCarousel.css';

class ProfileCarousel extends Component {
  constructor() {
    super();
    this.state = {
      pos: 0,
      pics: [p1, p2, p3],
      updateInterval: null,
    };

    this.updateProfile = this.updateProfile.bind(this);
  }

  componentDidMount() {
    const updateInterval = setInterval(this.updateProfile, 1000);

    this.setState({ updateInterval });
  }
  
  componentWillUnmount() {
    clearInterval(this.state.updateInterval);
  }

  updateProfile() {
    const pos = this.state.pos === 2 ? 0 : this.state.pos += 1;
    
    this.setState({ pos });
  }
  
  render() {
    const { pics, pos } = this.state;
    const viewPosition = { left: `${pos * -100}%` };
    const profilePics = pics.map((pic, i) => {
      const style = { 
        left: `${i * 100}%`,
        backgroundImage: `url(${pic})`, 
      };

      return <div style={style} class="profile-pic" />;
    });

    return (
      <section id="profile-carousel">
        <section style={viewPosition} className="profile-viewbox">
          {profilePics}
        </section>
      </section>
    );
  }
}

export default ProfileCarousel;
