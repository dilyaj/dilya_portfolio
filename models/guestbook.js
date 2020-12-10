const mongoose = require('mongoose');

const guestbookSchema = new mongoose.Schema({
    name:  { type: String },
    leaveAComment: { type: String}
});

module.exports = mongoose.model('Guestbook', guestbookSchema);