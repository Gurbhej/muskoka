var express = require('express');
var router = express.Router();
// reference game model for CRUDNESS
let camp = require('../models/camp');

// // staff camper profiles
// router.get('/staff-camper-profiles', function(req, res, next){
//    res.render('staff-camper-profiles', { title:'Camper Profiles'});
//  });

/* GET profile page. */
router.get('/staff-camper-registration', function(req, res, next) {

camp.find(function(err, queryResults){
  if (err){
    console.log(err);
    res.end(err);
    return;
  }
else{
  console.log(queryResults);
  res.render('staff-camper-registration', {
    camp: queryResults,
    title:'Add kids to Camp'
  });
}
  });
});


// POST 
router.post('/staff-addaday', function(req, res, next) {
   camp.create({
      campName: req.body.campName,
      date: req.body.date,
      maxcampers: req.body.maxcampers
   },function(err) {
      if (err) {
         console.log(err);
         res.render('error');
         return;
      }
      res.redirect('staff-camper-registration');
   });
});

// make public
module.exports = router;
