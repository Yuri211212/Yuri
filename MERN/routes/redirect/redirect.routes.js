const { Router } = require('express');
const { redirect } = require('../../controllers/redirect/redirect');
const { authMiddleware } = require('../../middleware/auth.middleware');

const router = Router();

router.get('/:code', authMiddleware, async (req, res) => redirect(req, res));

module.exports = router;