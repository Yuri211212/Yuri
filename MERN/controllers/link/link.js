const Link = require('../../models/link');
const shortid = require('shortid');
const config = require('config');

async function generateLink(req, res) {
    try {
        const { from } = req.body;

        const code = shortid.generate();

        const baseUrl = config.get('baseUrl');

        const existing = await Link.findOne({ from, owner: req.user.userId });

        if (existing) {
            return res.json({ link: existing });
        }
        const to = baseUrl + '/t/' + code;

        const link = new Link({ from, to, code, owner: req.user.userId });

        await link.save();

        res.status(201).json({ link });

    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
};

async function getLinks(req, res) {
    try {
        const links = await Link.find({ owner: req.user.userId });

        res.status(201).json(links);

    } catch (error) {
        res.status(500).json({ message: 'Не удалось загрузить ссылки' })
    }
};

async function getLink(req, res) {
    try {
        const link = await Link.findById(req.params.id);

        res.status(201).json(link);

    } catch (error) {
        res.status(500).json({ message: 'Не удалось загрузить ссылку' })
    }
};

async function deleteLink(req, res) {
    try {
        const { id } = req.body;
        const links = await Link.findByIdAndDelete({ _id: id, owner: req.user.userId });

        res.status(201).json(links);
    } catch (error) {
        res.status(500).json({ message: 'Не удалось удалить ссылку' })
    }
};

module.exports = { generateLink, getLinks, getLink, deleteLink }