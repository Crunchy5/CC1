export function analyseThrowsOfDice([throw1dice1, throw1dice2, throw1dice3, throw1dice4, throw1dice5],[throw2dice1, throw2dice2, throw2dice3, throw2dice4, throw2dice5]){

    let result1 = 0;
    let result2 = 0;

    let amountOfEachThrow1 = [0, 0, 0, 0, 0, 0];
    let amountOfEachThrow2 = [0, 0, 0, 0, 0, 0];

    amountOfEachThrow1[throw1dice1-1]++;
    amountOfEachThrow1[throw1dice2-1]++;
    amountOfEachThrow1[throw1dice3-1]++;
    amountOfEachThrow1[throw1dice4-1]++;
    amountOfEachThrow1[throw1dice5-1]++;

    amountOfEachThrow2[throw2dice1-1]++;
    amountOfEachThrow2[throw2dice2-1]++;
    amountOfEachThrow2[throw2dice3-1]++;
    amountOfEachThrow2[throw2dice4-1]++;
    amountOfEachThrow2[throw2dice5-1]++;

    let serie1 = 0;
    let serie2 = 0;

    for(let i = 0; i <= 5; i++){

        //yams
        if(amountOfEachThrow1[i] == 5){
            result1 = 50
        }
        if(amountOfEachThrow2[i] == 5){
            result2 = 50
        }

        //square
        if(amountOfEachThrow1[i] == 4){
            result1 = 35
        }
        if(amountOfEachThrow2[i] == 4){
            result2 = 35
        }

        //full or brelan
        if(amountOfEachThrow1[i] == 3){
            for(let j = 0; j <= 5; j++){
                if(amountOfEachThrow1[j] == 2){
                    //full
                    result1 = 30
                }
                if(amountOfEachThrow1[j] == 1){
                    //brelan
                    result1 = 28
                }
            }
        }
        if(amountOfEachThrow2[i] == 3){
            for(let j = 0; j <= 5; j++){
                if(amountOfEachThrow2[j] == 2){
                    //full
                    result2 = 30
                }
                if(amountOfEachThrow2[j] == 1){
                    //brelan
                    result2 = 28
                }
            }
        }

        //serie
        if(amountOfEachThrow1[i] == 1){
            serie1++;
        }
        if(amountOfEachThrow2[i] == 1){
            serie2++;
        }
        
        
    }

    if((serie1 == 5) && (amountOfEachThrow1[5] == 0)){
        result1 = 40;
    }
    if((serie2 == 5) && (amountOfEachThrow2[5] == 0)){
        result2 = 40;
    }

    //if a result still equal 0 it's a chance
    if(result1 == 0){
        result1 = throw1dice1 + throw1dice2 + throw1dice3 + throw1dice4 + throw1dice5;
    }
    if(result2 == 0){
        result2 = throw2dice1 + throw2dice2 + throw2dice3 + throw2dice4 + throw2dice5;
    }

    return result1 + result2;
}