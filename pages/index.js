function Home(){
    return (
        <body>

            <div>

                <h1>Bem vindo ao futuro Linie.</h1>
                <p>Este é o site que será usado no futuro para fazer os chats de forma segura</p>
                <button id="button">Clica aí</button>

            </div>

            <script>
                document.getElementById("button").addEventListener('click', test)
            </script>
            
        </body>
    );
    
}

function test(){
    
    console.log("Deu certo!")
}

export default Home