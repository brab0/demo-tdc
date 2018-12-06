import { Component, TDatabase } from '@appt/core';
import { Mongoose } from '@appt/mongoose';

import { name, database } from '@appt/core/config';

@Component({
   extend: TDatabase(Mongoose, database.uri, database.options)
})
export class DatabaseComponent {
   constructor(res){
      console.log(`${name} database is running at: ${database.uri}`)
   }
}