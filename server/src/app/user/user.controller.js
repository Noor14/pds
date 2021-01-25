"use strict";

import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";


export function UserLogin(req, res){
 
 const user = {name: req.body.username};
 const accessToken = jwt.sign(user, process.env.SECRET_TOKEN)
 res.json({accessToken})

}