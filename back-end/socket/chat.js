const sMessage = require('../models/exemple');
module.exports = function (io) {

  io.on('connection', (socket) => {
    console.log(`Connecté au client ${socket.id}`)
    io.emit('notification', { type: 'new_user', data: socket.id });
    // sMessage.count(socket.id, function(err, count){
    //   nbTotMsg = count;
    //   console.log("nombre tot: ", count);
    // });

    // Listener sur la déconnexion
    socket.on('disconnect', () => {
      console.log(`user ${socket.id} disconnected`);
      io.emit('notification', { type: 'removed_user', data: socket.id });
    });

      socket.on('plusMsg', (msg,date,id) =>{
        //création de l'objet chat de Mongoose
        const chat = new sMessage({
          userId: id,
          text: msg,
          number: 0,
          date: date,
          pseudo: "Yasin",
        });
            chat.save().then(() => {
            }).catch((error) => {
              res.status(400).json({error})
            })
          
      });
    // socket.on('plus-one', (id) => { 
    //   // Création de l'objet "click" de Mongoose (schéma)
    //   const click = new sClick({
    //       timestamp: new Date(),
    //       sessionid: socket.id,
    //       userid: id
    //   });
  
      // Sauvegarde dans la base de données
  //     click.save().then(() => {
  //         sClick.count({}, function(err, count){
  //             console.log( "Number of docs: ", count );
  //             io.emit('plus-one', count)
  //         });
  //     }).catch((error) => {
  //         console.log(error)
  //     })
      
  // });
  })
}