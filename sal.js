let salariobruto = window.prompt("Qual é o seu salário bruto?")
let inss
const salarioliquido = salariobruto - inss


if(salariobruto == 1212.00){
inss = salariobruto*0.05
}
if (salariobruto == 1212.01  <=  2427.35){
inss = salariobruto*0.09
}

if (salariobruto == 2427.36  <=  3641.03){
inss = salariobruto*0.12
}

if (salariobruto == 3641.04 <=  7087.22){
result = salariobruto *0.14
}
if (salariobruto > 7087.23){
inss = 828.39
}
console.log(inss)

console.log(salarioliquido)
