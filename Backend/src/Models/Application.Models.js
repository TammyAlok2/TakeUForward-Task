import mongoose, {Schema} from "mongoose";
const ApplicationSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  codeLanguage:{
    type:String,
    required:true,
  },
  sourceCode:{
    type:String,
    requried:true
  },
  inputCode:{
    type:String,
    required:true,
  },
  time:{
    type:String,
  }
  
},{
    timestamps:true
});

export const Application =  mongoose.model("Application",ApplicationSchema)

