import { Component } from '@appt/core';
import { TRouter } from '@appt/api';
import { Get } from '@appt/api/router';

@Component({
   extend: TRouter('/api')
})
export class RouterComponent {
   constructor(){}

   @Get('/greetings/:name')
   grettings(req, res, next){
      res.send(`Hello, ${req.params.name}!`);
   }
}