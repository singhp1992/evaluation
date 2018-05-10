const prizes = [
    {
        prize:"nothing!",
        chance: 0.5
    },
    {
        prize: "a gold piece!",
        chance: 0.25
    },
    {
        prize: "a treasure chest!",
        chance: 0.07
    },
    {
        prize: "poison!",
        chance: 0.08
    },
    {
        prize: "food!",
        chance: 0.5
    }
];

document.body.addEventListener("click", function(){
    const rand = Math.random(),
        prize = getPrize(rand);
    
    console.log(rand);
    console.log("You won " + prize);
})

function getPrize(rand) {
    for(const i= 0; i < prizes.length; i++) {
        const prize = prizes[i];
        if(rand < prize.chance) {
            return prize.prize;
        }
        rand -= prize.chance;
    }
}