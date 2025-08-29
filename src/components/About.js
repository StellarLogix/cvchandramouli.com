import React from 'react';

const About = () => {
  const profiles = [
    {
      name: "C.V. Chandramouli",
      title: "Founder",
      description: "Founder and pioneer in cinema advertising.",
      image: "/images/chandramouli.jpeg"
    },
    {
      name: "R.C. Vijay",
      title: "Director",
      description: "MCA, MBA (Advertising). Certified in Technical Writing, Photoshop, and Digital Marketing.",
      image: "/images/vijay.jpeg"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        
        <div className="profiles">
          {profiles.map((profile, index) => (
            <div key={index} className="profile-card">
              <div className="profile-image">
                <img
                  src={process.env.PUBLIC_URL + profile.image}
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
