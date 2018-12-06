import { Component } from '@appt/core';
import { TSchema } from '@appt/mongoose';

@Component({
   extend: TSchema
})
export class UserSchema {
   constructor(){
      this.name = {
         type: String,
         default: '',
         trim: ''
      }

      this.email = {
         type: String,
         default: '',
         trim: ''
      }
   }
}