const mongoose = require('mongoose')

const ocrSchema = mongoose.Schema({
    projetId: { type: number, required: true },
    title: { type: String, required: true },
    status: { type: String, required: true },
    class: { type: String, required: true },
    text: { type: String, required: true },
    work: { type: [String], required: true },
    more: { link: { type: String }, text: { type: String } },
    lang: { type: [String], required: true },
    link: { type: [String], required: true },
})

module.exports = mongoose.model('Ocr', ocrSchema)