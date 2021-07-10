const textArea=document.getElementById("note");
const tilesDiv=document.getElementById("tiles-div");

const modal= document.getElementById("simple-modal");
const closeModalBtn=document.getElementsByClassName("close-btn")[0];
var modalContent=document.querySelector(".modal-content p");

closeModalBtn.onclick = ()=>{
    modal.style.display="none";
}

window.onclick= (event)=>{
    if(event.target==modal){
        modal.style.display="none";
    }
}


document.getElementById("submit-btn").addEventListener("click", ()=>{
    if(textArea.value !==""){
    let tile=tileCreation();
    tilesDiv.appendChild(tile);
    textArea.value="";
    }else{
        alert("Please enter note");
    }

});

function tileCreation(){
    let tile= document.createElement("div");
    tile.setAttribute("class", "tiles");
    tile.style.padding="7px";
    tile.style.backgroundColor="#f5f2f2";
    tile.style.border="3px solid rgb(81, 180, 81)";
    tile.style.textAlign="left";
    tile.style.height="150px";
    tile.style.boxShadow="0px 5px 5px 5px rgb(37 78 39 / 98%)";
    tile.style.textAlign="center";

    let textContainer=document.createElement("div");
    textContainer.innerHTML=textArea.value;
    textContainer.style.padding="4px";
    textContainer.style.margin="3px";
    textContainer.style.overflow="clip";
    textContainer.style.height="115px";
    tile.appendChild(textContainer);


    btn=showButton();
    tile.appendChild(btn);

    return tile;
}

function showButton(){
    let showBtn=document.createElement("button");
    showBtn.setAttribute("class","expand-btn");
    showBtn.style.backgroundColor="rgb(81, 180, 81)";
    showBtn.style.color="white";
    showBtn.style.fontFamily=" 'Courier New', Courier, monospace";
    showBtn.innerHTML="Expand";

    showBtn.onclick= (e)=>{
        modalContent.innerHTML=e.currentTarget.parentNode.firstChild.innerHTML;
        modal.style.display="block";
        console.log(e.currentTarget.parentNode.firstChild.innerHTML);
        
    }



    return showBtn;
}
