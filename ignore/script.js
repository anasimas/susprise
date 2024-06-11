document.addEventListener('DOMContentLoaded', () => {
    const botaoEnviar = document.getElementById('enviar');
    let APIKey;

    async function fetchAPIKey() {
        try {
            const response = await fetch('http://localhost:3000/api/key');
            const data = await response.json();
            APIKey = data.apiKey;
            console.log(APIKey)
        } catch (error) {
            console.error('Error fetching the API key:', error);
        }
    }

    fetchAPIKey();

    botaoEnviar.addEventListener("click", () =>{
        console.log(APIKey);
        let prompt = promptBuilder();
        console.log(prompt)
        finder(prompt)
        //let resultado = finder(prompt);

        async function finder(prompt) {
        try {
            const respostaCall = await fetch(`http://localhost:3000/api/${prompt}`);
            console.log(respostaCall);

        } catch (error) {
            console.error('Error fetching the API key:', error);
        }
    }

        document.getElementById('resultado').innerHTML = respostaCall;
    });

    //função para montar o prompt
    function promptBuilder(){
        let valor = document.getElementById('opt_1').value;
        if(valor){
            valor = 'econômico';
        } 
        let horario = document.getElementById('opt_2').value;
        let refeicao = document.getElementById('opt_3').value;
        let opt3;
        if(refeicao == 1){
            opt3 = 'com refeição'
        } else {
            opt3 = 'sem refeição'
        }
        let local = document.getElementById('opt_4').value;
        let opt4;
        if(local == 1){
            opt4 = 'externamente';
        } else {
            opt4 = 'em local fechado';
        }
        let qtd = document.getElementById('qtd_atv').value;
        if(!qtd){
            swal("Ops!", "Insira um valor, ou você não quer fazer nada comigo? :(", "warning")
        };

        let prompt = `Finja que sou sua namorada e me sugira ${qtd} ideia(s) de encontro(s) ${valor}, de ${horario}, ${opt3}, que seja(m) ${opt4}`

        return prompt;
    };
});