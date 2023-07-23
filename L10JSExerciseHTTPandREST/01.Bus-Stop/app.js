function getInfo() {

    const busStopID = document.querySelector("#stopId").value;
    const list = document.querySelector("ul");
    list.innerHTML = "";
    const stopName = document.querySelector("#stopName");

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${busStopID}`)
        .then(res => res.json())
        .then(busStop => {
            stopName.textContent = busStop.name;

            Object.entries(busStop.buses).map(([busNumber, timeInMinutes]) => {
                const item = document.createElement('li');
                item.textContent = `Bus ${busNumber} arrives in ${timeInMinutes} minutes`;
                list.appendChild(item);
            })
        })
        .catch(() => {
            stopName.textContent = "Error";
        });
}