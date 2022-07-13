
const router = require('express').Router()
const teamCtrl = require('../controllers/teamCtrl')


router.post('/create', teamCtrl.createTeam)
router.put('/update/:id', teamCtrl.updateTeam)
router.put('/updatepl/:id', teamCtrl.createPlayerInTeam)
router.delete('/delete/:id', teamCtrl.deleteTeam)
router.get('/search', teamCtrl.searchTeam)
router.get('/search/:id', teamCtrl.getTeam)

module.exports = router