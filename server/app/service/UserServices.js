import SendEmail from "../utilities/EmailUtility.js";
import UsersModel from "../models/usersModel.js";
import {TokenEncode} from "../utilities/TokenUtility.js";

import profilesModel from "../models/profilesModel.js";

export const LoginService = async (req) => {
    try{
        let { email } = req.body;
        let code = Math.floor(10000+Math.random()*999999);
        let EmailText = `Your verification code is: ${code}`;
        let EmailSubject = 'Email verification';

        await SendEmail(email, EmailText,EmailSubject);
        await UsersModel.updateOne({email: email}, {$set: {otp: code}},{upsert: true});
        return {status:"Success", message:"6 Digit code sent to your email successfully"};
    }catch (error) {
        return  {status:"Failed", data:error.toString()};
    }

}

export const VerifyLoginService = async (req) => {
    try{
        let { email, otp } = req.body;
        let total = await UsersModel.find({email: email, otp: otp})

        if (total.length === 1) {
            let user_id = await UsersModel.find({email: email, otp: otp}).select('_id');
            let token = TokenEncode(email, user_id[0]['_id'].toString())
            await UsersModel.updateOne({email: email}, {$set: {otp: "0"}})

            return {status: "Success", message: "Your otp is valid", token: token};
        }
        else {
            return {status: "Failed", message: "Your otp is invalid"};
        }
    }catch (error) {
        return  {status:"Failed", data:error.toString()};
    }

}

export const CreateUserProfileService = async (req) => {
        try{
            let user_id = req.headers.user_id;
            let reqBody = req.body;
            reqBody.userID= user_id;
            await profilesModel.updateOne({userID: user_id},{$set:reqBody}, {upsert: true});
            return {status:"Success", message:"Profile created successfully"};
        }catch (error) {
            return  {status:"Failed", data:error.toString()};
        }
}


export const UpdateUserProfileService = async (req, res) => {
    try{
        let user_id = req.headers.user_id;
        let reqBody = req.body;
        reqBody.userID= user_id;
        await profilesModel.updateOne({userID: user_id},{$set:reqBody}, {upsert: true});
        return {status:"Success", message:"Profile created successfully"};
    }catch (error) {
        return  {status:"Failed", data:error.toString()};
    }
}


export const ReadUserProfileService = async (req, res) => {
    try{
        let user_id = req.headers.user_id;
        let data  = await profilesModel.findOne({userID: user_id});

        return {status:"Success",message:"Profile read successfully", data:data};
    }catch (error) {
        return  {status:"Failed", data:error.toString()};
    }

}


