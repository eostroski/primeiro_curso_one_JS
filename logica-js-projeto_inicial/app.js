alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
  chute = prompt("Escolha um número entre 1 e 100.");
  if (chute == numeroSecreto) {
      break;    
  }
    else {
      if(chute > numeroSecreto){
        alert("O número secreto é menor que " + chute );
      }
      else { 
        alert("O número secreto é maior que " + chute );
      }
    tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí você acertou o número secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}`)


/* if (tentativas > 1){
  alert(`Isso aí você acertou o número secreto é ${numeroSecreto} com ${tentativas} tentativas`);
}
  else{
    alert(`Isso aí você acertou o número secreto é ${numeroSecreto} com ${tentativas} tentativa`);
}
 */