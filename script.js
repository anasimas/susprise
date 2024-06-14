function enviar() {
  let container = document.getElementById('container');
  let parametro = document.getElementById('opt_1').value;
  if (parametro == 1) {
    swal({
      title: "Resposta errada >:c",
      text: "Tente novamente",
      icon: "img/img.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "nova"
    });
  } else {
    container.style.opacity = '0'
    setTimeout(function () {
      document.getElementById('spotifyPlayer').className = 'input d-flex flex-column justify-content-center align-items-center';
      document.getElementById('spotifyPlayer').style.display = 'block';
      document.getElementById('spotifyPlayer').style.opacity = '1';
      document.getElementById('input').style.display = 'none';
      document.getElementById('input').className = 'none'; //tira o display flex do bootstrap

      document.getElementById('texto').innerText = "Esse é o mini disco virtual! Um presente com músicas que me lembram bons momentos nossos, por diferentes razões. Você é especial demais."
      setTimeout(function () {
        container.style.opacity = '1'
      }, 100)
    }, 500)
  }
};

function voltar() {
  let container = document.getElementById('container');
  container.style.opacity = '0'
  setTimeout(function () {
    document.getElementById('spotifyPlayer').className = '';
    document.getElementById('spotifyPlayer').style.display = 'none';
    document.getElementById('spotifyPlayer').style.opacity = '0';
    document.getElementById('input').style.display = 'block';
    document.getElementById('input').className = 'input d-flex flex-column justify-content-center align-items-center';
    document.getElementById('texto').innerText = "Feliz aniversário de noivado e dia dos namorados!"

    setTimeout(function () {
      container.style.opacity = '1'
    }, 100)
  }, 500)
}

let select = document.getElementById('opt_2');

function seletor(value) {
  let element = Number(value);
  const player = document.getElementById('player');
  player.style.opacity = '0';
  setTimeout(function () {
    switch (element) {
      case 1:
        player.setAttribute("src", 'https://open.spotify.com/embed/playlist/6hdVWrV8WNCZRLUHU7Mz99?utm_source=generator');
        break;
      case 2:
        player.setAttribute("src", 'https://open.spotify.com/embed/playlist/4KIBvaVQHnbhD7BVXGNn23?utm_source=generator'); // romanticas
        break;
      case 3:
        player.setAttribute("src", 'https://open.spotify.com/embed/playlist/49LUzMSXqUzvqamVgMVjc0?utm_source=generator'); // espaço
        break;
      case 4:
        player.setAttribute("src", 'https://open.spotify.com/embed/playlist/3cz70PGZE26qE6mlswHnqs?utm_source=generator'); // cantar no carro
        break;
      case 5:
        player.setAttribute("src", 'https://open.spotify.com/embed/playlist/1vsPbo3RcXK2pE4pprB1V5?utm_source=generator'); // nossas divas pops
        break;
      default:
        console.log("Valor inválido");
    }
    setTimeout(function () {
      player.style.opacity = '1';
    }, 100);
  }, 500);
}



