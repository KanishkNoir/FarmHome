const express = require('express');
const router = express.Router();

const whController = require('../controllers/whController');
/**
 * App Routes
 */
router.get('/', whController.homepage);
router.get('/register-user', whController.registerUser);
router.post('/register-user', whController.registerUserOnPost);
router.get('/login-user', whController.loginUser);
router.get('/submit-inv', whController.submitInv);
router.get('/dashboard', whController.dashboard);
router.get('/storage-type', whController.storageType);

router.get('/vegetables', whController.vegetableStorage);
router.get('/dairy', whController.dairyStorage);
router.get('/legume', whController.legumeStorage);
router.get('/grains', whController.grainStorage);
router.get('/fruit', whController.fruitStorage);

router.get('/rajasthan', whController.rajasthanStats);
router.get('/up', whController.upStats);
router.get('/punjab', whController.punjabStats);
router.get('/maharashtra', whController.maharashtraStats);
router.get('/gujrat', whController.gujratStats);

router.get('/categories', whController.stateCategory);
router.get('/contact', whController.contactUs);

module.exports =router;