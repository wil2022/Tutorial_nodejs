var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * Ruta que muestra el texto 'Eres genial'
 * @author Wilson Pachon <wildavid.pf@gmail.com>
 * @version 1.0.0
 */
router.get('/cool', function(req, res, next) {
  res.send('Eres genial');
});

module.exports = router;
