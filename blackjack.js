const { HARD_TOTAL_STRATEGY, SOFT_TOTAL_STRATEGY } = require('./strategies');
const {
    GREETING,
    ACES_Q,
    WRONG_ACES_Q,
    SOFT_TOTAL_Q,
    HARD_TOTAL_Q,
    WRONG_TOTAL_Q,
    DEALER_Q,
    WRONG_DEALER_Q,
    VERDICT,
    FINISH_Q
} = require('./constants');
const rl = require('readline-sync');

const greet = () => {
    console.log(GREETING);
}

const askForAces = () => {
    let answ = rl.question(ACES_Q);
    switch (answ) {
        case 'y':
        case 'Y':
        case 'Yes':
        case 'yes':
        case 'YES':
        case 'yEs':
        case 'yeS':
        case 'YeS':
        case 'YEs':
        case 'yES': {
            console.log("\n");
            return true;
        }
        case 'n':
        case 'N':
        case 'No':
        case 'NO':
        case 'nO':
        case 'no': {
            console.log("\n");
            return false;
        }
        default: {
            console.log(WRONG_ACES_Q);
            return askForAces();
        }
    }
}

const askForTotal = (hasAces=false) => {
    if (hasAces) {
        let softTotalAnsw = rl.question(SOFT_TOTAL_Q);
        if (!isNaN(parseFloat(softTotalAnsw))) {
            softTotalAnsw = Number(softTotalAnsw);
            if (softTotalAnsw >= 2 && softTotalAnsw <= 10) {
                console.log("\n");
                return softTotalAnsw;
            }
            console.log(WRONG_TOTAL_Q);
            return askForTotal();
        } 
        console.log(WRONG_TOTAL_Q);
        return askForTotal();

    } else {
        let hardTotalAnsw = rl.question(HARD_TOTAL_Q);
        if (!isNaN(parseFloat(hardTotalAnsw))) {
            hardTotalAnsw = Number(hardTotalAnsw);
            if (hardTotalAnsw >= 4 && hardTotalAnsw <= 20) {
                console.log("\n");
                return hardTotalAnsw;
            }
            console.log(WRONG_TOTAL_Q);
            return askForTotal();
        } 
        console.log(WRONG_TOTAL_Q);
        return askForTotal();

    }
}

const askForDealersUpcard = () => {
    let dealersUpcard = rl.question(DEALER_Q);
    if (!isNaN(parseFloat(dealersUpcard))) {
        dealersUpcard = Number(dealersUpcard);
        if (dealersUpcard >= 1 && dealersUpcard <= 10) {
            console.log("\n");
            return dealersUpcard;
        }
        console.log(WRONG_DEALER_Q);
        return askForDealersUpcard();
    } 
    console.log(WRONG_DEALER_Q);
    return askForDealersUpcard();
}

const getVerdict = (hasAces, playersTotal, dealersUpcard) => {
    const dict = hasAces ? SOFT_TOTAL_STRATEGY : HARD_TOTAL_STRATEGY;
    const verdict = dict[playersTotal][dealersUpcard];

    return verdict;
}

const finish = (verdict) => {
    console.log(`\n${VERDICT}: ${verdict}\n`);

    let answ = rl.question(FINISH_Q);

    switch (answ) {
        case 'y':
        case 'Y':
        case 'Yes':
        case 'yes':
        case 'YES':
        case 'yEs':
        case 'yeS':
        case 'YeS':
        case 'YEs':
        case 'yES': {
            console.log("\n");
            init();
        }
        case 'n':
        case 'N':
        case 'No':
        case 'NO':
        case 'nO':
        case 'no':
        default: {
            console.log("\n");
            break;
        }
    }

}

function init() {
    greet();

    const hasAces = askForAces();
    const playersTotal = askForTotal(hasAces);
    const dealersUpcard = askForDealersUpcard();
    const verdict = getVerdict(hasAces, playersTotal, dealersUpcard);

    finish(verdict);
}

init();

module.exports = {
    getVerdict
};