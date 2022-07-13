const Leagues = require('../models/LeagueModel');
const teamModel = require('../models/teamModel');
const matchModel = require('../models/matchModel');
const stadeModel = require('../models/stadeModel');



module.exports = {
    //create Leaugue
    createLeague: async (req, res) => {
        const { name, numOfTeams, prize, startDate, endDate, country, city, photo, desc, teams, matchs } = req.body

        if (!name || !numOfTeams || !prize || !startDate || !endDate || !country || !city || !desc) {
            return res.status(400).json({ message: "Please enter all fields" });
        }

        try {
            const league = await Leagues.findOne({ name });
            if (league) throw Error("league already exists");



            const newLeague = new Leagues({ name, numOfTeams, prize, startDate, endDate, country, city, photo, desc, teams, matchs });


            const savedLeague = await newLeague.save();


            if (!savedLeague) throw Error("Something went wrong saving the league");



            res.status(200).json({

                League: savedLeague,
            });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    updateLeague: async (req, res) => {
        Leagues.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, (err, league) => {
            if (!league) {
                res.status(500).json({
                    message: "league is not updated" + err
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
    deleteLeague: async (req, res) => {
        Leagues.findByIdAndDelete({ _id: req.params.id }, { $set: req.body }, (err, league) => {
            if (!league) {
                res.status(500).json({
                    message: "league is not deleted" + err

                });
            } else {
                res.status(200).json({
                    message: "league is successfully deleted"

                });
            }

        });

    },
    searchLeague: (req, res) => {
        try {

            Leagues.find({}).populate({
                path: 'teams',

                model: teamModel
            }).then(league => {
                res.json(league);
            });
            //  const  cont= Stade.find({name: req.params.name} , (err ,stade)=>{// si on veut chercher par un filter comme le nom
            //     const  cont= Teams.find({} , (err ,team)=>{
            //     res.status(200).send(team)
            // });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    searchLeagueMatch: (req, res) => {
        try {

            Leagues.find({}).populate({
                path: 'matchs',

                model: matchModel
            }).then(league => {
                res.json(league);
            });
            //  const  cont= Stade.find({name: req.params.name} , (err ,stade)=>{// si on veut chercher par un filter comme le nom
            //     const  cont= Teams.find({} , (err ,team)=>{
            //     res.status(200).send(team)
            // });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    getLeague: async (req, res) => {
        // Leagues.findById({_id : req.params.id},(err , league) => {
        try {

            Leagues.find({ _id: req.params.id })
                .populate({
                    path: 'teams',

                    model: teamModel
                })
                .populate({
                    path: 'matchs',

                    model: matchModel, populate: { path: 'teams', model: teamModel }
                })
                .populate({
                    path: 'matchs',

                    model: matchModel, populate: { path: 'stadium', model: stadeModel }
                }).then(league => {
                    res.json(league);
                });
            //  const  cont= Stade.find({name: req.params.name} , (err ,stade)=>{// si on veut chercher par un filter comme le nom
            //     const  cont= Teams.find({} , (err ,team)=>{
            //     res.status(200).send(team)
            // });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    CreateMatchInLeague: async (req, res) => {
        Leagues.findByIdAndUpdate({ _id: req.params.id }, { $push: req.body }, (err, league) => {
            if (!league) {
                res.status(500).json({
                    message: "league is not updated" + err
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

    deleteTeamInLeague: async (req, res) => {

        Leagues.findByIdAndUpdate({ _id: req.params.id }, { $pullAll: req.body }, (err, league) => {
            if (!league) {
                res.status(500).json({
                    message: "is not deleted" + err

                });
            } else {
                res.status(200).json({
                    message: "is successfully deleted"

                });
            }

        });

    },

}
