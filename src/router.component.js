import { Component } from '@appt/core';
import { TRouter } from '@appt/api';

@Component({
   extend: TRouter('/api', {
      children: [
         'TrailRouter',
         'UserRouter'
      ]
   })
})
export class RouterComponent {}