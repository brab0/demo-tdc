import { Component } from '@appt/core';
import { auth } from '@appt/core/config';
import { TRouter } from '@appt/api';
import { Get, Post, Put, Delete } from '@appt/api/router';

@Component({
   extend: TRouter('/trail', {
      auth: {
         secret: auth.secret
      }
   }),
   inject: 'TrailController'
})
export class TrailRouter {
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
         .catch(err => { throw new Error(err) })
   }

   @Post('/')
   async create(req, res, next){
      this.controller.create(req.body)
         .then(data => res.send(data))
         .catch(err => { throw new Error(err) })
   }

   @Put('/:_id')
   async update(req, res, next){
      this.controller.update(req.params._id, req.body)
         .then(data => res.send(data))
         .catch(err => { throw new Error(err) })
   }

   @Delete('/:_id')
   async delete(req, res, next){
      this.controller.delete(req.params._id)
         .then(data => res.send(data))
         .catch(err => { throw new Error(err) })
   }
}