import React, { useEffect, useState } from "react";
import ProjectItem from "./GameItem";

function ProjectList() {
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        fetch("/projects")
            .then(r => r.json())
            .then(data => setProjects(data.projects))
    }, [])
    
    const projectItems = projects.map((project) => (
        <ProjectItem
            key={project.id}
            name={project.name}
            about={project.about}
            technologies={project.technologies}
        />
    ));
    
    return (
        <div id="games">
            <h2>ALL GAMES</h2>
            <div id="project-list">{projectItems}</div>
        </div>
    );
}

export default ProjectList;
