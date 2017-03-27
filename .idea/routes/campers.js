var express = require('express');
var router = express.Router();


// reference game model for CRUDNESS
let Camper = require('../models/camper');

// // staff camper profiles
// router.get('/staff-camper-profiles', function(req, res, next){
//    res.render('staff-camper-profiles', { title:'Camper Profiles'});
//  });

/* GET profile page. */
router.get('/staff-camper-profiles', function(req, res, next) {

Camper.find(function(err, queryResults){
  if (err){
    console.log(err);
    res.end(err);
    return;
  }

  console.log(queryResults);
  res.render('staff-camper-profiles', {
    camper: queryResults,
    title:'Camper Profiles'
  });

  });
});
console.log('hello world')

// make public
module.exports = router;
