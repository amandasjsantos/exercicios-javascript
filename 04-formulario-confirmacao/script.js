function myFunction() {
  let text;
  
  if (confirm("Tem certeza que quer salvar?") == true) {
    text = "Salvo com sucesso!";
  } else {
    text = "Cancelado.";
  }
  document.getElementById("demo").innerHTML = text;
}
