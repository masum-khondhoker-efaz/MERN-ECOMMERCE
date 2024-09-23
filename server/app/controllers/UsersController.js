
export const Login = async (req, res) => {
    try {
        return res.json({status: "Success", "Message": "User Login Successfully"})
    }
    catch (err){
        return res.json({status:"Failed","Message":err.toString()})
    }
}

export const VerifyLogin = async (req, res) => {
    try {
        return res.json({status: "Success", "Message": "Verify Login Successfully"})
    }
    catch (err){
        return res.json({status:"Failed","Message":err.toString()})
    }
}

export const CreateUserProfile = async (req, res) => {
    try {
        return res.json({status: "Success", "Message": "User Profile Created Successfully"})
    }
    catch (err){
        return res.json({status:"Failed","Message":err.toString()})
    }

}

export const UpdateUserProfile = async (req, res) => {
    try {
        return res.json({status: "Success", "Message": "Updated User Profile Successfully"})
        }
        catch (err){
            return res.json({status:"Failed","Message":err.toString()})
        }
}

export const ReadUserProfile = async (req, res) => {
    try {
        return res.json({status: "Success", "Message": "Read User Profile Successfully"})
    }
    catch (err){
        return res.json({status:"Failed","Message":err.toString()})
    }
}



