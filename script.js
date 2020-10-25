window.addEventListener("load", function() {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
    response.json().then(function(json) {
      json.sort((a, b) => {
      return a.hoursInSpace - b.hoursInSpace;
      });
      //for (let index = 0; index < json.length; index++) {
      for each (let astronaut in json) {
        let astronautBio = document.createElement("div");
          astronautBio.innerHTML = `
            <div class="astronaut">
              <div class="bio">
                <h3>${json[index].firstName} ${json[index].lastName}</h3>
                <ul>
                  <li>Hours in Space: ${json[index].hoursInSpace}</li>
                  <li>Active: ${json[index].active}</li>
                  <li>Skills: ${json[index].skills.join(",  ")}</li>
                </ul>
              </div>
              <img class="avatar" src=${json[index].picture}>
            </div>
          `;
        document.getElementById("container").appendChild(astronautBio);
      };
    });
  });
});
