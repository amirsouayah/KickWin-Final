
const router = require('express').Router()
const CupCtrl = require('../controllers/CupCtrl')


router.post('/create', CupCtrl.createCup)
router.put('/update/:id', CupCtrl.updateCup)
router.delete('/delete/:id', CupCtrl.deleteCup)
router.get('/search', CupCtrl.searchCup)
router.get('/search/:id', CupCtrl.getCup)

module.exports = router