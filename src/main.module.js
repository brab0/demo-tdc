import { Module } from '@appt/core';
import { DatabaseComponent } from './database.component';

@Module({
   declare: DatabaseComponent
})
export class MainModule {}