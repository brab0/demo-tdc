import { Component } from '@appt/core';
import { TServer } from '@appt/api';

import { name, server } from '@appt/core/config';

@Component({
   extend: TServer
})
export class ServerComponent {
   constructor(res){
      console.log(`${name} server is running at port: ${server.port}`)
   }
}