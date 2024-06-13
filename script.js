function enviar() {
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
    document.getElementById('spotifyPlayer').className = 'input d-flex flex-column justify-content-center align-items-center';
    document.getElementById('spotifyPlayer').style.display = 'block';
    document.getElementById('spotifyPlayer').style.opacity = '1';
    document.getElementById('input').style.display = 'none';
    document.getElementById('input').className = 'none'; //tira o display flex do bootstrap
  }
};

function voltar() {
  document.getElementById('spotifyPlayer').className = '';
  document.getElementById('spotifyPlayer').style.display = 'none';
  document.getElementById('spotifyPlayer').style.opacity = '0';
  document.getElementById('input').style.display = 'block';
  document.getElementById('input').className = 'input d-flex flex-column justify-content-center align-items-center';
}
