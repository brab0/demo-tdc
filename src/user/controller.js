import { Component } from '@appt/core';
import { auth } from '@appt/core/config';
import * as jwt from 'jsonwebtoken';

@Component({
   inject: 'User'
})
export class UserController {
   constructor(User){
      this.User = User;
   }

   async getAll(){
      const data = await this.User.find({})

      if(data.length === 0)
         return 'Nenhum registro encontrado.';
      
      return data;
   }

   async getById(_id){
      const data = await this.User.findOne({ _id })

      if(!data)
         return 'Nenhum registro encontrado.';
      
      return data;
   }

   create(body){
      return this.User.create(body);
   }

   async login(body){
      const res = await this.User.findOne(body)

      if(!res)
         throw 'Senha incorreta.';
      
      return jwt.sign({
         _id: res._id,
         name: res.name,
         email: res.email
      }, 
         auth.secret, 
      {
         expiresIn: "5 days"
      });
   }
}