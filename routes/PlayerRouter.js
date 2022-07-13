
const router = require('express').Router()
const playerCtrl = require('../controllers/playerCtrl')


router.post('/create', playerCtrl.createPlayer)
router.put('/update/:id', playerCtrl.updatePlayer)
router.delete('/delete/:id', playerCtrl.deletePlayer)
router.get('/search', playerCtrl.searchPlayer)
router.get('/search/:id', playerCtrl.getPlayer)

module.exports = router