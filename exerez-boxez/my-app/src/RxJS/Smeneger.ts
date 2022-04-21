import { Observable} from "rxjs";
console.log('12')
const conwerte$ = new Observable( observer =>{
    const inputOne = document.getElementById('inputOne')
    console.log('one',inputOne)
    const inputTwo = document.getElementById('inputTwo')
    console.log('two',inputTwo)

    inputOne?.addEventListener('',event =>{
        console.log(event)
    })

})
conwerte$.subscribe(value =>{
    console.log(value)
})