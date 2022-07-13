const Matchs = require('../models/matchModel');
const teamModel = require('../models/teamModel');
const stadeModel = require('../models/stadeModel');
const playerModel = require('../models/playerModel');



module.exports = {
    //create Match
    createMatch: async (req, res) => {
        const { matchName, maxSlot, date, teams, stadium } = req.body

        if (!maxSlot || !date || !teams || !stadium) {
            return res.status(400).json({ message: "Please enter all fields" });
        }

        try {
            // const Match = await Matchs.findOne({ teams });
            // if (Match) throw Error("Match already exists");



            const newMatch = new Matchs({ matchName, maxSlot, date, teams, stadium });


            const savedMatch = await newMatch.save();


            if (!savedMatch) throw Error("Something went wrong saving the Match");



            res.status(200).json({

                Match: savedMatch,
            });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    updateMatch: async (req, res) => {
        Matchs.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, (err, Match) => {
            if (!Match) {
                res.status(500).json({
                    message: "Match is not updated" + err
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
    deleteMatch: async (req, res) => {
        Matchs.findByIdAndDelete({ _id: req.params.id }, { $set: req.body }, (err, Match) => {
            if (!Match) {
                res.status(500).json({
                    message: "Match is not deleted" + err

                });
            } else {
                res.status(200).json({
                    message: "Match is successfully deleted"

                });
            }

        });

    },
    searchMatch: (req, res) => {
        try {
            //  const  cont= Stade.find({name: req.params.name} , (err ,stade)=>{// si on veut chercher par un filter comme le nom
            Matchs.find({})
                .populate({
                    path: 'teams',

                    model: teamModel
                })
                .populate({
                    path: 'stadium',

                    model: stadeModel
                }).then(match => {
                    res.json(match);
                });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    getMatchByDays: (req, res) => {
        try {
            Matchs.aggregate([
                { $match: { date: "05/07/2022" } },
                { $group: { _id: null, match: { $sum: 1 } } }
            ]).then(match => {
                res.json(match);
            })
            //  const  cont= Stade.find({name: req.params.name} , (err ,stade)=>{// si on veut chercher par un filter comme le nom
            //     const  cont= Teams.find({} , (err ,team)=>{
            //     res.status(200).send(team)
            // });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    getMatch: async (req, res) => {
        try {
            //  const  cont= Stade.find({name: req.params.name} , (err ,stade)=>{// si on veut chercher par un filter comme le nom
            Matchs.find({ _id: req.params.id })
                .populate({
                    path: 'teams',

                    model: teamModel
                })
                .populate({
                    path: 'stadium',

                    model: stadeModel
                })
                .then(match => {
                    res.json(match);
                });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    searchMatchByCode: (req, res) => {
        try {
            //  const  cont= Stade.find({name: req.params.name} , (err ,stade)=>{// si on veut chercher par un filter comme le nom
            Matchs.find({ code: req.params.code })
                .populate({
                    path: 'teams',

                    model: teamModel, populate: { path: 'players', model: playerModel }
                })
                .populate({
                    path: 'stadium',

                    model: stadeModel
                })
                .then(match => {
                    res.json(match);
                });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    searchMatchByStadium: (req, res) => {
        try {
            //  const  cont= Stade.find({name: req.params.name} , (err ,stade)=>{// si on veut chercher par un filter comme le nom
            Matchs.find({ stadium: req.params.stadium })
                .populate({
                    path: 'teams',

                    model: teamModel
                })
                .then(match => {
                    res.json(match);
                });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },


}
