let popup = document.querySelector('#popupId')

let button = document.querySelector('#inputBtn')

let imgDiv = document.querySelector('#imgDiv')

let savedNames = []

const setStorage = (name) => {
    localStorage.setItem('name', JSON.stringify(name))
}

const getStorage = () => {                          // function that get savedNames array from localStorage 
    let ls = JSON.parse(localStorage.getItem('name'))
    if(!ls){                                        // if there isn´t something there, Hejpa, and Dejpa will be saved at Local Storage
      savedNames.push('Hejpa', 'Dejpa')
      setStorage(savedNames)
    }

    return  JSON.parse(localStorage.getItem('name'))
  }

document.onload =  savedNames = getStorage() 

const createChild = (name) => { 

    let newH1 = document.createElement("H1")
    let text = !savedNames.includes(name) ? document.createTextNode(`Welcome ${name}`) : document.createTextNode(`Welcome back ${name}`) 
    
    newH1.appendChild(text)
    newH1.classList.add("popH1")
    imgDiv.appendChild(newH1);

     setTimeout(() => {
        newH1.remove()
   }, 4000); 
}

button.addEventListener("click", (e) => {           // eventListener that targets the button
  e.preventDefault()
  let inputName = e.target.form[0].value;           // the input fields value
            
  if (inputName) {                                    //if the value of the input field is truthy 
    createChild(inputName);                           // send the value to the created H1 element

    if(!savedNames.includes(inputName)){
      savedNames.push(inputName);                     // + push the value to the end of the created Array
    }
                                                    
    setStorage(savedNames); // + 
    popup.remove();
  }
 
});










