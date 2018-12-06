import { Component } from '@appt/core';
import { TSchema } from '@appt/mongoose';

@Component({
   extend: TSchema
})
export class SchemaComponent {
   constructor(){
      this.name = {
         type: String,
         default: ''
      }

      this.email = {
         type: String,
         default: ''
      }

      this.password = {
         type: String,
         default: ''
      }
   }
}