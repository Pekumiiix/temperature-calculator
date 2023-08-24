const degree = document.getElementById("degree")

const temperature = document.getElementById('temperature')

const answer = document.getElementById('answer')

const conversion = document.getElementById('conversion')

function solve() {
    if (temperature.value == '℃' && conversion.value == 'Kelvin (K)') {
    answer.innerHTML = (Number(degree.value) + 273.15).toFixed(2) + 'K'
    } else if (temperature.value == '℃' && conversion.value == 'Farenheit (℉)') {
        answer.innerHTML = ((Number(degree.value) * 9 / 5) + 32).toFixed(2) + '℉'
    } else if (temperature.value == 'K' && conversion.value == 'Celcius (℃)') {
        answer.innerHTML = (Number(degree.value) - 273.15).toFixed(2) + 'K'
    } else if (temperature.value == 'K' && conversion.value == 'Farenheit (℉)') {
        answer.innerHTML = ((Number(degree.value) - 273.15) * 9 / 5 + 32).toFixed(2) + '℉'
    } else if (temperature.value == '℉' && conversion.value == 'Celcius (℃)') {
        answer.innerHTML = ((Number(degree.value) - 32) * 5 / 9).toFixed(2) + '℃'
    } else if (temperature.value == '℉' && conversion.value == 'Kelvin (K)') {
        answer.innerHTML = ((Number(degree.value) - 32) * 5 / 9 + 273.15).toFixed(2) + 'K'
    } else if (temperature.value == '℃' && conversion.value == 'Celcius (℃)') {
        answer.innerHTML = degree.value + '℃'
    } else if (temperature.value == 'K' && conversion.value == 'Kelvin (K)') {
        answer.innerHTML = degree.value + 'K'
    } else if (temperature.value == '℉' && conversion.value == 'Farenheit (℉)') {
        answer.innerHTML = degree.value + '℉'
    }
}
