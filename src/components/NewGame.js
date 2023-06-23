import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
                history.push(`/games/${data.id}`)
            })
    }

    return (
        <section id="form">
            <h3>Add New Game</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                <Form.Label htmlFor="title">Title:</Form.Label>
                <Form.Control type="text" id="name" required value={title} onChange={e => setTitle(e.target.value)} />                

                <Form.Label htmlFor="about">About:</Form.Label>
                <Form.Control type ="textarea" id="about" value={short_description} onChange={e => setAbout(e.target.value)} />

                <Form.Label htmlFor="thumbnail">Image url:</Form.Label>
                <Form.Control type="text" id="image" value={thumbnail} onChange={e => setImage(e.target.value)} />   

                <Form.Label htmlFor="link">Game url:</Form.Label>
                <Form.Control type="text" id="url" value={game_url} onChange={e => setLink(e.target.value)} /> 

                <Form.Label htmlFor="genre">Genre:</Form.Label>
                <Form.Control type="text" id="genre" value={genre} onChange={e => setGenre(e.target.value)} /> 

                <Form.Label htmlFor="platform">Platform:</Form.Label>
                <Form.Control type="text" id="platform" value={platform} onChange={e => setPlatform(e.target.value)} /> 

                <Form.Label htmlFor="publisher">Publisher:</Form.Label>
                <Form.Control type="text" id="publisher" value={publisher} onChange={e => setPublisher(e.target.value)} /> 

                <Form.Label htmlFor="developer">Developer:</Form.Label>
                <Form.Control type="text" id="developer" value={developer} onChange={e => setDeveloper(e.target.value)} /> 

                <Form.Label htmlFor="release">Release Date:</Form.Label>
                <Form.Control type="date" id="release_date" value={release_date} onChange={e => setRdate(e.target.value)} />              
                </Form.Group>
                
                <Button variant= "primary" type="submit">Submit</Button>
            </Form>
        </section>
    )
}

export default NewGame