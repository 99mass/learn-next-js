Réseau social
Objectifs
Vous devrez créer un réseau social similaire à Facebook qui comportera les fonctionnalités suivantes :

Abonnés
Profil
Publications
Groupes
Notifications
Chats
Instructions
Frontend
Le développement frontend consiste à créer des sites et des applications web qui s'affichent côté "client". Cela inclut tout ce que les utilisateurs vivent directement : couleurs et styles de texte, images, graphiques et tableaux, boutons, couleurs et menus de navigation. Il se concentre sur la réalisation de requêtes vers le backend pour obtenir des morceaux spécifiques de données à utiliser ou envoyer des données à stocker sur le backend.

HTML, CSS et Javascript sont les langages utilisés pour le développement frontend. La réactivité et les performances sont deux objectifs principaux du frontend. Des frameworks frontend peuvent être utilisés pour simplifier le travail des développeurs.

Framework
Vous devrez utiliser un framework JavaScript. Il vous appartient de choisir lequel vous allez utiliser.

Les frameworks vous aideront à organiser et à implémenter les fonctionnalités que vous souhaitez sur votre projet, afin que vous puissiez accomplir plus de travail de manière plus facile et plus rapide.

Certains des frameworks JS les plus connus sont :

Next.js
Vue.js
Svelte
Mithril
Attention : Notez que les frameworks JS diffèrent des bibliothèques JS. Les bibliothèques JS contiennent des extraits de code utilisés pour effectuer des fonctions JavaScript courantes, tandis que les frameworks vous aideront à établir les bases de votre projet JS.

Backend
Le backend englobe toute la technologie nécessaire pour traiter les demandes entrantes, générer et envoyer des réponses au client. Il est généralement divisé en trois parties majeures :

Serveur : c'est l'ordinateur qui reçoit les demandes. Il agit comme le point d'entrée pour toutes les demandes entrantes. Bien qu'il existe des machines spécialisées conçues à cet effet, vous pouvez utiliser votre propre ordinateur en tant que serveur.

Application (App) : c'est l'application exécutée sur le serveur qui écoute les demandes, récupère des informations de la base de données et envoie des réponses. C'est là que réside la logique principale de votre réseau social. Elle contient la logique de traitement des diverses demandes basées sur HTTP ou d'autres protocoles. Certaines de ces fonctions sont connues sous le nom de middleware, qui s'exécutent entre la réception d'une demande et l'envoi d'une réponse.

Base de données : Comme vous le savez déjà, la base de données est utilisée pour organiser et stocker des données. De nombreuses demandes envoyées au serveur impliquent des requêtes de base de données. Les clients peuvent demander des informations stockées dans la base de données ou soumettre des données à ajouter.

App
Le backend peut consister, comme indiqué ci-dessus, en une application contenant toute la logique backend. Cette logique aura donc plusieurs middleware, par exemple :

Authentification : comme HTTP est un protocole sans état, plusieurs méthodes peuvent être utilisées pour surmonter et authentifier un client/utilisateur. Vous devez utiliser des sessions et des cookies.

Gestion des images : prise en charge de divers types d'extensions. Dans ce projet, vous devez gérer au moins les types JPEG, PNG et GIF. Vous devrez stocker les images, cela peut se faire en enregistrant le fichier/chemin dans la base de données et en enregistrant l'image dans un système de fichiers spécifique.

Websocket : gestion des connexions en temps réel entre les clients. Cela aidera avec les discussions privées.

Pour le serveur web, vous pouvez jeter un œil à Caddy, il peut servir votre site, vos services et applications, et il est écrit en Go. Ou vous êtes libre de créer votre propre serveur web.

Sqlite
Pour stocker les données de votre réseau social, vous utiliserez la bibliothèque de base de données SQLite. Pour structurer votre base de données et obtenir de meilleures performances, nous vous conseillons vivement de jeter un coup d'œil au schéma entité-relation et d'en construire un basé sur votre propre base de données.

Pour en savoir plus sur SQLite, vous pouvez consulter la page SQLite.

Migration
Vous devrez créer des migrations pour ce projet afin que chaque fois que l'application est exécutée, elle crée les tables spécifiques nécessaires au bon fonctionnement du projet.

