const projectDescription = document.querySelector(".project-description");
const projectsDiv = document.querySelector(".projects");

projectsDiv.addEventListener("mouseover", function(event) {
  const target = event.target;
  if (target.id === "passnote" || target.classList.contains("passnote")) {
    projectDescription.innerHTML = `
    <h4><strong>PassNote - Group Project</strong></h4>
    <h5>My role: Project lead, Back End API and Data Control</h5>
    <p>This is an ephemeral messaging app, the messages delete after a short time period. The user can pass their messages to others and all users will be able to see the messages.</p>
    <h6>Tech Used: JavaScript, Node, MongoDB, Moment, Mongoose, Express, Express Sessions</h6>
    `;
  } else if (target.id === "snipe" || target.classList.contains("snipe")) {
    projectDescription.innerHTML = `
    <h4><strong>_snipe_</strong></h4>
    <p>This is a fully functional application. Users can register, login, and create a variety of code snippets. Users and snippets are managed with MongoDB and Mongoose. Bootstrap 4 was used for the frontend. This site is fully searchable.<p>
    <h6>Tech Used: JavaScript, Node, Bootstrap 4, Mongoose, MongoDB</h6>
      `;
  } else if (target.id === "moon" || target.classList.contains("moon")) {
    projectDescription.innerHTML = `
    <h4><strong>The Moon Collection</strong></h4>
    <p>The database for this project with data from a web scraper. This collection allows a user to see all of the moons of our solar system, as well as add, edit and delete them.</p>
    <h6>Tech Used: JavaScript, Node, MongoDB</h6>
        `;
  } else if (
    target.id === "robotFight" ||
    target.classList.contains("robotFight")
  ) {
    projectDescription.innerHTML = `
    <h4><strong>Robot-Fight-4</strong></h4>
    <p>An RPG style Robot fighting game built exclusively in React.
</p>
    <h6>Tech Used: React, React Router, JavaScript</h6>
    <br>
    <br>
          `;
  } else if (target.id === "the-ink" || target.classList.contains("the-ink")) {
    projectDescription.innerHTML = `
    <h4><strong>The Ink</strong></h4>
    <p>This is a full stack React Blogging Application. Users can signup, login, write posts and leave comments.</p>
    <h6>Tech Used: React, React Router, Redux, Node, Express, SQLite3</h6>
            `;
  } else if (
    target.id === "redString" ||
    target.classList.contains("redString")
  ) {
    projectDescription.innerHTML = `
    <h4><strong>_redString</strong></h4>
    <p>A full stack React Application that parses docuents (.doc, .txt, .pdf) auto-generates relational tags between files and creates a visual data map of those relationships.</p>
    <h6>Tech Used: React, Node, NLP, Python, JavaScript, D3, SQLite3</h6>
              `;
  } else {
    projectDescription.innerHTML = "";
  }
});
