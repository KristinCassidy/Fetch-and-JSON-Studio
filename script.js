window.addEventListener("load", function() {
  //let json = [];
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
    response.json().then(function(json) {
      const container = document.getElementById("container");
      for (let index = 0; index < json.length; index++){
      container.innerHTML = `
        <div class="astronaut">
          <div class="bio">
            <h3>${json[index].firstName} ${json[index].lastName}</h3>
            <ul>
              <li>Hours in Space: ${json[index].hoursInSpace}</li>
              <li>Active: ${json[index].active}</li>
              <li>Skills: ${json[index].skills}</li>
            </ul>
          </div>
          <img class="avatar" src=${json[index].picture}>
        </div>
      `;
        console.log(json[2]);
      };
    });
  });
});
