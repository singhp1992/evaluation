const colors = [
    {
        person: "Student 1",
        color: "red",
        chance: 0.53
    },
    {
        person: "Student 2",
        color: "yellow",
        chance: 0.28
    },
    {
        person: "Student 3",
        color: "green",
        chance: 0.19
    }
];

function getColor(random) {
    for (var i = 0; i < colors.length; i++) {
        var color = colors[i];
        if (random < color.chance) {
            return color.color;
        }
        random -= color.chance;
    }
}

function randomizer() {
    const random = Math.random(),
        color = getColor(random);

    console.log(random);
    console.log("pick a " + color + " student!");
}

//adjust the percentages of students 
//randomization prin same 






