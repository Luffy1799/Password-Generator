let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
let capAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numbers = [1,2,3,4,5,6,7,8,9,0]
let characters = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '=', '+', ':', '<', '>', '?']
let n = null


let charOn = false;
let capOn = false;
let numOn = false;

let a = document.querySelector("#capOn")
let b = document.querySelector("#charOn")
let c = document.querySelector("#numOn")
a.addEventListener('click', function() {
    capOn = a.checked;
})
b.addEventListener('click', function() {
    charOn = b.checked;
})
c.addEventListener('click', function() {
    numOn = c.checked;
})

let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")
let p4 = document.getElementById("p4")



function startPasswordGen() {
    p1.textContent = generatePass();
    p2.textContent = generatePass();
    p3.textContent = generatePass();
    p4.textContent = generatePass();

}



function generatePass() {
    let password =""

    if(charOn == true && capOn == true && numOn == true) {
        for(let p = 0; p <15; p++ ) {
            if (randomValue(4) == 0) {
                password += alphabets[randomValue(alphabets.length)];
            }
            if (randomValue(4) == 1) {
                password += capAlphabets[randomValue(capAlphabets.length)];
            }
            if (randomValue(4) == 2) {
                password += numbers[randomValue(numbers.length)];
            }
            if (randomValue(4) == 3) {
                password += characters[randomValue(characters.length)];
            }
            
        }
               
    }      

    if(charOn == true && capOn == true && numOn == false) {
        for(let p = 0; p <15; p++ ) {
            if (randomValue(3) == 0) {
                password += alphabets[randomValue(alphabets.length)];
            }
            if (randomValue(3) == 1) {
                password += capAlphabets[randomValue(capAlphabets.length)];
            }
            if (randomValue(3) == 2) {
                password += characters[randomValue(characters.length)];
            }
        }           
    }
    if(charOn == true && capOn == false && numOn == true) {
        for(let p = 0; p <15; p++ ) {
            if (randomValue(3) == 0) {
                password += alphabets[randomValue(alphabets.length)];
            }
            if (randomValue(3) == 1) {
                password += numbers[randomValue(numbers.length)];
            }
            if (randomValue(3) == 2) {
                password += characters[randomValue(characters.length)];
            }
        }           
    }
    if(charOn == false && capOn == true && numOn == true) {
        for(let p = 0; p <15; p++ ) {
            if (randomValue(3) == 0) {
                password += alphabets[randomValue(alphabets.length)];
            }
            if (randomValue(3) == 1) {
                password += capAlphabets[randomValue(capAlphabets.length)];
            }
            if (randomValue(3) == 2) {
                password += numbers[randomValue(numbers.length)];
            }
            
        }           
    }

    if(charOn == true && capOn == false && numOn == false) {
        for(let p = 0; p <15; p++ ) {
            if (randomValue(2) == 0) {
                password += alphabets[randomValue(alphabets.length)];
            }
            
            if (randomValue(2) == 1) {
                password += characters[randomValue(characters.length)];
            }

        }           
    }
    if(charOn == false && capOn == true && numOn == false) {
        for(let p = 0; p <15; p++ ) {
            if (randomValue(2) == 0) {
                password += alphabets[randomValue(alphabets.length)];
            }
            
            if (randomValue(2) == 1) {
                password += capAlphabets[randomValue(capAlphabets.length)];
            }
        }           
    }
    if(charOn == false && capOn == false && numOn == true) {
        for(let p = 0; p <15; p++ ) {
            if (randomValue(2) == 0) {
                password += alphabets[randomValue(alphabets.length)];
            }
            
            if (randomValue(2) == 1) {
                password += numbers[randomValue(numbers.length)];
            }
        }           
    }
    if(charOn == false && capOn == false && numOn == false) {
        for(let p = 0; p <15; p++ ) {
            password += alphabets[randomValue(alphabets.length)];
        }
             
    }
    
    return password;

}



function randomValue(n) {

    let number = Math.floor(Math.random()* n)
    return number
}



function randomAlphabet() {
    let alpha =null;
for(let i = 0; i < alphabets.length; i++) {
    alpha = randomValue(i)
}
return alphabets[alpha]
}

function randomCapAlphabet() {
    let beta =null;
    for(let j = 0; j < capAlphabets.length; j++) {
     beta = randomValue(j)
    }
return capAlphabets[beta]
}

function randomNumber() {
    let gamma =null;
    for(let k = 0; k < numbers.length; k++) {
        gamma = randomValue(k)
    }
    return numbers[gamma]
}

function randomCharacter() {
    let zeta =null;
    for(let l = 0; l < characters.length; l++) {
    zeta = randomValue(l)
}
return characters[zeta]
}
