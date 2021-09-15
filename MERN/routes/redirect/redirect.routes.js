const { Router } = require('express');
const { redirect } = require('../../controllers/redirect/redirect');

const router = Router();

router.get('/:code', async (req, res) => redirect(req, res));

module.exports = router;