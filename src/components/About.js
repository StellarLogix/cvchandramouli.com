import React from 'react';
import content from '../content.json';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{content.about.title}</h2>
        
        <div className="profiles">
          {content.about.profiles.map((profile, index) => (
            <div key={index} className="profile-card">
              <div className="profile-image">
                <img 
                  src={profile.image} 
                  alt={profile.name} 
                  className="profile-img"
                />
              </div>
              <div className="profile-info">
                <h3 className="profile-name">{profile.name}</h3>
                <p className="profile-title">{profile.title}</p>
                <p className="profile-description">{profile.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
