function roll() {
    document.getElementById("count").innerHTML = parseInt(document.getElementById("count").innerHTML) + 1
    document.getElementById("hp").innerHTML = this.getRandomInt(32);
    document.getElementById("atk").innerHTML = this.getRandomInt(32);
    document.getElementById("def").innerHTML = this.getRandomInt(32);
    document.getElementById("spa").innerHTML = this.getRandomInt(32);
    document.getElementById("spd").innerHTML = this.getRandomInt(32);
    document.getElementById("spe").innerHTML = this.getRandomInt(32);
    document.getElementById("hiddenpower").innerHTML = this.getHiddenPower(
        document.getElementById("hp").innerHTML,
        document.getElementById("atk").innerHTML,
        document.getElementById("def").innerHTML,
        document.getElementById("spa").innerHTML,
        document.getElementById("spd").innerHTML,
        document.getElementById("spe").innerHTML);
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
    tr.insertCell().appendChild(document.createTextNode(document.getElementById("hiddenpower").innerHTML));
    tr.insertCell().appendChild(document.createTextNode(document.getElementById("nature").value));
    tr.insertCell().appendChild(document.createTextNode(document.getElementById("ability").value));

    roll();

    document.getElementById('lockintable') = tbl

    
}

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getHiddenPower(hp, atk, def, spa, spd, spe) {
    let type = 0;
    if (hp % 2 == 1) {
        type += 1
    }
    if (atk % 2 == 1) {
        type += 2
    }
    if (def % 2 == 1) {
        type += 4
    }
    if (spe % 2 == 1) {
        type += 8
    }
    if (spa % 2 == 1) {
        type += 16
    }
    if (spd % 2 == 1) {
        type += 32
    }
    switch (Math.floor(type * 15 / 63)) {
        case 0: type = "Fighting"; break;
        case 1: type = "Flying"; break;
        case 2: type = "Poison"; break;
        case 3: type = "Ground"; break;
        case 4: type = "Rock"; break;
        case 5: type = "Bug"; break;
        case 6: type = "Ghost"; break;
        case 7: type = "Steel"; break;
        case 8: type = "Fire"; break;
        case 9: type = "Water"; break;
        case 10: type = "Grass"; break;
        case 11: type = "Electric"; break;
        case 12: type = "Psychic"; break;
        case 13: type = "Ice"; break;
        case 14: type = "Dragon"; break;
        case 15: type = "Dark"; break;
    }
    let power = 0;
    if (hp % 4 == 2 || hp % 4 == 3) {
        power += 1
    }
    if (atk % 4 == 2 || atk % 4 == 3) {
        power += 2
    }
    if (def % 4 == 2 || def % 4 == 3) {
        power += 4
    }
    if (spe % 4 == 2 || spe % 4 == 3) {
        power += 8
    }
    if (spa % 4 == 2 || spa % 4 == 3) {
        power += 16
    }
    if (spd % 4 == 2 || spd % 4 == 3) {
        power += 32
    }
    power = Math.floor(power * 40 / 63) + 30
    return type + " " + power
  }