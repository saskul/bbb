const GREETING = "\nHello, I'am The Basic Blackjack Bot. Tell me about your hand.\n";

const ACES_Q = "Do you have aces? (Y/N)\n";
const WRONG_ACES_Q = "Answer 'Yes' or 'No', or just 'y' or 'n'.\n";

const HARD_TOTAL_Q = "Enter your hand's hard total (treat Ace as 1, so a number between 4-20):\n";
const SOFT_TOTAL_Q = "Enter your hand's soft total (treat Ace as 1, so a number between 2-11):\n";
const WRONG_TOTAL_Q = "Not a valid number. Try again.\n";


const DEALER_Q = "Enter the dealer's Upcard (treat Ace as 11, so a number between 2-11):\n";
const WRONG_DEALER_Q = "Not a valid number. Try again.\n";

const VERDICT = "Verdict";
const FINISH_Q = "\nDo you want to start again? (Y/N)\n";

module.exports = {
    GREETING,
    ACES_Q,
    WRONG_ACES_Q,
    HARD_TOTAL_Q,
    SOFT_TOTAL_Q,
    WRONG_TOTAL_Q,
    DEALER_Q,
    WRONG_DEALER_Q,
    VERDICT,
    FINISH_Q
}
