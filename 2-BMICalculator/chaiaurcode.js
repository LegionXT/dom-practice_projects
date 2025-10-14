//Task1- how to get the values from input using events

const form = document.querySelector("form")
//need to stop the default action of the form(like, when a form gets submitted, it is either done through posttype or gettype, due to which its values goes to the url, need to stop this)

// this usecase will give you empty value.
// const height =parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function (e){
    e.preventDefault();    //this prevents the form from submitting .
    //Now need values -
    //  document.querySelector('#height').value  
    //simply we get the value of height(but it string, therefore , parseInt )
    const height =parseInt(document.querySelector('#height').value)
    const weight =parseInt(document.querySelector('#weight').value)
    const result =document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML =`Enter a valid height ${height}`;
    }
    if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML =`Enter a valid weight ${weight}`
    }
    else{
        const bmi = (weight / ((height*height) /10000)).toFixed(2)

        //result-
        result.innerHTML=`<span>${bmi}</span>`
    }
})
