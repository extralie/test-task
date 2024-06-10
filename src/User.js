import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";

const AutoIncrement = AutoIncrementFactory(mongoose);

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    age: {
        type: Number
    },

    role: {
        type: String
    }
}, {
    versionKey: false,
    toJSON: { 
        transform(_, ret) {
            delete ret._id;
        }
    }
});

schema.plugin(AutoIncrement, { inc_field: "id" }); // подключение auto-increment для назначения id юзера

/**
 * Модель дб
 */
const User = mongoose.model("user", schema);
export default User;