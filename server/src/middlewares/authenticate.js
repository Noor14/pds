"use strict";

import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import userBlackList from '../app/user/userBlackList.model.js';

export function authenticateToken(req, res, next){
  const reqHeader =  req.headers['authorization'];
  //Bearer accesstoken
  if(reqHeader && reqHeader.startsWith('Bearer')){
      const token = reqHeader && reqHeader.split(' ').pop();
      userBlackList.findOne({ token: { $eq: token } }, (error, succ) => {

        // case: DB error
        if (succ) {
         return res.sendStatus(401);
        }
        jwt.verify(token, process.env.SECRET_TOKEN, (err, user)=>{
            if(err) return res.sendStatus(401);
        next();
        });
    
    })
  }else{
    res.sendStatus(401);
  }



}