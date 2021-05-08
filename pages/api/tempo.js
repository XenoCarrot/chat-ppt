function tempo(request, response){
    const dynamiDate = new Date();

    responde.json({
        date: dynamiDate.toGMTString()
    })
}

export default tempo;