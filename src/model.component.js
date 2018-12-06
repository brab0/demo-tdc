import { Component } from '@appt/core';
import { TModel } from '@appt/mongoose';

@Component({
   extend: TModel('SchemaComponent')
})
export class ModelComponent {}