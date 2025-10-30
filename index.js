export function analyseThrowsOfDice([throw1dice1, throw1dice2, throw1dice3, throw1dice4, throw1dice5],[throw2dice1, throw2dice2, throw2dice3, throw2dice4, throw2dice5]){

    let resultat1;
    let resultat2;
    let amountOfEachThrow1 = [0, 0, 0, 0, 0, 0];
    let amountOfEachThrow2 = [0, 0, 0, 0, 0, 0];

    amountOfEachThrow1[throw1dice1]++;
    amountOfEachThrow1[throw1dice2]++;
    amountOfEachThrow1[throw1dice3]++;
    amountOfEachThrow1[throw1dice4]++;
    amountOfEachThrow1[throw1dice5]++;

    amountOfEachThrow2[throw2dice1]++;
    amountOfEachThrow2[throw2dice2]++;
    amountOfEachThrow2[throw2dice3]++;
    amountOfEachThrow2[throw2dice4]++;
    amountOfEachThrow2[throw2dice5]++;

    for(let i = 0; i <= 5; i++){
        if(amountOfEachThrow1[i] == 5){
            resultat1 = 50
        }
        if(amountOfEachThrow2[i] == 5){
            resultat2 = 50
        }

        if(amountOfEachThrow1[i] == 4){
            resultat1 = 40
        }
        if(amountOfEachThrow2[i] == 4){
            resultat2 = 40
        }
    }

    return resultat1 + resultat2;
}