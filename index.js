const answers = [
      "Certainty!",
      "I'm not so sure.",
      "Do not count on it.",
      "No doubt.",
      "Ask again later.",
      "Yes, definitely!",
      "My answer is no!",
      "you can count on it.",
      "Better not tell you now...",
      "In my opinion, yes!",
      "My sources say no!",
      "Probably.",
      "It is not possible to predict now.",
      "Good outlook.",
      "The prospects are not so good.",
      "Yes !",
      "Focus and ask again.",
      "Signs point to yes...",
]
const elementAnswers = document.querySelector("#answer")
const elementInput = document.querySelector("#inputText")
function makeQuestion(){
  if (elementInput.value == ""){
    alert("Type your question !")
    return
  }
  const totalAnswers = answers.length
  const randomNumber = Math.floor(Math.random() * totalAnswers)
  elementAnswers.innerHTML =  `<div> ${elementInput.value} </div> ${answers[randomNumber]}`
  elementInput.value =  ""
}