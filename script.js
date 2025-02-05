function roll() {
    document.getElementById("count").innerHTML = parseInt(document.getElementById("count").innerHTML) + 1
    document.getElementById("hp").innerHTML = this.getRandomInt(32);
    document.getElementById("atk").innerHTML = this.getRandomInt(32);
    document.getElementById("def").innerHTML = this.getRandomInt(32);
    document.getElementById("spa").innerHTML = this.getRandomInt(32);
    document.getElementById("spd").innerHTML = this.getRandomInt(32);
    document.getElementById("spe").innerHTML = this.getRandomInt(32);
}



function lockin() {
    tbl = document.getElementById('lockintable');

    const tr = tbl.insertRow();
    tr.insertCell().appendChild(document.createTextNode(document.getElementById("count").innerHTML));
    tr.insertCell().appendChild(document.createTextNode(document.getElementById("pokemon").value));
    tr.insertCell().appendChild(document.createTextNode(document.getElementById("hp").innerHTML));
    tr.insertCell().appendChild(document.createTextNode(document.getElementById("atk").innerHTML));
    tr.insertCell().appendChild(document.createTextNode(document.getElementById("def").innerHTML));
    tr.insertCell().appendChild(document.createTextNode(document.getElementById("spa").innerHTML));
    tr.insertCell().appendChild(document.createTextNode(document.getElementById("spd").innerHTML));
    tr.insertCell().appendChild(document.createTextNode(document.getElementById("spe").innerHTML));
    tr.insertCell().appendChild(document.createTextNode(document.getElementById("nature").value));
    tr.insertCell().appendChild(document.createTextNode(document.getElementById("ability").value));

    roll();

    document.getElementById('lockintable') = tbl

    
}

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }