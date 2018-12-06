import { Module } from '@appt/core';

@Module({
   declare: [
      'TrailRouter',      
      'TrailController',
      'Trail',
      'TrailSchema'
   ]
})
export class TrailModule {}