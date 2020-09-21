document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement("button");
  let buttonText = document.createTextNode("Add Square");
  let newRow = document.createElement("row");
  newRow.className = "Row";
  let div = document.createElement("div");
  div.className = "container";
  button.appendChild(buttonText);
  document.body.appendChild(button);
  div.appendChild(newRow);
  document.body.appendChild(div);
  let i = 1;

  button.addEventListener("click", function () {
    let numericId = i++;
    let divSquare = document.createElement("div");

    divSquare.id = numericId;
    divSquare.className = "blackSquares";

    newRow.appendChild(divSquare);
    console.log("progres");

    divSquare.addEventListener("mouseover", function () {
      console.log(divSquare.id);
      5;
    });
    let divSquareTxt = document.createTextNode(divSquare.id);
    divSquare.appendChild(divSquareTxt);

    divSquare.addEventListener("click", function () {
      let bunchOfColors = [
        "#FF6633",
        "#FFB399",
        "#FF33FF",
        "#FFFF99",
        "#00B3E6",
        "#E6B333",
        "#3366E6",
      ];
      let randomColor = Math.floor(Math.random() * bunchOfColors.length);
      divSquare.style.backgroundColor = bunchOfColors[randomColor];
    });
    let empty = document.getElementById("divSquare");
    divSquare.addEventListener("dblclick", function () {
      if (divSquare.id % 2 == 0) {
        if (divSquare.nextElementSibling) {
          divSquare.nextElementSibling.remove();
        } else {
          alert("No Squares Left to the Right");
        }
      } else if (divSquare.id % 2 == 1) {
        if (divSquare.previousElementSibling) {
          divSquare.previousElementSibling.remove();
        } else {
          alert("No Squares Left Left");
        }
      }
    });
  });
});
