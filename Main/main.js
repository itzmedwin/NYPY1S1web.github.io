
function getTimeOfDay() {
    const currentHour = new Date().getHours();

    if (currentHour >= 0 && currentHour < 12) {
        return "Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
        return "Afternoon";
    } else if (currentHour >= 17 && currentHour < 23.59) {
        return "Evening";
    } else {
        return "unknown";
    }
}

if (userInfo.cookies.agreed){
    Collect(user.data)
}
else{
    Collect(user.data)
}
