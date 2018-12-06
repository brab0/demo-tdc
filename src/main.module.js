import { Module } from '@appt/core';
import { name } from '@appt/core/config';

@Module()
export class MainModule {
   constructor(){
      console.log(`${name} is running!`)
   }
}