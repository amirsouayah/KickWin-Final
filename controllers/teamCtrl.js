const Teams = require('../models/teamModel');

const playerModel = require('../models/playerModel');


module.exports = {
    //create team
    createTeam: async (req, res) => {
        const { name, leader, photo, city, country, players } = req.body

        if (!name || !country || !city) {
            return res.status(400).json({ message: "Please enter all fields" });
        }

        try {
            const team = await Teams.findOne({ name });
            if (team) throw Error("team already exists");



            const newTeam = new Teams({ name, leader, photo, city, country, players });


            const savedTeam = await newTeam.save();


            if (!savedTeam) throw Error("Something went wrong saving the team");



            res.status(200).json({

                Team: savedTeam,
            });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    updateTeam: async (req, res) => {
        Teams.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, (err, team) => {
            if (!team) {
                res.status(500).json({
                    message: "team is not updated" + err
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
    deleteTeam: async (req, res) => {
        Teams.findByIdAndDelete({ _id: req.params.id }, { $set: req.body }, (err, team) => {
            if (!team) {
                res.status(500).json({
                    message: "team is not deleted" + err

                });
            } else {
                res.status(200).json({
                    message: "team is successfully deleted"

                });
            }

        });

    },
    searchTeam: (req, res) => {
        try {

            Teams.find({}).populate({
                path: 'players',

                model: playerModel
            }).then(team => {
                res.json(team);
            });
            //  const  cont= Stade.find({name: req.params.name} , (err ,stade)=>{// si on veut chercher par un filter comme le nom
            //     const  cont= Teams.find({} , (err ,team)=>{
            //     res.status(200).send(team)
            // });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    getTeam: async (req, res) => {
        Teams.findById({ _id: req.params.id },
            //     (err , team) => {
            //     if(!team){
            //         res.status(500).json({
            //             message:"team is not deleted" +err 

            //         });
            //     }else {
            //         res.status(200).send(team)
            //     }

            // }
        ).populate({
            path: 'players',

            model: playerModel
        }).then(team => {
            res.json(team);
        });;

    },
    createPlayerInTeam: async (req, res) => {
        Teams.findByIdAndUpdate({ _id: req.params.id }, { $push: req.body }, (err, team) => {
            if (!team) {
                res.status(500).json({
                    message: "team is not updated" + err
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



}
