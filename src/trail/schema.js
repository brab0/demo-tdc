import { Component } from '@appt/core';
import { TSchema, SchemaProperties } from '@appt/mongoose';

@Component({
   extend: TSchema,
   inject: SchemaProperties
})
export class TrailSchema {
   constructor({
      asString,
      asDate,
      asObjectId
   })
   {
      this.title = asString();

      this.date = asDate()

      this.talks = [{
         title: asString(),
         description: asString(),
         speaker: {
            _id: asObjectId(),
            name: asString(),
            email: asString()
         }
      }]
   }
}