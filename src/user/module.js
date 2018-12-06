import { Module } from '@appt/core';

@Module({
   declare: [
      'UserRouter',      
      'UserController',
      'User',
      'UserSchema'
   ]
})
export class UserModule {}