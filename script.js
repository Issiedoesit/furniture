

var messageLabel = document.getElementById('labelChange')
var textArea= document.getElementById('message')

function myClicked(){

    if (textArea.value ===''){
        messageLabel.style.marginTop = ''
        messageLabel.style.paddingLeft = '6%'
    }else
        {
        messageLabel.style.marginTop = '-0.7vh'
        messageLabel.style.paddingLeft = '5%'
        }

}

textArea.addEventListener('input', myClicked)
var ham = document.getElementById('ham')
var slide = document.getElementById('slide')

ham.addEventListener('click', ()=>{
    ham.classList.toggle('active')
    if (ham.classList.contains('active')){
        slide.style.top = '10vh'
        slide.style.height = '600vh'
        
    }else{
        slide.style.top = '-100vh'
        slide.style.height = '0vh'
        
    }
})


