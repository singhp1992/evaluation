
// window.onload = function() {
//     var canvas = document.getElementById("canvas"),
//     context = canvas.getContext("2d"),
//     width = canvas.width = window.innerWidth,
//     height = canvas.height = window.innerHeight;

const colors = [
    {
        color: "red!",
        chance: 0.53
    },
    {
        color: "yellow",
        chance: 0.28
    },
    {
        color: "green",
        chance: 0.19
    }
];

const red = 0.53,
    yellow = 0.28,
    green = 0.19;

document.body.addEventListener("click", function () {
    const rand = Math.random(),
        color = getColor(rand);

    console.log(rand);
    console.log("you picked " + colors)
});

function getColor(rand) {
    for (var i = 0; i < colors.length; i++) {
        var color = colors[i];
        if (rand < colors.chance) {
            return color.color;
        }
        rand -= color.chance;
    }
}

//}