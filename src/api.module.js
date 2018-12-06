import { Module } from '@appt/core';

@Module({
   declare: [
      'DatabaseComponent',
      'ServerComponent'
   ]
})
export class ApiModule {}