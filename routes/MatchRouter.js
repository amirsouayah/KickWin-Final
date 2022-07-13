
const router = require('express').Router()
const matchCtrl = require('../controllers/matchCtrl')


router.post('/create', matchCtrl.createMatch)
router.put('/update/:id', matchCtrl.updateMatch)
router.delete('/delete/:id', matchCtrl.deleteMatch)
router.get('/search', matchCtrl.searchMatch)
router.get('/search/:id', matchCtrl.getMatch)
router.get('/search/day', matchCtrl.getMatchByDays)
router.get('/find/:code', matchCtrl.searchMatchByCode)
router.get("/findstadium/:stadium", matchCtrl.searchMatchByStadium);

module.exports = router