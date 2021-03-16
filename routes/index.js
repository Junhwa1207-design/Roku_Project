const express = require('express');
const router = express.Router();

// this is where we would add our middleware
const { createProxyMiddleware } = require('http-proxy-middleware');

router.use('/api', createProxyMiddleware( {
    target: 'http://localhost:5000', //server #
    headers: {
        accept: 'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
}))



router.get('/', (req, res) => {
    res.render('index', {message: "Hello from handlebars!" })

})

router.get('/portfolio', (req, res) => {
    res.render('artwork', { portmessage: "You are on the portfolio page" })//portmessage->should be same with artwork.hbs {portmessage}
})

// other routes you might use
router.use ((req, res) =>{
    res.status(404);
    res.render("error",{layout: "errorLayout.hbs", errormessage: `you have lost your way! "${req.url}" does not exist!`})
})

module.exports = router;
