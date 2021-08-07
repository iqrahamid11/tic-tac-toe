///selection all required elements
const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerx"),
selectOBtn = selectBox.querySelector(".playero"),
playBoard = document.querySelector(".play-board"),
allBox = document.querySelectorAll("section span"),
players = document.querySelector(".players");

window.onload = () => { //once window loaded
    for(let i=0; i <allBox.length; i++){ ///add onclick attribute in all available section's span
        allBox[i].setAttribute("onclick", "clickedBox(this)")
    }

    selectXBtn.onclick = () =>{
        selectBox.classList.add("hide"); //hide the select box on playerx button clicked
        playBoard.classList.add("show"); //show the playboard section on playerx button clicked
    }  
      selectOBtn.onclick = () =>{
        selectBox.classList.add("hide"); //hide the select box on playero button clicked
        playBoard.classList.add("show"); //show the playboard section on playero button clicked
        players.setAttribute("class","players active player"); //adding three class name in player element
    }
}

let playerXIcon = "fas fa-times"; //class name of fontawesome cross icon
let playerOIcon = "far fa-circle"; //class name of fontawesome cross icon


// function clickedBox(element){
//     if(players.classList.contains("player")){
//         element.innerHTML = `<i class="${playerXIcon}"></i>`;
//     }else{
//         element.innerHTML = `<i class="${playerOIcon}"></i>`;

//     }
//     console.log(element);
//   }


//user click function
 function clickedBox(element){
     console.log(element);
   if(players.classList.contains("players")){ //if players elememnt has contains .player
       element.innerHTML = `<i class= "${playerOIcon}"></i>`; //adding cross icon tag inside user clicked element
       players.classList.add("active");
    }else{
       element.innerHTML = `<i class= "${playerXIcon}"></i>`; //adding circle icon tag inside user clicked element
       players.classList.add("active")
    }
    element.style.pointerEvents = "none";
 }