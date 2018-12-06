import { Component } from '@appt/core';
import { TSchema, SchemaTypes } from '@appt/mongoose';

@Component({
   extend: TSchema
})
export class TrailSchema {
   constructor(){
      this.title = {
         type: String,
         default: '',
         trim: ''
      }

      this.date = {
         type: Date
      }

      this.talks = [{
         title: {
            type: String,
            default: '',
            trim: ''
         },
         description: {
            type: String,
            default: '',
            trim: ''
         },
         speaker: {
            _id: SchemaTypes.ObjectId,
            name: {
               type: String,
               default: '',
               trim: ''
            },
            email: {
               type: String,
               default: '',
               trim: ''
            }
         }
      }]
   }
}