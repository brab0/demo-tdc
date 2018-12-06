import { Module } from '@appt/core';

@Module({
   import: [
      'TrailModule',
      'UserModule'
   ],
   declare: [      
      'RouterComponent',
      'DatabaseComponent',      
      'ServerComponent'
   ]
})
export class ApiModule {}