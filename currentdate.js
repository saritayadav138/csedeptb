function displayCurrentDayAndTime() {
    const currentDate = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = daysOfWeek[currentDate.getDay()];
    const hours = currentDate.getHours() % 12 || 12; 
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    const ampm = currentDate.getHours() >= 12 ? "PM" : "AM";

    console.log(`Today is: ${day}.`);
    console.log(`Current time is: ${hours} ${ampm} : ${minutes} : ${seconds}`);
}

displayCurrentDayAndTime();

