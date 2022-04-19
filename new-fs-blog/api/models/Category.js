const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
},
{ timestamps: true }

);

module.exports = mongoose.model('Category', CategorySchema);

// There is an issue in this code somewhere creating a bug with the post method.