function tempo(request, response){
    const dynamiDate = new Date();

    responde.json({
        date: dynamiDate.toTimeString()
    })
}

export default tempo;