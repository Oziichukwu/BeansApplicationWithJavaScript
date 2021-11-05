document.addEventListener("DOMContentLoaded", ()=>{

    let registerObject = {}

    // button element
    let button = document.getElementsByClassName('register_btn')[0]
    button.addEventListener("click", ()=> console.log(registerObject))

    //input fields
    function handleInputChange(e){
        registerObject = {...registerObject,[e.target.name]: e.target.value}

    }


    let inputFields = document.getElementsByTagName('input')
        for (let i =0; i < inputFields.length; i++){
            inputFields[i].addEventListener('input', (e) => handleInputChange(e))

             //Array.from(inputFields).forEach((inputField) => inputField.addEventListener('input', (e) => handleInputChange(e)))
        }
    })

