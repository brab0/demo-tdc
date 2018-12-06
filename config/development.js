export default {
   name: 'ApptJs Demo',
   server: {
      port: 3000,
      options: { 
         cors: [{
            route: "/*",
            header: {
               "Access-Control-Allow-Origin": "*",
               "Access-Control-Allow-Headers": "Authorization, Content-Type, Origin, Accept, X-Requested-With, Origin, Cache-Control, X-File-Name",
               "Access-Control-Expose-Headers": "Filename",
               "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
            }
         }],
         statics: [{
            route: '/files',
            path: 'uploads/documents/'
         }]
      }
   },
   database: {
      uri: `mongodb://localhost:27017/demo`,
      options: { 
         useNewUrlParser: true,
         debug: true 
      }
   },
   auth: {
      secret: '98hr924bofjlasdash9f32bi2ntbg'
   }
}