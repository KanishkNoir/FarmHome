require('../model/database');
const Registeration = require('../model/Registeration');

/**
 * GET/
 * Homepage
 */

exports.homepage = async(req,res)=>{
    res.render('index', {title:'Warehouse M.S.: Home' });
}

/**
 * GET/register-user
 * Register User
 */
exports.registerUser = async(req,res)=>{
    const infoErrorsObj =req.flash('infoErrors');
    const infoSubmitObj =req.flash('infoSubmit');
    res.render('register-user', {title: 'User Registration', infoErrorsObj,infoSubmitObj});
}  

/**
 * 
 * POST/register-user 
 * Register User in Database
 */ 
exports.registerUserOnPost = async(req,res)=>{
    const infoErrorsObj =req.flash('infoErrors');
    const infoSubmitObj =req.flash('infoSubmit');
    try{
    req.flash('infoSubmit', 'Registeration has been accepted.')
    res.redirect('register-user');
    }
    catch(error){

    req.flash('infoErrors', error)
    res.redirect('register-user');
    }
}

/**
 * GET/login-user
 * Login User
 */
 exports.loginUser = async(req,res)=>{
    const infoErrorsObj =req.flash('infoErrors');
    const infoSubmitObj =req.flash('infoSubmit');
    res.render('login-user', {title: 'User Login', infoErrorsObj,infoSubmitObj});
}  

/**
 * GET/submit-inv
 * Submit Inventory
 */

exports.submitInv= async(req,res)=>{
    const infoErrorsObj =req.flash('infoErrors');
    const infoSubmitObj =req.flash('infoSubmit');
    res.render('submit-inv', {title:'Submit Inventory', infoErrorsObj, infoSubmitObj});
    
}

/**
 * GET/submit-inv
 * Submit Inventory
 */

 exports.dashboard= async(req,res)=>{
    const infoErrorsObj =req.flash('infoErrors');
    const infoSubmitObj =req.flash('infoSubmit');
    res.render('dashboard', {title:'Dashboard', infoErrorsObj, infoSubmitObj});
    
}

/**
 * GET/dashboard
 * Return to Dashboard
 */

 exports.dashboard= async(req,res)=>{
    res.render('dashboard', {title:'Dashboard'});
    
}

// for contact us button 
exports.contactUs= async(req,res)=>{
    res.render('contact', {title:'Contact Us'});
    
}


/**
 * GET/vegetable
 * Grains
 */

 exports.vegetableStorage = async(req,res)=>{
    res.render('vegetables', {title: 'Vegetables'});
}

/**
 * GET/vegetable
 * Grains
 */

 exports.dairyStorage = async(req,res)=>{
    res.render('dairy', {title: 'Dairy'});
}
/**
 * GET/vegetable
 * Grains
 */

 exports.legumeStorage = async(req,res)=>{
    res.render('legume', {title: 'Legumes'});
}
/**
 * GET/vegetable
 * Grains
 */

 exports.grainStorage = async(req,res)=>{
    res.render('grains', {title: 'Grains'});
}
/**
 * GET/vegetable
 * Grains
 */

 exports.fruitStorage = async(req,res)=>{
    res.render('fruit', {title: 'Fruits'});
}

//States


/**
 * GET/rajasthan
 * Rajasthan
 */

 exports.rajasthanStats= async(req,res)=>{
    res.render('rajasthan', {title:'Rajasthan'});
 }

 /**
 * GET/up
 * Uttar Pradesh
 */

  exports.upStats= async(req,res)=>{
    res.render('up', {title:'Uttar Pradesh'});
    
}

/**
 * GET/punjab
 * Punjab
 */

 exports.punjabStats= async(req,res)=>{
    res.render('punjab', {title:'Punjab'});
    
}

/**
 * GET/maharashtra
 * Maharashtra
 */

 exports.maharashtraStats= async(req,res)=>{
    res.render('maharashtra', {title:'Maharashtra'});
    
}

/**
 * GET/storage-types/gujrat
 * Gujrat
 */

 exports.gujratStats= async(req,res)=>{
    res.render('gujrat', {title:'Gujrat'});
    
}

/**
 * GET/categories
 * State Categories
 */
exports.stateCategory = async(req,res)=>{
    res.render('categories', {title:'States'})
}

/**
 * GET/storage-type
 * View Food Types
 */

 exports.storageType= async(req,res)=>{
    res.render('storage-type', {title:'Food Types'});
    
}