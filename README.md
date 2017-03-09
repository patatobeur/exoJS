#REVISION JS:
Reprenez le cours JS d'OpenClass et normalement le premier exo(coir app.js) ne devrait pas trop vous poser de probleme :
https://github.com/Simplon-Narbonne/exoJS  

#Conditions :
- Fork ce repositorie et travailler sur ce fork en pushant vos solutions directement dessus votre fork, ne clonez ou ne téléchargez pas car il ne sera pas possible de pushé sur le dépot de Simplon Narbonne, vous n'avez pas les droits  

#NOUVEAUX COURS :
- Les requetes HTTP:  
https://openclassrooms.com/courses/les-requetes-http
Les requetes que nous faisons en général(mise à part les formulaires) se font en GET par défaut(possibilité d'envoyer des données dans l'URL quand même)  

ON utilise POST pour envoyer des données à l'intérieur des entetes HTTP  

- AJAX avec Jquery (possible aussi en JS natif aussi)  

- JSON ( format de données ):  
JavaScript Object Notation  
Un document JSON ne comprend que deux types d'éléments structurels :  

Des ensembles de paires nom / valeur ;  
Des listes ordonnées de valeurs.  

Regarder sur wikipedia la différence entre les 2 autres formats utilisés aussi dans des web services XML( SOAP) ou YAML plutot pour des fichiers de configuration (comme les .ini sous windows pour ceux qui commencent )  
https://fr.wikipedia.org/wiki/JavaScript_Object_Notation

Réaliser un objet JSON contenant vos pseudo's Github  

Et faire un script JS qui affiche le nom de l'école dans la console chaque pseudo  

- API en REST (JSON) :
Les API permettent via des méthodes disponibles publiquement ou privée mais alors via une authenfication(TOKEN, clef API...) de récupérer ou ajouter des données depuis un site(souvent ne nous appartenant pas) via de simples requetes, on parle de verbe HTTP ( GET->récupérer, POST->envoyer, UPDATE->mettre à jour une donnée existante, DELETE->effacer une donnée...)  


Exemple d'API:  
Slack :  
https://api.slack.com/methods  

Github :  
https://api.github.com/users/Boyquotes  
ou  
pour voir les depots :  
https://api.github.com/users/Boyquotes/repos  
En ligne de commande  
curl https://api.github.com/users/Boyquotes  

Meetup.com, Twitter, Facebook  

http://192.168.1.104/
