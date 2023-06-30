import React from "react";

function About() {
  return (
    <div id="about">
      <h2>Flatiron School Phase-2 Project </h2>
      <h4>MMO - Games</h4>
      <p>
        This page is created as a phase-2 React project assignment given by
        Flatiron School. Code by <strong>Renardo Williams</strong>. A modified
        version of the public{" "}
        <a href="https://www.mmobomb.com/api">MMO Games</a> API was used to make
        <a href="https://github.com/Renardo1985/phase-2-project-server">
          https://github.com/Renardo1985/phase-2-project-server
        </a>
      </p>
      <p>
        The API was used to populate the games section with all currently LIVE
        games.Also, you can favorite games you like and view them later, search
        for MMO Games by title from the games section. Finally, you can learn
        the details about your favorites by selecting see more.
      </p>

      <h4>Technologies</h4>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
      </ul>
    </div>
  );
}

export default About;
