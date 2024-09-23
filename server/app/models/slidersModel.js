import mongoose from 'mongoose';


const DataSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        shortDes: {type: String, required: true},
        price: {type: String, required: true},
        image: {type: String, required: true},
        productID: {type: mongoose.Schema.Types.ObjectId, required: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const slidersModel = mongoose.model('productsliders', DataSchema);

export default slidersModel;