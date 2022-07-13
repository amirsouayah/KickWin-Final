const Players = require('../models/playerModel');



module.exports = {
    //create player
    createPlayer: async (req, res) => {
        const { name, age, photo, phone, posInfo } = req.body

        if (!name || !age || !phone || !posInfo) {
            return res.status(400).json({ message: "Please enter all fields" });
        }

        try {
            const player = await Players.findOne({ name });
            if (player) throw Error("player already exists");



            const newPlayer = new Players({ name, age, photo, phone, posInfo });


            const savedPlayer = await newPlayer.save();


            if (!savedPlayer) throw Error("Something went wrong saving the player");



            res.status(200).json({

                player: savedPlayer,
            });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    updatePlayer: async (req, res) => {
        Players.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, (err, player) => {
            if (!player) {
                res.status(500).json({
                    message: "player is not updated" + err
                    // data: null,
                });
            } else {
                res.status(200).json({
                    message: " is successfully updated"
                    // data: null,
                });
            }

        });
    },
    deletePlayer: async (req, res) => {
        Players.findByIdAndDelete({ _id: req.params.id }, { $set: req.body }, (err, player) => {
            if (!player) {
                res.status(500).json({
                    message: "player is not deleted" + err

                });
            } else {
                res.status(200).json({
                    message: "player is successfully deleted"

                });
            }

        });

    },
    searchPlayer: (req, res) => {
        try {
            //  const  cont= Stade.find({name: req.params.name} , (err ,stade)=>{// si on veut chercher par un filter comme le nom
            const cont = Players.find({}, (err, player) => {
                res.status(200).send(player)
            });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    getPlayer: async (req, res) => {
        Players.findById({ _id: req.params.id }, (err, player) => {
            if (!player) {
                res.status(500).json({
                    message: "player is not deleted" + err

                });
            } else {
                res.status(200).send(player)
            }

        });

    },


}
