function step(first, buy, nani, yakunum, dokunum, gold, te) {
    if (!first){
        if (buy) {
            if (nani == 0){
                yakunum += 1
                gold -= 8
            }
            else {
                dokunum += 1
                gold -= 10
            }
        }
        else {
            if (nani == 0){
                yakunum -= 1
                gold += 4
            }
            else {
                dokunum -= 1
                gold += 8
            }
        }

        //合計の計算
        let digits = gold.toString().split('');
        let sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
        if (sum % 5 == 0) {
            //console.log("HIT!")
            if (saishute.length == 0 || te.length < saishute.length){
                saishute = te
            }
        }
    }
    if (te.length != 6){
        if (gold >= 8) {step(false, true, 0, yakunum, dokunum, gold, te.concat(0))}
        if (gold >= 10) {step(false, true, 1, yakunum, dokunum, gold, te.concat(1))}

        if (yakunum >= 1) {step(false, false, 0, yakunum, dokunum, gold, te.concat(2))}
        if (dokunum >= 1) {step(false, false, 1, yakunum, dokunum, gold, te.concat(3))}
    }
}

/*
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('今のお金は?>', (answer) => {
    saishute = []
    gold = answer
    step(true, true, -1, 0, 0, gold, [])
    console.log(saishute)
    if (saishute.length == 0) {console.log("6手以内に見つけられませんでした")}{
        saishute.forEach(element => {
            if (element == 0) {console.log("買草")}
            if (element == 1) {console.log("買毒")}
            if (element == 2) {console.log("売草")}
            if (element == 3) {console.log("売毒")}
        })
    }
})
*/

saishute = []
gold = 0
step(true, true, -1, 0, 1, gold, [])
console.log(saishute)
if (saishute.length == 0) {console.log("6手以内に見つけられませんでした")}{
    saishute.forEach(element => {
        if (element == 0) {console.log("買草")}
        if (element == 1) {console.log("買毒")}
        if (element == 2) {console.log("売草")}
        if (element == 3) {console.log("売毒")}
    })
}