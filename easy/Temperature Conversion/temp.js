const textBox = document.getElementById(`textBox`);
const toFahrenheit = document.getElementById(`toFahrenheit`);
const toCelcius = document.getElementById(`toCelcius`);
const result = document.getElementById(`result`);

let temp;

function convert() {
    if (toFahrenheit.checked)
    {
        temp = textBox.value;
        temp = Number(temp);
        temp = temp*9/5 + 32;
        result.textContent = temp.toFixed(1) + `°F`; // for .1 precision
    } else if (toCelcius.checked)
    {
        temp = textBox.value;
        temp = Number(temp);
        temp = (temp-32)*5/9;
        result.textContent = temp.toFixed(1) + `°C`; // for .1 precision
    } else
    {
        result.textContent = `select a unit`
    }
}