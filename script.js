const firstHalf = [-1, -2, -0.5, 2, 4, 3]
const secondHalf = [15, 20, 25, 10, 20, 25]
const year = firstHalf.concat(secondHalf)

const first6month = ['Jan', 'fev', 'mar', 'abr', 'mai', 'jun']
const second6month = ['jul', 'ago', 'set', 'out', 'nov', 'dez']
const allMonths = first6month.concat(second6month);

const ctx = document.getElementById('dynamic-chart');
const lineButton = document.getElementById('line-button');
const barButton = document.getElementById('bar-button');
const doughNutButton = document.getElementById('doughNut-button');

const red = 'rgba(255, 99, 132, 0.6)'
const blue = 'rgba(54, 162, 235, 0.6)'
const yellow = 'rgba(255, 206, 86, 0.6)'
const green = 'rgba(75, 192, 192, 0.6)'
const purple = 'rgba(153, 102, 155, 0.6)'
const orange = 'rgba(255, 159, 64, 0.6)'

const backgroundColor = [
    red, blue, yellow, green, purple, orange]

const mychart = new Chart(ctx, {
    type: 'bar',
    data: {
    labels: first6month,
    datasets: [{
        label: '% do PIB',
        data: firstHalf,
        backgroundColor: backgroundColor,
        borderWidth: 1,
        borderColor: 'lightGray'
    }]
    },
    options: {
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});

lineButton.addEventListener('click', changeLine);
barButton.addEventListener('click', changeBar);
doughNutButton.addEventListener('click', changeDoughNut);

function changeLine(){
    const updateType = 'line';
    mychart.config.type = updateType;
    mychart.update();
    console.log(updateBorder)
    
};

function changeBar(){
    const updateType = 'bar';
    mychart.config.type = updateType
    mychart.update();
   
}

function changeDoughNut(){
    const updateType = 'doughnut';
    mychart.config.type = updateType
    mychart.update();
   
}


const value1 = document.querySelector("#value1");
const value2 = document.querySelector("#value2");
const value3 = document.querySelector("#value3");
const value4 = document.querySelector("#value4");
const value5 = document.querySelector("#value5");
const value6 = document.querySelector("#value6");

value1.style.borderColor = red;
value1.style.backgroundColor = red;
value2.style.borderColor = blue;
value2.style.backgroundColor = blue;
value3.style.borderColor = yellow;
value3.style.backgroundColor = yellow;
value4.style.borderColor = green;
value4.style.backgroundColor = green;
value5.style.borderColor = purple; 
value5.style.backgroundColor = purple;
value6.style.borderColor = orange;
value6.style.backgroundColor = orange;