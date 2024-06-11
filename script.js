document.addEventListener('DOMContentLoaded', () => {
    let APIKey;

    async function fetchAPIKey() {
        try {
            const response = await fetch('http://localhost:3000/api/key');
            const data = await response.json();
            APIKey = data.apiKey;
        } catch (error) {
            console.error('Error fetching the API key:', error);
        }
    }

    fetchAPIKey();

    const botaoEnviar = document.getElementById('enviar');

    botaoEnviar.addEventListner("click", () =>{
        console.log('AAAAAAA')
        let prompt = promptBuilder();
        let resultado = finder(prompt);

        document.getElementById('resultado').innerHTML = resultado;
    });

    //função para montar o prompt
    function promptBuilder(){
        const valor = document.getElementById('opt_1').value;
        if(valor){
            valor = 'econômico';
        }
        const horario = document.getElementById('opt_2').value;
        const refeicao = document.getElementById('opt_3').value;
        let opt3;
        if(refeicao = 1){
            opt3 = 'com refeição'
        } else {
            opt3 = 'sem refeição'
        }
        const local = document.getElementById('opt_4').value;
        let opt4;
        if(local = 1){
            opt4 = 'externamente';
        } else {
            opt4 = 'em local fechado';
        }
        const qtd = document.getElementById('opt_5').value;

        let prompt = `Finja que sou sua namorada e me sugira ${qtd} ideia(s) de encontro(s) ${valor}, de ${horario}, ${refeicao}, que seja(m) ${local}`

        return prompt;
    };

    //Chamada da API
    async function finder(promptComando) {
        const output = document.getElementById('output');
        let dados;

        //console log para acompanhar qual o prompt formado
        console.log(promptComando)

        //faz a chamada para o servidor da OpenAI
        await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${APIKey}`,
            },
            body: JSON.stringify({
                //Informações da documentação da OpenAI para fazer a requisição
                model: "text-davinci-003",
                prompt: promptComando,
                max_tokens: 2048,
                temperature: 0
            })
        })
            .then((resposta) => resposta.json())
            .then((dadoRetornado) => {
                //Para buscar apenas o texto de resposta da IA
                dados = dadoRetornado.choices[0].text.trim();
            })
            .catch((erro) => {
                console.log(erro);
                swal("Ops!", "Ocorreu algum problema para obter a resposta! Tente novamente", "warning");
            })

        //console log para acompanhar qual resposta de acordo com o prompt
        console.log(dados)
        output.innerHTML = dados

        return dados;
    }
});