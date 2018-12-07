import { Component } from '@appt/core';
import { TSchema, SchemaProperties } from '@appt/mongoose';

@Component({
   extend: TSchema,
   inject: SchemaProperties
})
export class UserSchema {
   constructor({
      asString
   })
   {
      this.name = asString();

      this.email = asString();

      this.password = asString();
   }
}