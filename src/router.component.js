import { Component } from '@appt/core';
import { TRouter } from '@appt/api';
import { Get } from '@appt/api/router';

@Component({
   extend: TRouter('/api'),
   inject: 'ModelComponent'
})
export class RouterComponent {
   constructor(model){
      this.model = model;
   }

   @Get('/greetings/:name')
   async grettings(req, res, next){
      try {
         const data = await this.model.find({});
         
         if(data.length === 0)
            res.send('Nenhum registro encontrado.');
         else
            res.send(data);
            
      } catch(err) {
         throw new Error(err)
      }
   }
}