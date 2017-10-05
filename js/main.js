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
		target.id === "radtunes" ||
		target.classList.contains("radtunes")
	) {
		projectDescription.innerHTML = `
    <h4><strong>RADtunes</strong></h4>
    <p>This is a site built off of the iTunes API. You can search by keyword and listen to previews all on this rad site. The site dynamically updates with the search.
</p>
    <h6>Tech Used: HTML5, CSS3, JavaScript</h6>
    <br>
    <br>
          `;
	} else if (target.id === "chatbot" || target.classList.contains("chatbot")) {
		projectDescription.innerHTML = `
    <h4><strong>Simple AI Chatbot</strong></h4>
    <p>This app uses API.ai's AI to give live responses to user input. Socket.io passes the information back and forth between the client and the server.</p>
    <h6>Tech Used: JavaScript, Node, Socket.io</h6>
            `;
	} else if (
		target.id === "chstweets" ||
		target.classList.contains("chstweets")
	) {
		projectDescription.innerHTML = `
    <h4><strong>Charleston Tweets</strong></h4>
    <p>This web page to uses the Twitter API’s geolocation properties to return tweets only from the Charleston area (Johns Island, SC to Moncks Corner). The backend is built from Node and Express which controls all the data and Socket.io to transfer that data to the client end.</p>
    <h6>Tech Used: JavaScript, Node, Socket.io</h6>
              `;
	} else {
		projectDescription.innerHTML = "";
	}
});
