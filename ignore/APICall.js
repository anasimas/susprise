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