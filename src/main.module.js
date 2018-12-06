import { Module } from '@appt/core';

@Module()
export class MainModule {
   constructor(){
      console.log('Appt is running!')
   }
}