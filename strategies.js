const HIT = "HIT";
const STAND = "STAND";
const DOUBLE = "DOUBLE";

const HARD_TOTAL_STRATEGY = {
    2: {
        2: HIT,
        3: HIT,
        4: HIT,
        5: HIT,
        6: HIT,
        7: HIT,
        8: HIT,
        9: HIT,
        10: HIT,
        11: HIT
    },
    3: {
        2: HIT,
        3: HIT,
        4: HIT,
        5: HIT,
        6: HIT,
        7: HIT,
        8: HIT,
        9: HIT,
        10: HIT,
        11: HIT
    },
    4: {
        2: HIT,
        3: HIT,
        4: HIT,
        5: HIT,
        6: HIT,
        7: HIT,
        8: HIT,
        9: HIT,
        10: HIT,
        11: HIT
    },
    5: {
        2: HIT,
        3: HIT,
        4: HIT,
        5: HIT,
        6: HIT,
        7: HIT,
        8: HIT,
        9: HIT,
        10: HIT,
        11: HIT
    },
    6: {
        2: HIT,
        3: HIT,
        4: HIT,
        5: HIT,
        6: HIT,
        7: HIT,
        8: HIT,
        9: HIT,
        10: HIT,
        11: HIT
    },
    7: {
        2: HIT,
        3: HIT,
        4: HIT,
        5: HIT,
        6: HIT,
        7: HIT,
        8: HIT,
        9: HIT,
        10: HIT,
        11: HIT
    },
    8: {
        2: HIT,
        3: HIT,
        4: HIT,
        5: HIT,
        6: HIT,
        7: HIT,
        8: HIT,
        9: HIT,
        10: HIT,
        11: HIT
    },
    9: {
        2: DOUBLE,
        3: DOUBLE,
        4: DOUBLE,
        5: DOUBLE,
        6: HIT,
        7: HIT,
        8: HIT,
        9: HIT,
        10: HIT,
        11: HIT
    },
    10: {
        2: DOUBLE,
        3: DOUBLE,
        4: DOUBLE,
        5: DOUBLE,
        6: DOUBLE,
        7: DOUBLE,
        8: DOUBLE,
        9: HIT,
        10: HIT,
        11: DOUBLE
    },
    11: {
        2: DOUBLE,
        3: DOUBLE,
        4: DOUBLE,
        5: DOUBLE,
        6: DOUBLE,
        7: DOUBLE,
        8: DOUBLE,
        9: DOUBLE,
        10: DOUBLE,
        11: DOUBLE
    },
    12: {
        2: HIT,
        3: STAND,
        4: STAND,
        5: STAND,
        6: HIT,
        7: HIT,
        8: HIT,
        9: HIT,
        10: HIT,
        11: HIT
    },
    13: {
        2: STAND,
        3: STAND,
        4: STAND,
        5: STAND,
        6: HIT,
        7: HIT,
        8: HIT,
        9: HIT,
        10: HIT,
        11: STAND
    },
    14: {
        2: STAND,
        3: STAND,
        4: STAND,
        5: STAND,
        6: HIT,
        7: HIT,
        8: HIT,
        9: HIT,
        10: HIT,
        11: STAND
    },
    15: {
        2: STAND,
        3: STAND,
        4: STAND,
        5: STAND,
        6: HIT,
        7: HIT,
        8: HIT,
        9: HIT,
        10: HIT,
        11: STAND
    },
    16: {
        2: STAND,
        3: STAND,
        4: STAND,
        5: STAND,
        6: HIT,
        7: HIT,
        8: HIT,
        9: HIT,
        10: HIT,
        11: STAND
    },
    17: {
        2: STAND,
        3: STAND,
        4: STAND,
        5: STAND,
        6: STAND,
        7: STAND,
        8: STAND,
        9: STAND,
        10: STAND,
        11: STAND
    }
    18: {
        2: STAND,
        3: STAND,
        4: STAND,
        5: STAND,
        6: STAND,
        7: STAND,
        8: STAND,
        9: STAND,
        10: STAND,
        11: STAND
    }
    19: {
        2: STAND,
        3: STAND,
        4: STAND,
        5: STAND,
        6: STAND,
        7: STAND,
        8: STAND,
        9: STAND,
        10: STAND,
        11: STAND
    }
    20: {
        2: STAND,
        3: STAND,
        4: STAND,
        5: STAND,
        6: STAND,
        7: STAND,
        8: STAND,
        9: STAND,
        10: STAND,
        11: STAND
    }
}


const SOFT_TOTAL_STRATEGY = {
    2: {
        2: HIT,
        3: HIT,
        4: HIT,
        5: DOUBLE,
        6: DOUBLE,
        7: HIT,
        8: HIT,
        9: HIT,
        11: HIT
    },
    3: {
        2: HIT,
        3: HIT,
        4: HIT,
        5: DOUBLE,
        6: DOUBLE,
        7: HIT,
        8: HIT,
        9: HIT,
        10: HIT,
        11: HIT
    },
    4: {
        2: HIT,
        3: HIT,
        4: DOUBLE,
        5: DOUBLE,
        6: DOUBLE,
        7: HIT,
        8: HIT,
        9: HIT,
        11: HIT
    },
    5: {
        2: HIT,
        3: HIT,
        4: DOUBLE,
        5: DOUBLE,
        6: DOUBLE,
        7: HIT,
        8: HIT,
        9: HIT,
        10: HIT,
        11: HIT
    },
    6: {
        2: HIT,
        3: DOUBLE,
        4: DOUBLE,
        5: DOUBLE,
        6: DOUBLE,
        7: HIT,
        8: HIT,
        9: HIT,
        10: HIT,
        11: HIT
    },
    7: {
        2: DOUBLE,
        3: DOUBLE,
        4: DOUBLE,
        5: DOUBLE,
        6: DOUBLE,
        7: STAND,
        8: STAND,
        9: HIT,
        10: HIT,
        11: HIT
    },
    8: {
        2: STAND,
        3: STAND,
        4: STAND,
        5: STAND,
        6: DOUBLE,
        7: STAND,
        8: STAND,
        9: STAND,
        10: STAND,
        11: STAND
    },
    9: {
        2: STAND,
        3: STAND,
        4: STAND,
        5: STAND,
        6: STAND,
        7: STAND,
        8: STAND,
        9: STAND,
        10: STAND,
        11: STAND
    },
    10: {
        2: STAND,
        3: STAND,
        4: STAND,
        5: STAND,
        6: STAND,
        7: STAND,
        8: STAND,
        9: STAND,
        10: STAND,
        11: STAND
    },
    11: {
        2: STAND,
        3: STAND,
        4: STAND,
        5: STAND,
        6: STAND,
        7: STAND,
        8: STAND,
        9: STAND,
        10: STAND,
        11: STAND
    }
}

module.exports = {
    SOFT_TOTAL_STRATEGY,
    HARD_TOTAL_STRATEGY
}
