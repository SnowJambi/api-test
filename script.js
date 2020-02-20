async function getJson() {
  let response = await fetch("https://ghibliapi.herokuapp.com/films");
  let myJson = await response.json();
  return myJson;
}

getJson().then(data => {
    for (const film of data) {
        let div = document.createElement("div");
        let heading = document.createElement("h2");
        let description = document.createElement("p");
        let root = document.getElementById("root");

        heading.innerHTML = film.title;
        description.innerHTML = film.description;

        div.appendChild(heading);
        div.appendChild(description);
        root.appendChild(div);
    }
});