// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {
    const takeOff = document.getElementById("takeoff");
    const land = document.getElementById("landing");
    const abortMission = document.getElementById("missionAbort");
    const paragraph = document.getElementById("flightStatus");
    const backgroundShuttle = document.getElementById("shuttleBackground");
    const height = document.getElementById("spaceShuttleHeight");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const rocketImage = document.getElementById("rocket");
    
    rocketImage.style.position = "absolute";
    rocketImage.style.left = 0;
    rocketImage.style.bottom = 0;

    const heightStart = 0;
    height.innerHTML = heightStart;

    takeOff.addEventListener("click", function () {
        window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (true) {
            paragraph.innerHTML = "Shuttle in flight.";
            backgroundShuttle.style.backgroundColor = '#0000ff';
            height.innerHTML = parseInt(height.innerHTML) + 10000;
        };

    land.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        paragraph.innerHTML = "The shuttle has landed.";
        backgroundShuttle.style.backgroundColor = "";
        height.innerHTML = 0;
    });

    abortMission.addEventListener("click", function() {
        window.confirm("Confirm that you want to abort the mission.");
        if (true) {
            paragraph.innerHTML = "Mission aborted.";
            backgroundShuttle.style.backgroundColor = "";
            height.innerHTML = 0;
        };
    });

    up.addEventListener("click", function() {
        height.innerHTML = parseInt(height.innerHTML) + 10000;
        let top = rocketImage.offsetTop -= 10;

        if(top > 0) {
        rocketImage.style.top = top + "px";
        }
     });

    down.addEventListener("click", function() {
        height.innerHTML = parseInt(height.innerHTML) - 10000;
        let top = rocketImage.offsetTop += 10;

        rocketImage.style.top = top + "px";
    });

    left.addEventListener("click", function() {
let moveLeft = rocketImage.offsetLeft -= 10;
rocketImage.style.left = moveLeft + "px";
    });

    right.addEventListener("click", function() {
        let moveRight = rocketImage.offsetLeft += 10;
        rocketImage.style.left = moveRight + "px";
    });


    });







});
