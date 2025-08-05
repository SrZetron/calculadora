function calculadora() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  let resultado = num1 + num2;

  document.getElementById("resultado").innerText = "O resultado é: " + resultado;

  document.getElementById("img").innerHTML = `
        <img src="https://cdn.wallapop.com/images/10420/ho/d1/__/c10420p1068844628/i5237478218.jpg?pictureSize=W640" alt="Imagem da Calculadora">
    `;
}
