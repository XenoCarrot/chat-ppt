function Home(){
    return (
        <div>

            <h1>Bem vindo ao futuro Linie.</h1>
            <p>Este é o site que será usado no futuro para fazer os chats de forma segura</p>
            <button id="button">Clica aí</button>

        </div>
    );
    document.getElementById("button").addEventListener('click', test);
}

function test(){
    
    console.log("Deu certo!")
}

export default Home