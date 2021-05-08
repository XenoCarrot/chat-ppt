function tempo(request, response){
    const dynamiDate = new Date();

    response.json({
        date: dynamiDate.toTimeString()
    })
}

export default tempo;