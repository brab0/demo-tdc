import { Module } from '@appt/core';

@Module({
   declare: [
      'DatabaseComponent',
      'RouterComponent',
      'ServerComponent'      
   ]
})
export class ApiModule {}