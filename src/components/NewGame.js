import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

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
    e.preventDefault();
    const formData = {
      title,
      thumbnail,
      short_description,
      game_url,
      genre,
      platform,
      publisher,
      developer,
      release_date,
    };
    fetch("http://localhost:3001/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        history.push(`/games/${data.id}`);
      });
  }

  return (
    <>
      <h3>Add New Game</h3>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-1">
          <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
          <Form.Control
            type="text"
            id="name"
            required="true"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-1">
          <InputGroup.Text id="basic-addon1">About:</InputGroup.Text>
          <Form.Control
            type="textarea"
            id="about"
            value={short_description}
            onChange={(e) => setAbout(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-1">
          <InputGroup.Text id="basic-addon1">Genre:</InputGroup.Text>
          <Form.Control
            type="text"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-1">
          <InputGroup.Text id="basic-addon1">Platform:</InputGroup.Text>
          <Form.Control
            type="text"
            id="platform"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-1">
          <InputGroup.Text id="basic-addon1">Publisher:</InputGroup.Text>
          <Form.Control
            type="text"
            id="publisher"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-1">
          <InputGroup.Text id="basic-addon1">Game-Url:</InputGroup.Text>
          <Form.Control
            type="text"
            id="url"
            value={game_url}
            onChange={(e) => setLink(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-1">
          <InputGroup.Text id="basic-addon1">Image-Url:</InputGroup.Text>
          <Form.Control
            type="text"
            id="image"
            value={thumbnail}
            onChange={(e) => setImage(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-1">
          <InputGroup.Text id="basic-addon1">Developer:</InputGroup.Text>
          <Form.Control
            type="text"
            id="developer"
            value={developer}
            onChange={(e) => setDeveloper(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-1">
          <InputGroup.Text id="basic-addon1">Release Date:</InputGroup.Text>
          <Form.Control
            type="text"
            id="release_date"
            value={release_date}
            onChange={(e) => setRdate(e.target.value)}
          />
        </InputGroup>

        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default NewGame;
