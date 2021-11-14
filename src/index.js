
    document.querySelector("#btn").addEventListener('click',function(){                   
        navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{
            const videoElement=document.querySelector("#video")
            videoElement.srcObject=stream
        }).catch(error=>{alert("camera não encontrada")})
    }) 
    document.querySelector("#btnexit").addEventListener('click',function(){ 
        const win=require("./CreateWindow.js")
        win.hide()

    }) 
