const Stade = require('../models/stadeModel');



module.exports = {
    //create stadium
    createStadium: async (req, res) => {
        const { name, country, city, address, lattitude, longitude, size } = req.body

        if (!name || !country || !city || !address || !lattitude || !longitude || !size) {
            return res.status(400).json({ message: "Please enter all fields" });
        }

        try {
            const stade = await Stade.findOne({ name });
            if (stade) throw Error("Stadium already exists");



            const newStade = new Stade({ name, country, city, address, lattitude, longitude, size });


            const savedStade = await newStade.save();


            if (!savedStade) throw Error("Something went wrong saving the stadium");



            res.status(200).json({

                Stade: savedStade,
            });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    updateStadium: async (req, res) => {
        Stade.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, (err, stade) => {
            if (!stade) {
                res.status(500).json({
                    message: "stadium is not updated" + err
                    // data: null,
                });
            } else {
                res.status(200).json({
                    message: "stade is successfully updated"
                    // data: null,
                });
            }

        });
    },
    deleteStadium: async (req, res) => {
        Stade.findByIdAndDelete({ _id: req.params.id }, { $set: req.body }, (err, stade) => {
            if (!stade) {
                res.status(500).json({
                    message: "stade is not deleted" + err

                });
            } else {
                res.status(200).json({
                    message: "stadium is successfully deleted"

                });
            }

        });

    },
    searchStadium: (req, res) => {
        try {
            //  const  cont= Stade.find({name: req.params.name} , (err ,stade)=>{// si on veut chercher par un filter comme le nom
            const cont = Stade.find({}, (err, stade) => {
                res.status(200).send(stade)
            });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    getStadium: async (req, res) => {
        Stade.findById({ _id: req.params.id }, (err, stade) => {
            if (!stade) {
                res.status(500).json({
                    message: "er" + err

                });
            } else {
                res.status(200).send(stade)
            }

        });

    },

}


