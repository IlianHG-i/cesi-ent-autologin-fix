# CESI ENT Autologin — Fix

Fix de l'extension **Thème noir + Autologin ENT CESI** pour supporter la nouvelle page d'identification `https://ent.cesi.fr/identification/wayf`.

L'extension d'origine ne gérait plus cette étape depuis la refonte du portail d'authentification CESI. Ce fix ajoute un content script qui remplit automatiquement l'identifiant et soumet le formulaire, puis laisse la chaîne d'auto-login existante prendre le relais (ADFS → ENT / Moodle).

## Fonctionnalités

- Auto-login sur `ent.cesi.fr/identification/wayf` (nouveau)
- Auto-login sur `wayf.cesi.fr`, `sts.viacesi.fr/adfs/ls/`
- Auto-login sur Moodle : `moodle-ingenieurs.cesi.fr`, `moodle.cesi.fr`, `moodle-examens.cesi.fr`
- Thème noir optionnel sur l'ENT et Moodle

## Installation

### 1. Récupérer le code

Deux options :

**Option A — Télécharger le ZIP** (plus simple)
1. Cliquer sur le bouton vert **Code** en haut de la page GitHub
2. **Download ZIP**
3. Extraire l'archive où tu veux (ex. `Documents/cesi-ent-autologin-fix`)

**Option B — Cloner avec git**
```bash
git clone https://github.com/IlianHG-i/cesi-ent-autologin-fix.git
```

### 2. Charger l'extension dans le navigateur

#### Chrome / Edge / Brave / Opera
1. Ouvrir `chrome://extensions` (ou `edge://extensions`, `brave://extensions`) dans la barre d'adresse
2. Activer le **Mode développeur** (toggle en haut à droite)
3. Cliquer sur **Charger l'extension non empaquetée**
4. Sélectionner le dossier extrait/cloné (**celui qui contient `manifest.json`**, pas un dossier parent)
5. L'icône de l'extension apparaît dans la barre d'outils — la fixer si besoin (punaise 📌)

#### Firefox
> ⚠️ En mode "temporaire", l'extension sera désinstallée à la fermeture de Firefox. Pour la garder, il faut l'installer depuis un fichier `.xpi` signé.
1. Ouvrir `about:debugging#/runtime/this-firefox`
2. Cliquer sur **Charger un module complémentaire temporaire…**
3. Sélectionner le fichier `manifest.json` dans le dossier du repo

### 3. Vérifier que ça fonctionne

1. Cliquer sur l'icône de l'extension, saisir email `prénom.nom@viacesi.fr` + mot de passe, **Sauvegarder**
2. Aller sur [https://ent.cesi.fr](https://ent.cesi.fr) — tu devrais être connecté automatiquement

### Mise à jour

Pour récupérer les dernières modifs :
- **ZIP** : retélécharger, remplacer le dossier, puis cliquer sur ↻ (recharger) dans `chrome://extensions`
- **Git** : `git pull` dans le dossier, puis ↻ dans `chrome://extensions`

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