Pour cela, vous devez vous concentrer sur une structure de dossier similaire à celle-ci :

```
student$ tree .
backend
├── pkg
│   ├── db
│   │   ├── migrations
│   │   │   └── sqlite
│   │   │       ├── 000001_create_users_table.down.sql
│   │   │       ├── 000001_create_users_table.up.sql
│   │   │       ├── 000002_create_posts_table.down.sql
│   │   │       └── 000002_create_posts_table.up.sql
│   │   └── sqlite
│   |       └── sqlite.go
|   |
|   └── ...other_pkgs.go
|
└── server.go
```

La structure des dossiers est organisée de manière à vous aider à comprendre et à utiliser les migrations, où vous pouvez les appliquer en utilisant un chemin simple, par exemple : file://backend/pkg/db/migrations/sqlite. Vous pouvez l'organiser comme vous le souhaitez, mais n'oubliez pas que l'application des migrations et l'organisation des fichiers seront testées.

Pour les migrations, vous pouvez utiliser le package golang-migrate ou un autre package qui convient mieux à votre projet.

Toutes les migrations doivent être stockées dans un dossier spécifique, comme ci-dessus. Le fichier sqlite.go devrait présenter la connexion à la base de données, l'application des migrations et d'autres fonctionnalités utiles que vous pourriez avoir besoin d'implémenter.

Ce système de migration peut vous aider à gérer votre temps et vos tests en remplissant votre base de données.

Docker
Containeriser le Backend et le Frontend

Votre projet devrait se composer de deux images Docker, une pour le backend et une autre pour le frontend. Chune de ces conteneurs remplit un rôle spécifique et communique avec l'autre pour fournir une application de réseau social fonctionnelle.

Conteneur Backend :

Créez une image Docker pour le backend de votre application de réseau social. Ce conteneur exécutera la logique côté serveur de votre application, gérera les demandes des clients et interagira avec la base de données.

Conteneur Frontend :

Créez une image Docker pour le frontend de votre application de réseau social. Ce conteneur servira

 le code côté client, comme les fichiers HTML, CSS et JavaScript, aux navigateurs des utilisateurs. Il communiquera également avec le backend via des requêtes HTTP.

Conseils :

Nommez votre image Docker frontend de manière appropriée.
Assurez-vous que le conteneur backend expose les ports nécessaires pour la communication avec le frontend et les clients externes, et que le conteneur frontend expose le port approprié pour servir le contenu frontend aux navigateurs des utilisateurs.
Authentification
Pour que les utilisateurs puissent utiliser le réseau social, ils devront créer un compte. Vous devrez donc créer des formulaires d'inscription et de connexion. Pour s'inscrire, chaque utilisateur devra fournir au moins :

Email
Mot de passe
Prénom
Nom de famille
Date de naissance
Avatar/Image (facultatif)
Pseudo (facultatif)
À propos de moi (facultatif)
Notez que l'Avatar/Image, le Pseudo et À propos de moi devraient être présents dans le formulaire, mais l'utilisateur peut choisir de ne pas remplir ces champs.

Lorsque l'utilisateur se connecte, il doit rester connecté jusqu'à ce qu'il choisisse une option de déconnexion qui doit être disponible en tout temps. Pour cela, vous devrez implémenter des sessions et des cookies.

Vous pouvez implémenter votre propre package pour les sessions et les cookies, ou vous pouvez consulter certains packages pour vous aider.

Abonnés
En naviguant sur le réseau social, l'utilisateur devrait pouvoir suivre et ne plus suivre d'autres utilisateurs. Inutile de dire que pour ne plus suivre un utilisateur, vous devez le suivre.

En ce qui concerne le suivi de quelqu'un, l'utilisateur doit initier cela en envoyant une demande de suivi à l'utilisateur souhaité. L'utilisateur destinataire peut alors choisir d'"accepter" ou de "refuser" la demande. Cependant, si l'utilisateur destinataire a un profil public (comme expliqué dans la section suivante), ce processus de demande et d'acceptation est contourné, et l'utilisateur qui a envoyé la demande commence automatiquement à suivre l'utilisateur au profil public.

Profil
Chaque profil devrait contenir :

