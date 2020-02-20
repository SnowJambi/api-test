const userAction = async () => {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    for (const film of myJson) {
        console.log(film.title);
        let div = document.createElement('div');
        let para1 = document.createElement('p');
        let para2 = document.createElement('p');
        para1.innerHTML = film.title;
        para2.innerHTML = film.description;
        let root = document.getElementById('root');
        div.appendChild(para1);
        div.appendChild(para2);
        root.appendChild(div);
    }
  }

  userAction();