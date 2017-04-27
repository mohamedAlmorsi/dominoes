let Player = require('../models/player.js');



// a function to check the uniqueness of the input elements 
function checkSimilarity(usernames) {
    for (var i = 0; i < usernames.length; i++) {
        for (var j = i + 1; j < usernames.length; j++) {
            if (usernames[i] == usernames[j]) return false;
        }
    }
    return true;

}

// a function to make sure that the the user has this card 
function checkCardAvailablilty(cards, upperNumber, lowerNumber) {

    for (var i = 1; i < cards.length + 1; i++) {
        if (cards[i - 1].upperNumber == upperNumber && cards[i - 1].lowerNumber ==
            lowerNumber && cards[i - 1].available == true)
            return i;
    }
    return 0;
}


let gameController = {


    // creating a board for four players , one user , three virtual computers 

    createBoard: function(req, res) {
        var playerOneUsername = req.header("playerOneUsername");
        var playerTwoUsername = req.header("playerTwoUsername");
        var playerThreeUsername = req.header("playerThreeUsername");
        var playerFourUsername = req.header("playerFourUsername");

        // usernames validation //


        // checking that the variables exist
        if (!playerOneUsername || !playerTwoUsername || !playerThreeUsername || !playerFourUsername) {
            res.status(403).json("Please Enter The usernames of the 4 players correctly");
            return;
        }
        // checking that none of the usernames is an empty string 
        if (playerOneUsername.length === 0 || playerTwoUsername.length === 0 || playerThreeUsername.length === 0 ||
            playerFourUsername.length === 0) {
            res.status(403).json("None of the usernames could be empty");
            return;
        }

        // check that none of the entered usernames are similar 
        var usernames = [playerOneUsername, playerTwoUsername, playerThreeUsername, playerFourUsername];
        if (!checkSimilarity(usernames)) {
            res.status(403).json("Entered usernames must be unique");
            return;
        }




        // checking that the none of the usernames is alread in the database 
        Player.findOne({ username: playerOneUsername }, function(req, foundPlayer) {
            if (foundPlayer != null) {
                res.status(403).json("This username already exists");
                return;
            }
        });
        Player.findOne({ username: playerTwoUsername }, function(req, foundPlayer) {
            if (foundPlayer != null) {
                res.status(403).json("This username already exists");
                return;
            }
        });
        Player.findOne({ username: playerThreeUsername }, function(req, foundPlayer) {
            if (foundPlayer != null) {
                res.status(403).json("This username already exists");
                return;
            }
        });
        Player.findOne({ username: playerFourUsername }, function(req, foundPlayer) {
            if (foundPlayer != null) {
                res.status(403).json("This username already exists");
                return;
            }
        });






        var player1 = new Player();
        var player2 = new Player();
        var player3 = new Player();
        var player4 = new Player();

        player1.card1.upperNumber = Math.floor((Math.random() * 6) + 1);
        player1.card1.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player1.card2.upperNumber = Math.floor((Math.random() * 6) + 1);
        player1.card2.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player1.card3.upperNumber = Math.floor((Math.random() * 6) + 1);
        player1.card3.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player1.card4.upperNumber = Math.floor((Math.random() * 6) + 1);
        player1.card4.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player1.card5.upperNumber = Math.floor((Math.random() * 6) + 1);
        player1.card5.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player1.card6.upperNumber = Math.floor((Math.random() * 6) + 1);
        player1.card6.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player1.card7.upperNumber = Math.floor((Math.random() * 6) + 1);
        player1.card7.lowerNumber = Math.floor((Math.random() * 6) + 1);
        // initial points 
        player1.posints = 0;
        // only player1 turn is true 
        player1.isTurn = true;
        // player username
        player1.username = playerOneUsername;
        player1.number = 1;
        player1.save(function(err, savedPlayer) {
            if (err) {

                console.log("can't save player1\n");
            } else {

                console.log("player1 added Successfully\n");
            }
        });

        // initializing the cards of the second player 
        player2.card1.upperNumber = Math.floor((Math.random() * 6) + 1);
        player2.card1.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player2.card2.upperNumber = Math.floor((Math.random() * 6) + 1);
        player2.card2.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player2.card3.upperNumber = Math.floor((Math.random() * 6) + 1);
        player2.card3.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player2.card4.upperNumber = Math.floor((Math.random() * 6) + 1);
        player2.card4.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player2.card5.upperNumber = Math.floor((Math.random() * 6) + 1);
        player2.card5.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player2.card6.upperNumber = Math.floor((Math.random() * 6) + 1);
        player2.card6.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player2.card7.upperNumber = Math.floor((Math.random() * 6) + 1);
        player2.card7.lowerNumber = Math.floor((Math.random() * 6) + 1);
        // initial points 
        player2.posints = 0;
        // player username
        player2.username = playerTwoUsername;
        player2.number = 2;
        player2.save(function(err, savedPlayer) {
            if (err) {
                console.log("can't save player2\n");
            } else {

                console.log("player2 added Successfully\n");
            }
        });


        // initializing the cards of the third player 
        player3.card1.upperNumber = Math.floor((Math.random() * 6) + 1);
        player3.card1.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player3.card2.upperNumber = Math.floor((Math.random() * 6) + 1);
        player3.card2.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player3.card3.upperNumber = Math.floor((Math.random() * 6) + 1);
        player3.card3.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player3.card4.upperNumber = Math.floor((Math.random() * 6) + 1);
        player3.card4.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player3.card5.upperNumber = Math.floor((Math.random() * 6) + 1);
        player3.card5.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player3.card6.upperNumber = Math.floor((Math.random() * 6) + 1);
        player3.card6.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player3.card7.upperNumber = Math.floor((Math.random() * 6) + 1);
        player3.card7.lowerNumber = Math.floor((Math.random() * 6) + 1);
        // initial points 
        player3.posints = 0;
        // player username
        player3.username = playerThreeUsername;
        player3.number = 3;
        player3.save(function(err, savedPlayer) {
            if (err) {
                consle.log("can't save player3\n");
            } else {
                console.log("player3 added Successfully\n");
            }
        });

        // initializing the cards of the 4th player 
        player4.card1.upperNumber = Math.floor((Math.random() * 6) + 1);
        player4.card1.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player4.card2.upperNumber = Math.floor((Math.random() * 6) + 1);
        player4.card2.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player4.card3.upperNumber = Math.floor((Math.random() * 6) + 1);
        player4.card3.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player4.card4.upperNumber = Math.floor((Math.random() * 6) + 1);
        player4.card4.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player4.card5.upperNumber = Math.floor((Math.random() * 6) + 1);
        player4.card5.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player4.card6.upperNumber = Math.floor((Math.random() * 6) + 1);
        player4.card6.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player4.card7.upperNumber = Math.floor((Math.random() * 6) + 1);
        player4.card7.lowerNumber = Math.floor((Math.random() * 6) + 1);

        // initial points 
        player4.posints = 0;
        //username
        player4.username = playerFourUsername;
        player4.number = 4;
        player4.save(function(err, savedPlayer) {
            if (err) {
                console.log("can't save player4\n");
            } else {
                console.log("player4 added Successfully\n");

            }
        });


        res.status(200).json("Board Created Successfully , 4 players are created each with seven cards");

    },




    // four players against each other . one user and 3 virtual computers 

    play: function(req, res) {
        var username = req.header("username");
        var cardUpper = req.header("cardUpper");
        var cardLower = req.header("cardLower");
        var moveOn = req.header("moveOn");

        if (!username) {
            res.status(403).json("Please enter your username");
            return;
        }
        Player.findOne({ username: username }, function(req, foundPlayer) {
            if (foundPlayer == null) {
                res.status(403).json("wrong username");
                return;
            }
        });

        Player.findOne({ currentCards: 0 }, function(err, foundPlayer) {
            if (err) {
                res.status(403).json("Error happened while checking other useres , please try again");
                return;
            } else {
                if (foundPlayer != null) {
                    res.status(403).json("Someone Already Won this game , start a new one ");
                    return;
                }
            }
        });


        if (moveOn == 'yes') {
            Player.find({ 'username': { '$ne': username } }, function(err, otherPlayers) {

                Player.findOne({ username: otherPlayers[0].username }, function(err, updatedPlayer) {
                    updatedPlayer.currentCards--;
                    updatedPlayer.save(function(err, savedPlayer) {
                        if (err) {
                            res.status(403).json("Error happened while saving");
                            return;
                        }
                    });
                });

                Player.findOne({ username: otherPlayers[1].username }, function(err, updatedPlayer) {
                    updatedPlayer.currentCards--;
                    updatedPlayer.save(function(err, savedPlayer) {
                        if (err) {
                            res.status(403).json("Error happened while saving");
                            return;
                        }
                    });
                });

                Player.findOne({ username: otherPlayers[2].username }, function(err, updatedPlayer) {
                    updatedPlayer.currentCards--;
                    updatedPlayer.save(function(err, savedPlayer) {
                        if (err) {
                            res.status(403).json("Error happened while saving");
                            return;
                        }
                    });
                });
            });
            res.status(200).json("You Didn't play this round  , computer 2 turn ... " + " Computer 2 playing ....." + " computer 3 turn ... " + " computer 3 playing ... " + " YOUR TURN");
            return;
        }

        if (!username || !cardUpper || !cardLower) {
            res.status(403).json("Please enter your username , lower number of the card & upper number of the card or specify moving on ");
            return;
        }
        if (username.length == 0 || cardUpper.length == 0 || cardLower.length == 0) {
            res.status(403).json("username and upper numebr and lower number of the card cant't be empty");
            return;
        } else {
            Player.findOne({ username: username }, function(req, foundPlayer) {
                if (foundPlayer == null) {
                    res.status(403).json("wrong username");
                    return;
                } else if (foundPlayer.currentCards == 0) {
                    res.status(200).json("No cards available for this user , you should have been won the game");
                    return;
                } else {

                    var cards = [foundPlayer.card1,
                        foundPlayer.card2,
                        foundPlayer.card3,
                        foundPlayer.card4,
                        foundPlayer.card5,
                        foundPlayer.card6,
                        foundPlayer.card7
                    ];
                    if (checkCardAvailablilty(cards, cardUpper, cardLower) === 0) {
                        res.status(403).json("You Don't have such a card or you used it before");
                        return;
                    } else {

                        Player.findOne({ username: username }, function(req, updatedPlayer) {
                            switch (checkCardAvailablilty(cards, cardUpper, cardLower)) {
                                case 1:
                                    {
                                        updatedPlayer.card1.available = false;
                                        updatedPlayer.currentCards--;
                                        break;
                                    }
                                case 2:
                                    {
                                        updatedPlayer.card2.available = false;
                                        updatedPlayer.currentCards--;
                                        break;
                                    }
                                case 3:
                                    {
                                        updatedPlayer.card3.available = false;
                                        updatedPlayer.currentCards--;
                                        break;
                                    }
                                case 4:
                                    {
                                        updatedPlayer.card4.available = false;
                                        updatedPlayer.currentCards--;
                                        break;
                                    }
                                case 5:
                                    {
                                        updatedPlayer.card5.available = false;
                                        updatedPlayer.currentCards--;
                                        break;
                                    }
                                case 6:
                                    {
                                        updatedPlayer.card6.available = false;
                                        updatedPlayer.currentCards--;
                                        break;
                                    }
                                case 7:
                                    {
                                        updatedPlayer.card7.available = false;
                                        updatedPlayer.currentCards--;
                                        break;
                                    }
                            }

                            updatedPlayer.save(function(err, savedPlayer) {
                                if (err) {
                                    res.status(403).json("Error happened while updating your cards");
                                    return
                                } else {
                                    if (savedPlayer.currentCards == 0) {
                                        res.status(200).json("NO CARDS LEFT , YOU WON !!")
                                    } else {
                                        savedPlayer.currentCards--;
                                        Player.find({ 'username': { '$ne': savedPlayer.username } }, function(err, otherPlayers) {
                                            otherPlayers[0].currentCards--;
                                            otherPlayers[1].currentCards--;
                                            otherPlayers[2].currentCards--;
                                        });
                                        res.status(200).json("Cards updated successfully , computer 2 turn ... " + " Computer 2 playing ....." + " computer 3 turn ... " + " computer 3 playing ... " + " YOUR TURN");

                                    }
                                }
                            });


                        });
                    }


                }
            });
        }

    },



    // creating a board for two players only 

    createBoardforPair: function(req, res) {
        var playerOneUsername = req.header("playerOneUsername");
        var playerTwoUsername = req.header("playerTwoUsername");


        if (!playerOneUsername || !playerTwoUsername) {
            res.status(403).json("Please enter both players usernames");
            return;
        }
        Player.findOne({ username: playerOneUsername }, function(err, foundPlayer) {
            if (err) {
                res.status.json("Erro while seatching");
                return;

            } else if (foundPlayer != null) {
                res.status(403).json("First player username is used before");
                return;
            }
        });

        Player.findOne({ username: playerTwoUsername }, function(err, foundPlayer) {
            if (err) {
                res.status.json("Erro while seatching");
                return;

            } else if (foundPlayer != null) {
                res.status(403).json("second player username is used before");
                return;
            }
        });

        var player1 = new Player();
        var player2 = new Player();
        player1.card1.upperNumber = Math.floor((Math.random() * 6) + 1);
        player1.card1.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player1.card2.upperNumber = Math.floor((Math.random() * 6) + 1);
        player1.card2.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player1.card3.upperNumber = Math.floor((Math.random() * 6) + 1);
        player1.card3.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player1.card4.upperNumber = Math.floor((Math.random() * 6) + 1);
        player1.card4.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player1.card5.upperNumber = Math.floor((Math.random() * 6) + 1);
        player1.card5.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player1.card6.upperNumber = Math.floor((Math.random() * 6) + 1);
        player1.card6.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player1.card7.upperNumber = Math.floor((Math.random() * 6) + 1);
        player1.card7.lowerNumber = Math.floor((Math.random() * 6) + 1);
        // initial points 
        player1.posints = 0;
        // only player1 turn is true 
        player1.isTurn = true;
        // player username
        player1.username = playerOneUsername;
        player1.number = 1;
        player1.save(function(err, savedPlayer) {
            if (err) {

                console.log("can't save player1\n");
            } else {
                savedPlayer.isTurn = true;
                console.log("player1 added Successfully\n");
            }
        });

        // initializing the cards of the second player 
        player2.card1.upperNumber = Math.floor((Math.random() * 6) + 1);
        player2.card1.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player2.card2.upperNumber = Math.floor((Math.random() * 6) + 1);
        player2.card2.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player2.card3.upperNumber = Math.floor((Math.random() * 6) + 1);
        player2.card3.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player2.card4.upperNumber = Math.floor((Math.random() * 6) + 1);
        player2.card4.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player2.card5.upperNumber = Math.floor((Math.random() * 6) + 1);
        player2.card5.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player2.card6.upperNumber = Math.floor((Math.random() * 6) + 1);
        player2.card6.lowerNumber = Math.floor((Math.random() * 6) + 1);
        player2.card7.upperNumber = Math.floor((Math.random() * 6) + 1);
        player2.card7.lowerNumber = Math.floor((Math.random() * 6) + 1);
        // initial points 
        player2.posints = 0;
        // player username
        player2.username = playerTwoUsername;
        player2.number = 2;
        player2.save(function(err, savedPlayer) {
            if (err) {
                console.log("can't save player2\n");
            } else {

                console.log("player2 added Successfully\n");
            }
        });

        res.status(200).json("Board Created Successfully , 2 players are created each with seven cards");

    },





    // Two Players each other 

    playInPair: function(req, res) {
        var username = req.header("username");
        var upperNumber = req.header("upperNumber");
        var lowerNumber = req.header('lowerNumber');
        var moveOn = req.header("moveOn");
        if (!username) {
            res.status(403).json("please enter your username");
            return
        }
        Player.findOne({ username: username }, function(err, foundPlayer) {
            if (err) {
                res.status(403).json("Error while searching");
                return;
            } else if (foundPlayer == null) {
                res.status(403).json("Wrong username");
                return
            } else if (foundPlayer.isTurn == false) {
                res.status(403).json("Not your turn");
            } else {
                var cards = [foundPlayer.card1,
                    foundPlayer.card2,
                    foundPlayer.card3,
                    foundPlayer.card4,
                    foundPlayer.card5,
                    foundPlayer.card6,
                    foundPlayer.card7
                ];
                if (checkCardAvailablilty(cards, upperNumber, lowerNumber) == 0) {
                    res.status(403).json("You Don't have such a card or you used it before ");
                    return
                } else {
                    switch (checkCardAvailablilty(cards, upperNumber, lowerNumber)) {
                        case 1:
                            {
                                foundPlayer.card1.available = false;
                                foundPlayer.currentCards--;
                                foundPlayer.isTurn = false;
                                break;
                            }
                        case 2:
                            {
                                foundPlayer.card2.available = false;
                                foundPlayer.currentCards--;
                                foundPlayer.isTurn = false;

                                break;
                            }
                        case 3:
                            {
                                foundPlayer.card3.available = false;
                                foundPlayer.currentCards--;
                                foundPlayer.isTurn = false;

                                break;
                            }
                        case 4:
                            {
                                foundPlayer.card4.available = false;
                                foundPlayer.currentCards--;
                                foundPlayer.isTurn = false;

                                break;
                            }
                        case 5:
                            {
                                foundPlayer.card5.available = false;
                                foundPlayer.currentCards--;
                                foundPlayer.isTurn = false;

                                break;
                            }
                        case 6:
                            {
                                foundPlayer.card6.available = false;
                                foundPlayer.currentCards--;
                                foundPlayer.isTurn = false;

                                break;
                            }
                        case 7:
                            {
                                foundPlayer.card7.available = false;
                                foundPlayer.currentCards--;
                                foundPlayer.isTurn = false;

                                break;
                            }
                    }
                    foundPlayer.save(function(err, savedPlayer) {
                        if (err) {
                            res.status(403).json("error while saving");
                            return;
                        }
                    })
                    Player.find({ 'username': { '$ne': username } }, function(err, anotherPlayer) {
                        var otherPlayer = anotherPlayer[0];
                        otherPlayer.isTurn = true;
                        otherPlayer.save(function(err, savedPlayer) {
                            if (err) {
                                res.status(403).json("error while saving");
                            }
                        });

                    });

                }
            }
        });



    },
    showMyCards: function(req, res) {
        var username = req.header("username");
        if (!username) {
            res.status(403).json("please enter your username");
            return
        }
        Player.findOne({ username: username }, function(err, foundPlayer) {
            if (err) {
                res.status(403).json("error while searching");
            } else if (foundPlayer == null) {
                res.status(403).json("Wrong username");
            } else {
                var cards = [foundPlayer.card1,
                    foundPlayer.card2,
                    foundPlayer.card3,
                    foundPlayer.card4,
                    foundPlayer.card5,
                    foundPlayer.card6,
                    foundPlayer.card7
                ];

                res.status(200).json(cards);
            }
        });
    }



}

module.exports = gameController;