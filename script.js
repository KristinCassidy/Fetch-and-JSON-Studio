window.addEventListener("load", function() {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
    response.json().then(function(json) {
      json.sort((a, b) => {
      return a.hoursInSpace - b.hoursInSpace;
      });
      for (let index = 0; index < json.length; index++) {
        let astronautBio = document.createElement("div");
          astronautBio.innerHTML = `
            <div class="astronaut">
              <div class="bio">
                <h3>${json[index].firstName} ${json[index].lastName}</h3>
                <ul>
                  <li>Hours in Space: ${json[index].hoursInSpace}</li>
                  <li id="activeStatus">Active: ${json[index].active}</li>
                  <li>Skills: ${json[index].skills.join(", ")}</li>
                </ul>
              </div>
              <img class="avatar" src=${json[index].picture}>
            </div>
          `;  
           document.getElementById("container").appendChild(astronautBio);
//         for (let index = 0; index < json.length; index++) {
//         let trueStatus = document.getElementById("activeStatus");
//           if (trueStatus.innerHTML == "Active: true") {
//             trueStatus.style.color ="green";
//           }};
          let active = document.getElementById("activeStatus");
          if (json[index].active === true) {
            let trueStat = active.createAttribute("style");
            trueStat.value = "color:green";
          };
      };               
    });
  });
});
