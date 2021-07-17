//CREATE 

const mainParagraph = document.querySelector(".paragraph");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");


let currentFontSize = 30;

// FUNCTIONS

/*const changeSize = () => {


mainParagraph.style.fontSize = "50px"; 

}
TEST 1
---------------------------
TEST 2
const makeBigger = ()=> {

    mainParagraph.style.fontSize = "45px";
    counter++;
    
    if(counter == 2) {

      
        mainParagraph.style.fontSize = "50px";
        counter++;
    }
    if(counter == 3) {

        mainParagraph.style.fontSize = "55px";
        counter++;

    }
    if(counter == 4) {

        mainParagraph.style.fontSize = "60px";
      counter=0;

    }
console.log(mainParagraph.style.fontSize)
console.log(counter)

  }
 

  const modifyFontSize = () => {

    function increaseFontSizeBy1px() {
        const  mainParagraph = document.querySelector(".paragraph");
        var style = window.getComputedStyle(mainParagraph, null).getPropertyValue('font-size');
        var currentSize = parseInt(style);
        currentSize++;
        document.getElementById('b').style.fontSize = currentSize.toString();
    }

  } */

const largerFontSize = () => {
if(currentFontSize >= 40){
    currentFontSize = 40;
    alert("maximum font size achieved")

}else {

currentFontSize += 2 ;
mainParagraph.style.fontSize = `${currentFontSize}px`
    }
}


const smallerFontSize = () => {
    if(currentFontSize <= 20 ) {
    currentFontSize = 20;
    alert("minimum font size achieved")

    }else {
    currentFontSize -= 2 ;
    mainParagraph.style.fontSize = `${currentFontSize}px`
        }
    }
//LISTENERS 

plusBtn.addEventListener("click",largerFontSize);

minusBtn.addEventListener("click",smallerFontSize);



