const tempC = Number.parseFloat(prompt(" введите температуру в градусах Цельсия: "))
console.log(tempC)
const tempF = (tempC * 9 / 5 + 32)
alert (`Цельсий: ${tempC}, Фаренгейт: ${tempF.toFixed(2)}`)