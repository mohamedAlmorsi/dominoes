var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var gameController = require('./controllers/gameController');

router.get('/board/create',
    gameController.createBoard);
router.get('/board/play',
    gameController.play);
router.get('/board/crateForPair',
    gameController.createBoardforPair);
router.get('/board/playInPair',
    gameController.playInPair);
router.get('/player/cards',
    gameController.showMyCards);

module.exports = router;