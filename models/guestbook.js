const mongoose = require('mongoose');

const guestbookSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    leaveAComment: { type: String, required: true}
});

module.exports = mongoose.model('Guestbook', guestbookSchema);