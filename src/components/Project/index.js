import React, { useState } from 'react';

const Project = () => {
  const initialProjectsToShow = 2; // Number of projects to show initially
  const [projectsToShow, setProjectsToShow] = useState(initialProjectsToShow);

  const projects = [
    {
      title: 'Math-Fiesta',
      description: `Developed an engaging event website using ReactJS, featuring a
      sleek and responsive design, and implemented seamless
      navigation and real-time updates from registration to event day.`,
      embedUrl: 'https://mathsclub.kongu.edu',
      projectUrl: 'https://github.com/Bommisrilekkhaa/MathFiesta',
    },
    {
      title: 'EcoHarv',
      description: 'An Agricultural E-Commerce website',
      thumbnailUrl:'https://photos.app.goo.gl/bgig8bgjgRbTy1gY7',
      embedUrl: '',
      projectUrl: 'https://github.com/Bommisrilekkhaa/wt-proj-farmer-s_Products',
    },
    {
      title: 'BlogCraft',
      description: 'A Blogging website',
      embedUrl: '',
      projectUrl: 'https://github.com/Bommisrilekkhaa/BlogCraft',
    },
    {
      title: 'Sportz',
      description: 'A Sports Querying Bot',
      embedUrl: '',
      projectUrl: 'https://github.com/Bommisrilekkhaa/Sportz',
    },
    {
      title: 'PortFolio',
      description: 'My Personel PortFolio website',
      embedUrl: 'https://portfolio-bommisri.vercel.app',
      projectUrl: 'https://github.com/Bommisrilekkhaa/PortFolio',
    },
  ];

  const handleShowMore = () => {
    // Show more projects (increase the number to show by 2, for example)
    setProjectsToShow(projectsToShow + 2);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>My Projects</h2>
      {projects.slice(0, projectsToShow).map((project, index) => (
        <div key={index} style={{ ...styles.projectCard, ...(index < projectsToShow ? styles.hoverEffect : {}) }}>

          <iframe
            title={project.title}
            width="100%"
            height="300"
            src={project.embedUrl}
            allowFullScreen
            style={styles.projectIframe}
          ></iframe>
          <div style={styles.projectInfo}>
            <h3 style={{ color: '#b5edff' }}>
              <b>
                <em>{project.title}</em>
              </b>
            </h3>
            <p>{project.description}</p>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
              View on GitHub
            </a>
          </div>
        </div>
      ))}
      {projectsToShow < projects.length && (
        <button onClick={handleShowMore} style={styles.showMoreButton}>
          Show More
        </button>
      )}
    </div>
  );
};


const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    
  },
  heading: {
    fontSize: '40px',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#b5edff'
  },
  
  projectIframe: {
    width: '100%',
    border: 'none', // Remove border
    overflow: 'hidden', // Hide scroll bars
  },
  projectInfo: {
    fontSize: '20px',
    padding: '20px',
    color: 'white', // Set text color to white
  },
  projectLink: {
    display: 'block',
    marginTop: '10px',
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  },
  showMoreButton: {
    display: 'block',
    margin: '20px auto',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#00b700',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  projectCard: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 0 10px rgba(255, 255, 255, 250)',
    margin: '30px' ,
    // transition: 'background',
  },

  // hoverEffect: {
  //   backgroundColor: 'blue',
  // },

  
};

export default Project;
