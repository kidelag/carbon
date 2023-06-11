# Hackathon 2023

### Equipe dev

Théo RACHER RAULIN (Pseudo git : TheoRacherR)

Eric ENIONA (Pseudo git : Vaalgtir)

Thushanth PATHMASEELAN (Pseudo git : pthushanth)

Matthieu CAMPAGNE (Pseudo git : kidelag)

### Fonctionnalités développées

Matthieu : Fonctionnalités Back en NestJS

Eric : Fonctionnalités Back en NestJS / Fixtures / Connexion front et back

Théo : Front

Thushanth : Fonctionnalités Front et Back

### Liste des fonctionnalités détaillées

Le compte SUPPORT est le compte admin. Il peut créer 3 types de comptes :

- Compte SUPPORT
- Compte CONSULTANT
- Compte CLIENT

La personne qui a un compte support peut :

- Remplir le profil d'un consultant avec les missions qu'il a déjà effectué
- Constituer en général le profil d'un consultant 
- Attribuer des badges à un consultant
- Créer des événements, que ce soit des formations ou des défis, associés à des compétences spécifiques

Le compte client permet de :
- Voir les consultants, leur compétences, leurs missions déjà effectuées
- Demander à recruter un consultant (la demande est ensuite gérée par le support)

Le consultant peut :

- Voir son profil
- Participer à des défis ou des formations et gagner des points sur certaines compétences
### Procédure d'installation et lancement de l'application

<code>docker compose up</code>

<code>npx fixtures load ./fixtures --dataSource=./dist/dataSource.module.js</code> (en local)

Comptes : 

SUPPORT : support@carbon.com / test
CONSULTANT : consultant@carbon.com / test
CLIENT : client@carbon.com / test
