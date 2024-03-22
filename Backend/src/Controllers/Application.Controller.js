
import { asyncHandler } from '../Utils/Asynchandler.js';
import { ApiError } from '../Utils/ApiError.js';
import {Application} from '../Models/Application.Models.js'
import { ApiResponse } from '../Utils/ApiResponse.js';

const submitCode = asyncHandler(async (req,res)=>{
      // taking data from fronted 
      const {userName, sourceCode , inputCode , codeLanguage,time} = req.body ;
      //console.log(userName,sourceCode, inputCode, codeLanguage,time);
    // checking the data it is valid or not 
    if([userName,sourceCode,inputCode,codeLanguage].some((field)=>field?.trim() === "")){
        throw new ApiError(400,"All fields are required ")
    }

    // creating new field 
    const user =  await Application.create({
        userName,
        sourceCode,
        codeLanguage,
        inputCode,
        time

    })
    // giving response in the client side 
    return res.status(201).json(
        new ApiResponse(200, user, "User created successfully ")
    )
})



const showUser = asyncHandler(async (req, res) => {
    const users = await Application.find();
  
    return res
      .status(201)
      .json(new ApiResponse(200, users, "users fetched successfully"));
  });
export {submitCode,showUser}