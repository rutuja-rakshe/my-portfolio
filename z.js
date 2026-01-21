// A simple script to add a greeting based on the time of day
document.addEventListener('DOMContentLoaded', () => {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) greeting = "Good Morning!";
    else if (hour < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";

    console.log(`${greeting} Welcome to my portfolio site.`);
});