import { Module, TDatabase } from '@appt/core';
import { Mongoose } from '@appt/mongoose';

import { name, database } from '@appt/core/config';

@Module({
   extend: TDatabase(Mongoose, database.uri, database.options)
})
export class MainModule {
   constructor(res){
      console.log(`${name} database is running at: ${database.uri}`)
   }
}