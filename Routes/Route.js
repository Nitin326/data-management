const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
const userController = require('../Controller/userController');

router.get('/', userController.getAlluser)

router.get('/createuser', (req, res) => {
    res.render('Createuser');
})

router.post('/createuser', userController.addUser);

router.get('/admin', (req, res) => {
    res.render('Admin');
})

router.get('/login', (req, res) => {
    res.render('Login');
})

router.get('/edit/:sn', (req, res) => {
    var id = req.params.sn;
    res.render('Edit',{val:id});
})

router.post('/edit/:sn', userController.updateUser);

router.post('/login', userController.loginUser);

router.get('/edit/:sn',(req,res) => {
    res.render('Edit');
});

router.get('/:sn',userController.deleteUser);

module.exports = router;



// router.get('/edituser', (req, res) => {
//     res.render('editUser');
// })

// router.get('/searchuser', (req, res) => {
//     res.render('searchUser');
// })

// router.get('/register', (req, res) => {
//     res.render('Register');
// })

// // router.post('/register', (req, res) => {
        
// // })

// router.get('/login', (req, res) => {
//     res.render('login');
// })
