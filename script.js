const botaoEnviar = document.getElementById('enviar');
const botaoCancelar = document.getElementById('limpar');

botaoEnviar.addEventListener("click", async () => {
  let prompt = promptBuilder();
  console.log(prompt);
  await sendMessage(prompt);
});

async function sendMessage(prompt) {
  if (!prompt) return;
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer sk-proj-35X6lOMKBMTFAZV5B2nVT3BlbkFJ0LrIT6c5sAwLOEfhkD5p",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        prompt: prompt
      })
    });
    if (!response.ok) {
      throw new Error('Erro ao fazer a requisição para o ChatGPT');
    }
    const data = await response.json();
    const dados = data.choices[0].text.trim();
    console.log(dados);
  } catch (error) {
    console.log(error);
    swal("Ops!", "Ocorreu algum problema para obter a resposta! Tente novamente", "warning");
  }
}

function promptBuilder() {
  let valor = document.getElementById('opt_1').value;
  if (valor) {
    valor = 'econômico';
  }
  let horario = document.getElementById('opt_2').value;
  let refeicao = document.getElementById('opt_3').value;
  let opt3;
  if (refeicao == 1) {
    opt3 = 'com refeição'
  } else {
    opt3 = 'sem refeição'
  }
  let local = document.getElementById('opt_4').value;
  let opt4;
  if (local == 1) {
    opt4 = 'externamente';
  } else {
    opt4 = 'em local fechado';
  }
  let qtd = document.getElementById('qtd_atv').value;
  if (!qtd) {
    swal("Ops!", "Insira um valor, ou você não quer fazer nada comigo? :(", "warning")
  };

  let prompt = `Finja que sou sua namorada e me sugira ${qtd} ideia(s) de encontro(s) ${valor}, de ${horario}, ${opt3}, que seja(m) ${opt4}`

  return prompt;
};