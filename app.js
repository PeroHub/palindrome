let enter = document.getElementById("enter")
let submit = document.getElementById("submit")
let para = document.querySelector(".inset")
let span = document.querySelector(".span")
let verse = document.querySelector(".reverse")

let correct = document.querySelector(".correct")

// let charact;




submit.addEventListener('click', (e) => {
    let text = enter.value.trim().replace(/[^a-zA-Z ]/g, "")
    // text.replace(/[^a-zA-Z ]/g, "")
    
    e.preventDefault();
    
    if(text == ""){
        span.textContent = "Value cannot be empty"
        
        
        setTimeout(() => {
            span.textContent = ""
        }, 2000)
        
    }else {
        para.textContent += text

        function reset() {
            setTimeout(() => {
                para.textContent = "";
                verse.textContent = "";
                correct.textContent = "";
            }, 3000)
        }

        reset()

        cal = para.textContent 
        
        
        function reverse(s){
            return [...s].reverse().join("");
        }
        
        verse.textContent += reverse(text)
        let rep = verse.textContent

        function check(){
            console.log(cal)
            console.log(rep)
            cal === rep ? correct.textContent = "Wohoo you got it right!": correct.textContent = "Not a palindrome try again";
        }

        check()
        
    }
})



