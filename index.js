export function analyseThrowsOfDice([d1, d2, d3, d4, d5]){

    let resultat;
    let amountOfEach = [0, 0, 0, 0, 0, 0];

    amountOfEach[d1]++;
    amountOfEach[d2]++;
    amountOfEach[d3]++;
    amountOfEach[d4]++;
    amountOfEach[d5]++;

    for(let i = 0; i <= 5; i++){
        if(amountOfEach[i] == 5){
            resultat = 50
        }
        
    }

    return resultat;
}