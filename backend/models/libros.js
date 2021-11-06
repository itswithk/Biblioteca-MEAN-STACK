import mongoose from "mongoose";

const libroSchema = new mongoose.Schema({
name:String,
description:String,
dbStatus:Boolean,
registerDate:{type:Date, default: Date.now},
});

const libro = mongoose.model("libros", libroSchema);

export default libro;