Informations sur l'utilisateur (toutes les informations demandées dans le formulaire d'inscription à l'exception du mot de passe, évidemment)
Activité de l'utilisateur
Chaque publication faite par l'utilisateur
Utilisateurs qui le suivent et utilisateurs qu'il suit (afficher les utilisateurs qui suivent le propriétaire du profil et ceux qu'il suit)
Il existe deux types de profils : un profil public et un profil privé. Un profil public affichera les informations spécifiées ci-dessus à chaque utilisateur sur le réseau social, tandis que le profil privé affichera ces mêmes informations uniquement à ses abonnés.

Lorsque l'utilisateur est sur son propre profil, une option doit être disponible pour lui permettre de rendre son profil public ou privé.

Publications
Après qu'un utilisateur se soit connecté, il peut créer des publications et commenter des publications déjà créées. Lors de la création d'une publication ou d'un commentaire, l'utilisateur peut inclure une image ou un GIF.

L'utilisateur doit pouvoir spécifier la confidentialité de la publication :

public (tous les utilisateurs du réseau social pourront voir la publication)
privé (seuls les abonnés du créateur de la publication pourront voir la publication)
presque privé (seuls les abonnés choisis par le créateur de la publication pourront la voir)
Groupes
Un utilisateur doit pouvoir créer un groupe. Le groupe devrait avoir un titre et une description donnée par le créateur, et il/elle peut inviter d'autres utilisateurs à rejoindre le groupe.

Les utilisateurs invités doivent accepter l'invitation pour faire partie du groupe. Ils peuvent également inviter d'autres personnes une fois qu'ils font déjà partie du groupe. Une autre façon d'entrer dans le groupe est de demander à en faire partie, et seul le créateur du groupe serait autorisé à accepter ou refuser la demande.

Pour faire une demande pour entrer dans un groupe, l'utilisateur doit d'abord le trouver. Cela sera possible en ayant une section où vous pouvez parcourir tous les groupes.

Lorsqu'un utilisateur est dans un groupe, il peut créer des publications et commenter les publications déjà créées. Ces publications et commentaires ne seront visibles que par les membres du groupe.

Un utilisateur appartenant au groupe peut également créer un événement, le rendant disponible pour les autres utilisateurs du groupe. Un événement devrait avoir :

Titre
Description
Jour/Heure
2 Options (au moins) :
Participer
Ne pas participer
Après la création de l'événement, chaque utilisateur peut choisir l'une des options pour l'événement.

Chat
Les utilisateurs devraient pouvoir envoyer des messages privés à d'autres utilisateurs qu'ils suivent ou qui les suivent, en d'autres termes, au moins l'un des utilisateurs doit suivre l'autre.

Lorsqu'un utilisateur envoie un message, le destinataire le recevra instantanément via Websockets s'il suit l'expéditeur ou si l'expéditeur a un profil public.

Les utilisateurs devraient pouvoir s'envoyer des emojis les uns aux autres.

Les groupes devraient avoir une salle de chat commune, donc si un utilisateur est membre du groupe, il/elle devrait pouvoir envoyer et recevoir des messages dans ce chat de groupe.

Notifications
Un utilisateur doit pouvoir voir les notifications sur chaque page du projet. Les nouvelles notifications sont différentes des nouveaux messages privés et doivent être affichées de manière différente !

Un utilisateur devrait être notifié s'il :

a un profil privé et qu'un autre utilisateur lui envoie une demande de suivi
reçoit une invitation à rejoindre un groupe, afin qu'il puisse refuser ou accepter la demande
est le créateur d'un groupe et qu'un autre utilisateur demande à rejoindre le groupe, afin qu'il puisse refuser ou accepter la demande
est membre d'un groupe et qu'un événement est créé
Toute autre notification créée par vous qui ne figure pas dans la liste est également la bienvenue.

Packages autorisés
Les packages Go standard sont autorisés
Gorilla websocket
golang-migrate
sql-migration
migration
sqlite3
bcrypt
UUID
Ce projet vous aidera à apprendre :

Authentification :
Sessions et cookies
Utilisation et configuration de Docker
Containerisation d'une application
Compatibilité/Dépendance
Création d'images
Langage SQL
Manipulation de bases de données
Migrations
Les bases du chiffrement
Websocket