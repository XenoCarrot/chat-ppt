function tempo(request, response){
    const dynamiDate = new Date();
    alert(request.method);
    response.json({
        date: dynamiDate.toTimeString()
    })
}

export default tempo;