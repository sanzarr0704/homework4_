const jsonLoad = () => {
    const request = new XMLHttpRequest()
    request.open = ("GET" , "https://www.breakingbadapi.com/api/charapters")
    request.setRequestHeader("content type" , "application.json")
    request.send()
    request.addEventListener("load", ()=>{
      const data = JSON .parse(request.respons)
        console.log(data)
    })
}

jsonLoad()