// Função utilitária para pegar número (ou null se inválido)
function num(id) {
  const el = document.getElementById(id);
  const v = el.value.trim();
  if (v === "") return null;
  return Number(v);
}

function out(id, msg) {
  document.getElementById(id).textContent = msg;
}

// 1) Saudação com prompt
function ex1() {
  const nome = prompt("Qual é o seu nome?");
  if (!nome) {
    out("out1", "Operação cancelada.");
    return;
  }
  out("out1", `Olá, ${nome}! Seja bem-vindo(a)!`);
}

// 2) Soma
function ex2() {
  const a = num("ex2a"), b = num("ex2b");
  if (a === null || b === null) return out("out2", "Preencha os dois números.");
  out("out2", `Soma = ${a + b}`);
}

// 3) Subtração
function ex3() {
  const a = num("ex3a"), b = num("ex3b");
  if (a === null || b === null) return out("out3", "Preencha a e b.");
  out("out3", `a − b = ${a - b}`);
}

// 4) Multiplicação
function ex4() {
  const a = num("ex4a"), b = num("ex4b");
  if (a === null || b === null) return out("out4", "Preencha os dois valores.");
  out("out4", `Multiplicado = ${a * b}`);
}

// 5) Divisão com verificação de zero
function ex5() {
  const a = num("ex5a"), b = num("ex5b");
  if (a === null || b === null) return out("out5", "Preencha dividendo e divisor.");
  if (b === 0) return out("out5", "Erro: divisão por zero.");
  out("out5", `Quociente = ${a / b}`);
}

// 6) Sucessor
function ex6() {
  const a = num("ex6a");
  if (a === null) return out("out6", "Informe um número.");
  out("out6", `Sucessor: ${a + 1}`);
}

// 7) Antecessor
function ex7() {
  const a = num("ex7a");
  if (a === null) return out("out7", "Informe um número.");
  out("out7", `Antecessor: ${a - 1}`);
}

// 8) Área retângulo
function ex8() {
  const base = num("ex8a"), altura = num("ex8b");
  if (base === null || altura === null) return out("out8", "Preencha base e altura.");
  out("out8", `Área = ${base * altura}`);
}

// 9) Área triângulo
function ex9() {
  const base = num("ex9a"), altura = num("ex9b");
  if (base === null || altura === null) return out("out9", "Preencha base e altura.");
  out("out9", `Área = ${(base * altura) / 2}`);
}

// 10) Área quadrado
function ex10() {
  const lado = num("ex10a");
  if (lado === null) return out("out10", "Informe o lado.");
  out("out10", `Área = ${lado * lado}`);
}

// 11) Área círculo (usa raio)
function ex11() {
  const r = num("ex11a");
  if (r === null) return out("out11", "Informe o raio.");
  out("out11", `Área = ${(Math.PI * r * r).toFixed(4)}`);
}

// 12) Média de 3 notas
function ex12() {
  const n1 = num("ex12a"), n2 = num("ex12b"), n3 = num("ex12c");
  if (n1 === null || n2 === null || n3 === null) return out("out12", "Informe as três notas.");
  out("out12", `Média = ${((n1 + n2 + n3) / 3).toFixed(2)}`);
}

// 13) Dobro de inteiro
function ex13() {
  const n = num("ex13a");
  if (n === null) return out("out13", "Informe um inteiro.");
  out("out13", `Dobro = ${n * 2}`);
}

// 14) Parte inteira de real
function ex14() {
  const n = num("ex14a");
  if (n === null) return out("out14", "Informe um número.");
  out("out14", `Parte inteira = ${Math.trunc(n)}`);
}

// 15) IMC
function ex15() {
  const peso = num("ex15a"), altura = num("ex15b");
  if (peso === null || altura === null) return out("out15", "Informe peso e altura.");
  if (altura === 0) return out("out15", "Altura não pode ser zero.");
  const imc = peso / (altura * altura);
  let classe;
  if (imc < 18.5) classe = "Abaixo do peso";
  else if (imc < 25) classe = "Peso normal";
  else if (imc < 30) classe = "Sobrepeso";
  else classe = "Obesidade";
  out("out15", `IMC = ${imc.toFixed(2)} (${classe})`);
}

// 16) Preço com 10% de desconto
function ex16() {
  const nome = document.getElementById("ex16a").value.trim();
  const preco = num("ex16b");
  if (!nome || preco === null) return out("out16", "Informe produto e preço.");
  const final = preco * 0.9;
  out("out16", `Produto: ${nome} • Preço com 10% de desconto: R$ ${final.toFixed(2)}`);
}

// 17) Média das idades
function ex17() {
  const a1 = num("ex17a1"), a2 = num("ex17a2"), a3 = num("ex17a3");
  if (a1 === null || a2 === null || a3 === null) return out("out17", "Informe as três idades.");
  out("out17", `Média das idades = ${((a1 + a2 + a3) / 3).toFixed(2)} anos`);
}

// 18) Metros para cm e mm
function ex18() {
  const m = num("ex18a");
  if (m === null) return out("out18", "Informe o valor em metros.");
  out("out18", `${m} m = ${m * 100} cm = ${m * 1000} mm`);
}

// 19) Hipotenusa usando Pitágoras
function ex19() {
  const b = num("ex19a"), h = num("ex19b");
  if (b === null || h === null) return out("out19", "Informe os dois catetos.");
  const hip = Math.hypot(b, h); // sqrt(b^2 + h^2)
  out("out19", `Hipotenusa = ${hip.toFixed(4)}`);
}
