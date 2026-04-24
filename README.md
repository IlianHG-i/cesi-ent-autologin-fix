# CESI ENT Autologin — Fix

Fix de l'extension **Thème noir + Autologin ENT CESI** pour supporter la nouvelle page d'identification `https://ent.cesi.fr/identification/wayf`.

L'extension d'origine ne gérait plus cette étape depuis la refonte du portail d'authentification CESI. Ce fix ajoute un content script qui remplit automatiquement l'identifiant et soumet le formulaire, puis laisse la chaîne d'auto-login existante prendre le relais (ADFS → ENT / Moodle).

## Fonctionnalités

- Auto-login sur `ent.cesi.fr/identification/wayf` (nouveau)
- Auto-login sur `wayf.cesi.fr`, `sts.viacesi.fr/adfs/ls/`
- Auto-login sur Moodle : `moodle-ingenieurs.cesi.fr`, `moodle.cesi.fr`, `moodle-examens.cesi.fr`
- Thème noir optionnel sur l'ENT et Moodle

## Installation (mode développeur)

### Chrome / Edge / Brave
1. `chrome://extensions`
2. Activer le **Mode développeur**
3. **Charger l'extension non empaquetée** → sélectionner le dossier du repo

### Firefox
1. `about:debugging#/runtime/this-firefox`
2. **Charger un module complémentaire temporaire** → sélectionner `manifest.json`

## Configuration

Cliquer sur l'icône de l'extension, puis renseigner :
- Identifiant `prénom.nom@viacesi.fr`
- Mot de passe
- (Optionnel) Activer le mode nuit

Les identifiants sont stockés dans `chrome.storage.sync` (local au navigateur / synchro compte Google si activée). Aucune donnée n'est envoyée ailleurs.

## Sites couverts

| Domaine | Rôle |
|---|---|
| `ent.cesi.fr/identification/wayf` | Saisie identifiant (nouveau) |
| `wayf.cesi.fr` | Sélection fournisseur |
| `sts.viacesi.fr/adfs/ls/` | Authentification ADFS (email + password) |
| `moodle-ingenieurs.cesi.fr` | Moodle ingénieurs |
| `moodle.cesi.fr` | Moodle principal |
| `moodle-examens.cesi.fr` | Moodle examens |

## Version

`4.8.5` — ajout du support `ent.cesi.fr/identification/wayf`.

## Crédits & statut

Ce dépôt est **uniquement un fix non-officiel** de l'extension originale *Thème noir + Autologin ENT CESI* de Hugo ([hugodevland.fr](https://www.hugodevland.fr/)). Je n'ai aucun droit sur l'œuvre originale ; ce patch est proposé gratuitement à titre de dépannage pour les utilisateurs bloqués par la nouvelle page d'identification CESI. Tous les droits restent la propriété de l'auteur original.

Si l'auteur original souhaite récupérer / intégrer ce fix ou demander son retrait, qu'il n'hésite pas à ouvrir une issue.
