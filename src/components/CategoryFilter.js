import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function CategoryFilter({ setSelectedCat, categories, search, setSearch }) {
  return (
    <div className="filter">
      <Form>
        <InputGroup className="mb-1"></InputGroup>

        <InputGroup className="mb-1">
          <InputGroup.Text id="basic-addon1">Category</InputGroup.Text>
          <Form.Select
            onChange={(e) => setSelectedCat(e.target.value)}
            name="category"
          >
            {categories.map((category, index) => (
              <option key={index}>{category}</option>
            ))}
          </Form.Select>
          <Link to={`/new`}>
            <Button variant="primary">Add Game</Button>
          </Link>
        </InputGroup>

        <InputGroup className="mb-1">
          <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
          <Form.Control
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
      </Form>
    </div>
  );
}

export default CategoryFilter;
