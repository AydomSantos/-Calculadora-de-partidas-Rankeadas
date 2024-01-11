function calculaRank(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel = "";

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }

  return `O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

let resultado = calculaRank(70, 20);
console.log(resultado);

// Em POO

class Rank {
  constructor(vitorias, derrotas) {
    this.vitorias = vitorias;
    this.derrotas = derrotas;

    this.saldoVitorias = this.calcularSaldoVitorias();
    this.nivel = this.calculaRank();
  }

  calcularSaldoVitorias() {
    return this.vitorias - this.derrotas;
  }

  calculaRank() {
    if (this.vitorias < 10) {
      return "Ferro";
    } else if (this.vitorias >= 11 && this.vitorias <= 20) {
      return "Bronze";
    } else if (this.vitorias >= 21 && this.vitorias <= 50) {
      return "Prata";
    } else if (this.vitorias >= 51 && this.vitorias <= 80) {
      return "Ouro";
    } else if (this.vitorias >= 81 && this.vitorias <= 90) {
      return "Diamante";
    } else if (this.vitorias >= 91 && this.vitorias <= 100) {
      return "Lendário";
    } else if (this.vitorias >= 101) {
      return "Imortal";
    }
  }

  mostraResultado() {
    return `O Herói tem saldo de ${this.saldoVitorias} e está no nível de ${this.nivel}`;
  }
}

// Exemplo de uso


const calculadora = new Rank(70, 20);
let res= calculadora.mostraResultado(); 
console.log(res);

