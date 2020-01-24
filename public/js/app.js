
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) =>{
  const location  = search.value
  messageOne.innerText = 'Loading...'
  messageTwo.innerText = ''


  fetch(`/weather?address=${location}`).then((response) =>{
  response.json().then((data)=>{
    if(data.error){
      console.log(data.error)
      messageTwo.innerText = data.error
    }else{
      console.log(data.location)
      console.log(data.forecast)
      messageOne.innerText = data.location
      messageTwo.innerText = data.forecast
    }
  })
})

  e.preventDefault()
})


