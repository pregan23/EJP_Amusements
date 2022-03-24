const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => res.send('EJP Amusements'))

module.exports = router;