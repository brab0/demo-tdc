import { Module } from '@appt/core';

@Module({
   declare: [
      'ModelComponent',
      'SchemaComponent',      
      'RouterComponent',
      'DatabaseComponent',      
      'ServerComponent'
   ]
})
export class ApiModule {}