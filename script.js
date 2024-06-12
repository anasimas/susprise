const botaoEnviar = document.getElementById('enviar');
const botaoVoltar = document.getElementById('voltar');

function enviar() {
  let parametro = document.getElementById('opt_1').value;
  if(parametro == 1){
    document.getElementById('container').innerHTML = `
      <div class="header d-flex flex-column justify-content-center align-items-center">
        <img src="img/img.jpg">
      </div>
      <h1>Resposta errada >:c</h1>
      <div class="buttons d-flex justify-content-center align-items-center">
        <button id="voltar" onclick="voltar()">Voltar</button>
      </div>
    `
  } else {
    document.getElementById('input').innerHTML =
      `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6hdVWrV8WNCZRLUHU7Mz99?utm_source=generator&theme=0" width="100%" height="400" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <div class="buttons d-flex justify-content-center align-items-center">
        <button id="voltar" onclick="voltar()">Voltar</button>
      </div>`
  }

};

function voltar() {
    document.getElementById('container').innerHTML = `
        <div class="header d-flex flex-column justify-content-center align-items-center">
            <h1>te amo!</h1>
            <p>Feliz aniversário de noivado e dia dos namorados!</p>
        </div>
        <div class="input d-flex flex-column justify-content-center align-items-center" id="input">
            <label for="opt_1">2 reais ou um presente misterioso?</label>
            <select name="opt_1" id="opt_1">
                <option value="1">2 reais</option>
                <option value="2">Presente</option>
            </select>
            <div class="buttons d-flex justify-content-center align-items-center">
                <button id="enviar" onclick="enviar()"><i class="fa-solid fa-heart"></i></button>
            </div>
        </div>
    `
  }
