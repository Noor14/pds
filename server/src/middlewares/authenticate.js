"use strict";

import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

export function authenticateToken(req, res, next){
  const reqHeader =  req.headers['authorization'];
  //Bearer accesstoken
  if(reqHeader && reqHeader.startsWith('Bearer')){
      const token = reqHeader && reqHeader.split(' ').pop();
      jwt.verify(token, process.env.SECRET_TOKEN, (err, user)=>{
        if(err) return res.sendStatus(401);
        next();
    })
  }else{
    res.sendStatus(401);
  }



}