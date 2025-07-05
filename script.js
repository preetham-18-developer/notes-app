let notescontainer = document.querySelector(".notes-container");
let createbtn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");

function shownotes() {
  notescontainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage() {
  localStorage.setItem("notes", notescontainer.innerHTML);
}

createbtn.addEventListener("click", () => {
  let inputbox = document.createElement("p");
  let img = document.createElement("img");
  inputbox.className = "input-box";
  inputbox.setAttribute("contenteditable", "true");
  img.src = "./delete.png";
  notescontainer.appendChild(inputbox).appendChild(img);
});

notescontainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "p") {
    notes = document.querySelectorAll(".input-box");
    notes.foreach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
