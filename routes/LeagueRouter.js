
const router = require('express').Router()
const LeagueCtrl = require('../controllers/LeagueCtrl')


router.post('/create', LeagueCtrl.createLeague)
router.put('/update/:id', LeagueCtrl.updateLeague)
router.put('/updateleague/:id', LeagueCtrl.CreateMatchInLeague)
router.delete('/delete/:id', LeagueCtrl.deleteLeague)
router.put('/deleteleague/:id', LeagueCtrl.deleteTeamInLeague)
router.get('/search', LeagueCtrl.searchLeague)
router.get('/search/:id', LeagueCtrl.getLeague)
router.get('/search', LeagueCtrl.searchLeagueMatch)

module.exports = router