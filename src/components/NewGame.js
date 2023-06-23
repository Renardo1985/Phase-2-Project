import React, { useState } from "react";
import { useHistory } from "react-router-dom";



function NewGame() {
    const [title, setTitle] = useState("");
    const [thumbnail, setImage] = useState("");
    const [short_description, setAbout] = useState("");
    const [game_url, setLink] = useState("");
    const [genre, setGenre] = useState("");
    const [platform, setPlatform] = useState("");
    const [publisher, setPublisher] = useState("");
    const [developer, setDeveloper] = useState("");
    const [release_date, setRdate] = useState("");
    
    
    const history = useHistory();
    
    function handleSubmit(e) {
        e.preventDefault()
        const formData = {title,thumbnail,short_description,game_url,genre,platform,publisher,developer,release_date}
        fetch("http://localhost:3001/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(data => {
                // redirect /projects/:id
                history.push(`/games/${data.id}`)
            })
    }

    return (
        <section id="form">
            <h3>Add new project</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="name" required value={title} onChange={e => setTitle(e.target.value)} /> 

                <label htmlFor="about">About:</label>
                <textarea id="about" value={short_description} onChange={e => setAbout(e.target.value)} />

                <label htmlFor="thumbnail">Image url:</label>
                <input type="text" id="image" value={thumbnail} onChange={e => setImage(e.target.value)} />   

                <label htmlFor="link">Game url:</label>
                <input type="text" id="url" value={game_url} onChange={e => setLink(e.target.value)} /> 

                <label htmlFor="genre">Genre:</label>
                <input type="text" id="genre" value={genre} onChange={e => setGenre(e.target.value)} /> 

                <label htmlFor="platform">Platform:</label>
                <input type="text" id="platform" value={platform} onChange={e => setPlatform(e.target.value)} /> 

                <label htmlFor="publisher">Publisher:</label>
                <input type="text" id="publisher" value={publisher} onChange={e => setPublisher(e.target.value)} /> 

                <label htmlFor="developer">Developer:</label>
                <input type="text" id="developer" value={developer} onChange={e => setDeveloper(e.target.value)} /> 

                <label htmlFor="release">Release Date:</label>
                <input type="date" id="release_date" value={release_date} onChange={e => setRdate(e.target.value)} />              
                
                
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default NewGame