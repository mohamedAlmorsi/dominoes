var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    card1: {
        upperNumber: Number,
        lowerNumber: Number,
        available: {
            type: Boolean,
            default: true
        }
    },
    card2: {
        upperNumber: Number,
        lowerNumber: Number,
        available: {
            type: Boolean,
            default: true
        }
    },
    card3: {
        upperNumber: Number,
        lowerNumber: Number,
        available: {
            type: Boolean,
            default: true
        }
    },
    card4: {
        upperNumber: Number,
        lowerNumber: Number,
        available: {
            type: Boolean,
            default: true
        }
    },
    card5: {
        upperNumber: Number,
        lowerNumber: Number,
        available: {
            type: Boolean,
            default: true
        }
    },
    card6: {
        upperNumber: Number,
        lowerNumber: Number,
        available: {
            type: Boolean,
            default: true
        }
    },
    card7: {
        upperNumber: Number,
        lowerNumber: Number,
        available: {
            type: Boolean,
            default: true
        }
    },
    points: {
        Number
    },
    isTurn: {
        type: Boolean,
        default: false,
    },
    number: {
        type: Number
    },
    currentCards: {
        type: Number,
        default: 7
    }

});

var Player = mongoose.model("player", playerSchema);
module.exports = Player;