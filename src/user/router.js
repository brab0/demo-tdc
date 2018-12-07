import { Component } from '@appt/core';
import { TRouter } from '@appt/api';
import { Get, Post } from '@appt/api/router';

@Component({
   extend: TRouter('/user'),
   inject: 'UserController'
})
export class UserRouter {
   constructor(controller){
      this.controller = controller;
   }

   @Get('/')
   getAll(req, res, next){
      this.controller.getAll()
            .then(data => res.send(data))
            .catch(err => { throw new Error(err) })
   }

   @Get('/:_id')
   getById(req, res, next){
      this.controller.getById(req.params._id)
            .then(data => res.send(data))
            .catch(err => res.send('user not found'))
   }

   @Post('/')
   create(req, res, next){
      this.controller.create(req.body)
            .then(data => res.send(data))
            .catch(err => { throw new Error(err) })
   }

   @Post('/login')
   login(req, res, next){
      this.controller.login(req.body)
            .then(data => res.send(data))
            .catch(err => { throw new Error(err) })
   }
}