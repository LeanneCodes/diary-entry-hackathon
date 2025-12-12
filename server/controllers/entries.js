const Entry = require('../models/Entry')

async function index(req, res) {
    try {
        const entries = await Entry.getAll();
        res.status(200).json(entries)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

async function show(req, res) {
    try {
        let name = req.params.name
        const entry = await Entry.getOne(name)
        res.status(200).json(entry)
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

async function create(req, res) {
    try {
        const data = req.body
        const newEntry = await Entry.create(data)
        res.status(201).json(newEntry)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

async function update(req, res) {
    try {
        const name = req.params.name
        const data = req.body
        const entry = await Entry.getOne(name)
        const result = await entry.update(data)
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

async function destroy(req, res) {
    try {
        const name = req.params.name
        const entry = await Entry.getOne(name)
        const result = await entry.destroy()
        res.status(204).end()
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

module.exports = { index, show, create, update, destroy }