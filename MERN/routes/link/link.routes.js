const { Router } = require('express');
const { generateLink, getLinks, getLink, deleteLink } = require('../../controllers/link/link');
const { authMiddleware } = require('../../middleware/auth.middleware');

const router = Router();

router.post('/generate', authMiddleware, async (req, res) => generateLink(req, res));

router.get('/all', authMiddleware, async (req, res) =>  getLinks(req, res));

router.get('/:id', authMiddleware, async (req, res) =>  getLink(req, res));

router.delete('/delete', authMiddleware, async (req, res) => deleteLink(req, res));
    
module.exports = router;