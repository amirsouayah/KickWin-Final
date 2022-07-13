const Competitions = require('../models/CompetitionModel');



module.exports = {
    //create competition
    createCompetition: async (req, res) => {
        const{type,name,photo,startDate,endDate,prize,teams,stades,matchs} =req.body

        if (!type || !name || !startDate || !endDate || !prize || !teams || !stades || !matchs  ) {
            return res.status(400).json({ message: "Please enter all fields" });
        }

        try {
            const competition = await Competitions.findOne({ name });
            if (competition) throw Error("competition already exists");
            
           

            const newCompetition = new Competitions({type,name,photo,startDate,endDate,prize,teams,stades,matchs});


            const savedCompetition = await newCompetition.save();
        
          
            if (!savedCompetition) throw Error("Something went wrong saving the competition");

        

            res.status(200).json({

                Competition: savedCompetition,
            });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    updateCompetition: async (req,res)=>{
        Competitions.findByIdAndUpdate({_id : req.params.id}, {$set : req.body},(err , competition) => {
            if(!competition){
                res.status(500).json({
                    message:"competition is not updated" +err 
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
    deleteCompetition: async (req,res)=>{
        Competitions.findByIdAndDelete({_id : req.params.id},{$set : req.body},(err , competition) => {
            if(!competition){
                res.status(500).json({
                    message:"competition is not deleted" +err 
                   
                });
            }else {
                res.status(200).json({
                    message:"competition is successfully deleted" 
                    
                });
            }

        });

    },
    searchCompetition:(req, res) =>{
        try {
            //  const  cont= Stade.find({name: req.params.name} , (err ,stade)=>{// si on veut chercher par un filter comme le nom
                const  cont= Competitions.find({} , (err ,competition)=>{
                res.status(200).send(competition)
            });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
    getCompetition: async (req,res)=>{
        Competitions.findById({_id : req.params.id},(err , competition) => {
            if(!competition){
                res.status(500).json({
                    message:"competition is not deleted" +err 
                   
                });
            }else {
                res.status(200).send(competition)
            }

        });

    },
   
    

}
