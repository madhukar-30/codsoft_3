// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function displays the values
function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and returns the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

// Snowfall animation
document.addEventListener('DOMContentLoaded', function() {
    const snowBackground = document.querySelector('.snow-background');

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Random position and animation duration
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;

        snowBackground.appendChild(snowflake);

        // Remove the snowflake after it falls
        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    setInterval(createSnowflake, 200);
});
