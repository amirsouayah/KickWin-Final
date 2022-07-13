const Cups = require('../models/CupModel');



module.exports = {
    //create Leaugue
    createCup: async (req, res) => {
        const{name,numOfTeams,format,prize,startDate,endDate,country,city,photo,desc,teams,matchs} =req.body

        if ( !name || !numOfTeams  || !format || !prize  || !startDate || !endDate || !country || !city || !desc  ) {
            return res.status(400).json({ message: "Please enter all fields" });
        }

        try {
            const cup = await Cups.findOne({ name });
            if (cup) throw Error("cup already exists");
            
           

            const newCup = new Cups({name,numOfTeams,format,prize,startDate,endDate,country,city,photo,desc,teams,matchs});


            const savedCup = await newCup.save();
        
          
            if (!savedCup) throw Error("Something went wrong saving the cup");

        

            res.status(200).json({

                cup: savedCup,
            });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    updateCup: async (req,res)=>{
        Cups.findByIdAndUpdate({_id : req.params.id}, {$set : req.body},(err , cup) => {
            if(!cup){
                res.status(500).json({
                    message:"Cup is not updated" +err 
                    // data: null,
                });
            }else {
                res.status(200).json({
                    message:" is successfully updated" 
                    // data: null,
                });
            }

        });
    },
    deleteCup: async (req,res)=>{
        Cups.findByIdAndDelete({_id : req.params.id},{$set : req.body},(err , cup) => {
            if(!cup){
                res.status(500).json({
                    message:"Cup is not deleted" +err 
                   
                });
            }else {
                res.status(200).json({
                    message:"Cup is successfully deleted" 
                    
                });
            }

        });

    },
    searchCup:(req, res) =>{
        try {
            //  const  cont= Stade.find({name: req.params.name} , (err ,stade)=>{// si on veut chercher par un filter comme le nom
                const  cont= Cups.find({} , (err ,cup)=>{
                res.status(200).send(cup)
            });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    getCup: async (req,res)=>{
        Cups.findById({_id : req.params.id},(err , cup) => {
            if(!cup){
                res.status(500).json({
                    message:"cup is not deleted" +err 
                   
                });
            }else {
                res.status(200).send(cup)
            }

        });

    },
   
    

}
