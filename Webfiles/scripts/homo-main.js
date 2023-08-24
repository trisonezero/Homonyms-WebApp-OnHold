/*
Title: Questions js
Date Created: 8/22/2023
Last Edit: 8/23/2023
*/

const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");

let imgPairNames = ["Orange", "Bark", "Bat", "Cool", "Fall", "Fly", "Letter", "Nail", "Park", "Right", "Ring", "Rock", "Row", "Ruler", "Saw", "Scale", "Sink", "Trunk", "Watch", "Wave"];
let imgPairs = [];

for (let i = 0; i < imgPairNames.length; i++) {
    src1 = imgPairNames[i].toLowerCase + "1";
    src2 = imgPairNames[i].toLowerCase + "2";
    imgPairs.push(new ImgPair(imgPairNames[i], src1, src2));
}

const img1 = document.createElement("img");
//img1.src = imgPairs[0].getSrc1();
const img2 = document.createElement("img");
//img2.src = imgPairs[0].getSrc2();

h2.onclick = function () {
    h1.style.border = 0;
    h1.textContent = "Choose the image that best describes the following words...";
    h1.style.fontSize = 45;
    h2.textContent = "Continue";

    h2.onclick = function () {
        h1.style.visibility = "hidden";
        h2.textcontent = "test";
        h2.style.
        document.body.appendchild(img1);
        document.body.appendchild(img2);
        

        //for (let i = 1; i < imgpairs.length; i++) {
        //    img
        //}
    }
}


function ImgPair(name, src1, src2) {
    this.name = name;
    this.src1 = src1;
    this.src2 = src2;

    function getName() {
        return this.name;
    }

    function getSrc1() {
        return this.src1;
    }

    function getSrc2() {
        return this.src2;
    }
}

