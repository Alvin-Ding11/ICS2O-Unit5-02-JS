document.getElementById('buttond').addEventListener('click', textchange)

function textchange() {
  document.getElementById('buttond').style.fontSize = '120%'
  document.getElementById('buttond').style.fontFamily = 'garamond, serif'
  document.getElementById('buttond').style.backgroundColor = 'red'
  document.getElementById('buttond').style.color = 'blue'
}
