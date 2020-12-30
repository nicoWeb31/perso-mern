import mongoose from 'mongoose';

const messageShema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'name is required']
        },
        adressMail:{
            type: String,
            required: [true, 'adressMail is required']
        },
        message:{
            type: String,
            required: [true, 'message is required']

        }

    }
)


const Message = mongoose.model('Message',messageShema);
module.exports = Message;