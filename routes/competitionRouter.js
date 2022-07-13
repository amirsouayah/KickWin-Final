
const router = require('express').Router()
const competitionCtrl = require('../controllers/competitionCtrl')


router.post('/create', competitionCtrl.createCompetition)
router.put('/update/:id', competitionCtrl.updateCompetition)
router.delete('/delete/:id', competitionCtrl.deleteCompetition)
router.get('/search', competitionCtrl.searchCompetition)
router.get('/search/:id', competitionCtrl.getCompetition)

module.exports = router