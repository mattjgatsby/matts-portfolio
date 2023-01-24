import React from "react";
import Projects from "../components/Projects";
import pokedexTracker from "../ProjectImages/pokedexTracker.png";

const ProjectContainer = (props) => {
  const projects = [
    {
      id: 0,
      name: "Pokedex Tracker",
      img: pokedexTracker,
      github: "https://github.com/AJManzione/Pokemon-Trading-Center",
      link: "https://pokemon-app.herokuapp.com/",
    },
  ];
  return (
    <div className="container-fluid col-12 p-3">
      <h2 className="text-center">Projects</h2>
      <div className="row m-2">
        {projects.map((projects) => (
          <Projects
            key={projects.id}
            name={projects.name}
            img={projects.img}
            github={projects.github}
            link={projects.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectContainer;
