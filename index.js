const words = ["It had been a late night.",
" To be more correct, it had been an early morning." ,
"It was now 3:00 AM and George was just getting home.",
 "He wasn't sure if it had been worth it.",
  "He was supposed to have been finished by 10:00 PM, but his boss had implored him to stay and help when it was clear they weren't going to meet the 10:00 PM target time.",
   "So, he had stayed an extra 5 hours and lost a good night's sleep for something he didn't really believe in, but he did anyway because he was afraid if he refused he might lose his job."]
const display = document.querySelector('#display')
const text = document.querySelector('#text')
const btn = document.querySelector('#btn')

let startTime;
let endTime;

const wordCount = (str) => {
    let response = str.split(" ").length
    console.log(response)
    return response;
}

const playGame = () => {
    let randomWord = [Math.floor(Math.random() * words.length)]
    display.innerText = words[randomWord]
    let date = new Date()
    startTime = date.getTime()
    btn.innerHTML = "Done"

}
const endPlay = () => {
    let date = new Date()
    endTime = date.getTime()
    let time = (endTime - startTime) / 1000
    console.log(time)

    // let totalWord = words.value
    let totalWord = text.value
    text.value = ""
    let word_Count = wordCount(totalWord)

    let speed = Math.floor((word_Count/time)*60)

    let final = "You typed total at  "+ speed +" words per minute."
    final += compare(display.innerText, totalWord)
    display.innerText = final
    


}
const compare = (str1, str2) => {

    let a = str1.split(" ")
    let b= str2.split(" ")
    let count = 0

    a.forEach(function (elem,index) {
        if(elem == b[index]){
            count++
        }
    });
    let x = (a.length - count)
    return (count +" Correct out of " + a.length +" words and the total number of errors are "+ x +" ." );

}


btn.addEventListener('click', function (){
    console.log("start button got called")
    if(this.innerText == 'Start'){
        console.log("start btn")
        text.disabled=false
        playGame()
    
    }else if(this.innerText == 'Done'){
        console.log("done btn")
        text.disabled=true
        btn.innerText = 'Start'
        endPlay()
    }

    

})
