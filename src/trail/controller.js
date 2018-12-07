import { Component } from '@appt/core';

@Component({
   inject: 'Trail'
})
export class TrailController {
   constructor(Trail){
      this.Trail = Trail;
   }

   async getAll(){
      const data = await this.Trail.find({})

      if(data.length === 0)
         return 'Nenhum registro encontrado.';
      
      return data;
   }

   async getById(_id){
      const data = await this.Trail.findOne({ _id })

      if(!data)
         return 'Nenhum registro encontrado.';
      
      return data;
   }

   create(body){
      return this.Trail.create(body);
   }

   update(_id, body){
      return this.Trail.findOneAndUpdate({ 
         _id: _id 
      }, {
         $set: body
      }, {
          new: true
      });
   }

   delete(_id){
      return this.Trail.remove({ _id });
   }
}