# Test technique imperiatec
Application web de gestion d'une liste de tâches.  
Test technique dans le cadre d'une candidature pour un stage en tant que développeur web au sein de Imperiatec.   
<hr>
    
## Requirements  
- Python
- Node Package Manager

## Lancement du projet
Une fois le projet cloné, il faut accéder au projet et lancer les commandes suivantes dans un terminal: 
```
python manage.py runserver
```
Dans un autre terminal:
```
cd frontend
npm install
npm start
```
<br>
Quand les serveurs se sont bien lancés, on accède au projet depuis un navigateur avec l'url suivante <code>http://localhost:3000</code> (normalement si votre port 3000 n'est pas déjà utilisé).  
<hr>

### Précisions
Je n'ai pu développer que les fonctionnalités d'affichage et de suppression des tâches.  
Pour la création et la modification, pour l'instant ces fonctionnalités retournent une erreur, donc j'ai eu recours à l'interface proposée par Django REST Framework (accessible depuis l'url <code>http://localhost:8000/api</code>) afin de pouvoir tester l'application.  
J'ai essayé de fournir un projet fonctionnel et conforme au cdc mais j'ai eu du mal avec quelques erreurs retournées, cependant ce projet m'a permis d'apprendre énormément sur Django et React.js.

