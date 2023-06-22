import React, { useState } from "react";
import { useHistory } from "react-router-dom";



function NewGame() {
    const [name, setName] = useState("");
    const [about, setAbout] = useState("");
    
    const history = useHistory();
    
    function handleSubmit(e) {
        e.preventDefault()
        const formData = {
            game: { name, about,  }
        }
        fetch("/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(data => {
                // redirect /projects/:id
                history.push(`/game/${data.project.id}`)
            })
    }
    

    
    return (
        <section id="form">
            <h3>Add new project</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                
                <label htmlFor="about">About:</label>
                <textarea id="about" value={about} onChange={e => setAbout(e.target.value)} />
                
                <fieldset>
                    <legend>Technologies</legend>
                    {checkboxes}
                </fieldset>
                
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default NewGame