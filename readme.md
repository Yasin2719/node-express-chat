## NODE EXPRESS CHAT

etape 1: j'ai créer mes api.get pour la liste des messages, le nombre de tout les messages et la nombre de message part utilisateur puis je les ais tester( via postman et avec l'url).

Ayant commencer avec une base avec des données manquantes, il y'aura pour certain utilisateur une date ou un profil vide dans mongoDB.

J'ai ensuite, à l'aide de socket.io put gérer l'ajout de message grace à une fonction dans mon front (AddNewMsg) permettant d'emit sur un canal le message, l'user ID ainsi que la date. 

j'ai voulu gérer le pseudo avec le locale Storage(comme l'id) avec un message au lancement de l'appli demandant a l'utilisateur de rensigner le pseudo si la variable pseudo est a nulle (tout ça dans le index.html). Cependant, je ne pense pas avoir le temps de le faire car la mise à jour du tableau(des chat), et certain bugg rencontrer dans le main m'ont fait perdre du temps.

j'ai ensuite, à l'aide d'un fetch server/api, put remplir mon tableau. Cependant, il ne se charge qu'une seul fois car je n'est pas eut le temps de gérer le socket pour cette fonctionalité. Cependant, il se charge bien lors de la connexion.