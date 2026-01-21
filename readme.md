<img alt="Static Badge" src="https://img.shields.io/badge/Projet%20finalis%C3%A9-vert?style=flat&logoColor=vert">
# Projet 7 – Optimisez un site WordPress existant pour une marque de vêtements  
**Chic Dressing**

## 🎯 Objectif du projet
Ce projet a pour objectif d’optimiser un site WordPress existant pour une marque de vêtements, en améliorant :

- les **performances** (temps de chargement, poids des pages),
- l’**accessibilité** (contraste, lisibilité, bonnes pratiques),
- le **référencement naturel (SEO)**,
- le respect des **bonnes pratiques WordPress**.

Projet réalisé dans le cadre de la formation **Développeur WordPress – OpenClassrooms**.

---

## 🧩 Contexte
Le site est basé sur :
- le **thème parent Ashe**,
- un **thème enfant** utilisé pour toutes les optimisations,
- plusieurs extensions dédiées à la performance, au cache et à l’optimisation des ressources.

L’ensemble des optimisations a été réalisé **sans modifier le thème parent**, afin de garantir la maintenabilité et la compatibilité avec les mises à jour futures.

---

## 🛠️ Environnement de travail
- WordPress en local (XAMPP)
- PHP / MySQL
- Navigateur : Google Chrome
- Audits réalisés avec **Google Lighthouse**
- Suivi des performances via un **tableau Excel comparatif**
- Gestion de version avec **Git / GitHub**

---

## ⚙️ Optimisations réalisées

### 1. Performances
- Redimensionnement et optimisation des images existantes.
- Conversion des images en **WebP** via *Converter for Media*.
- Ajustement des tailles d’images appelées dans les templates PHP (`wp_get_attachment_image`).
- Priorisation de l’image principale du slider (LCP).
- Création d’un **slider mobile dédié**, plus léger et sans dépendances JS lourdes.
- Minification et optimisation du CSS et du JavaScript avec *Autoptimize*.
- Chargement différé des scripts non critiques.
- Mise en cache des pages avec *WP Super Cache*.
- Mise en cache navigateur via configuration `.htaccess`.

---

### 2. Accessibilité
- Correction des problèmes de contraste signalés par Lighthouse.
- Amélioration de la lisibilité du texte (couleurs et tailles de police).
- Correction des liens sans nom accessible (ajout de texte lisible par les lecteurs d’écran).
- Respect de la hiérarchie sémantique (H1 unique, H2/H3 cohérents).
- Vérification et complétion des attributs `alt` sur les images.

➡️ Une solution robuste a été mise en place via une **fonction dans `functions.php` injectant du CSS dans le `<head>` avec une priorité élevée**, afin de surcharger de manière fiable le CSS dynamique du thème parent.

---

### 3. SEO
- Optimisation des balises **meta title** et **meta description** avec les mots-clés stratégiques.
- Structure sémantique cohérente des contenus.
- Vérification des liens internes et des pages clés.

---

### 4. Bonnes pratiques WordPress
- Utilisation exclusive du **thème enfant** pour les modifications.
- Nettoyage du fichier `style.css` (suppression de règles inutiles ou redondantes).
- Correction de sélecteurs CSS invalides.
- Utilisation des **hooks WordPress** (`wp_head`, `wp_enqueue_scripts`, `add_filter`) pour des optimisations propres et réversibles.
- Désactivation des appels externes Google Fonts au profit d’un hébergement local (performance + RGPD).

---

## 📊 Audits Lighthouse
- Audits réalisés **avant** et **après** optimisation (desktop et mobile).
- Les variations mineures de scores entre plusieurs audits sont normales et liées à la simulation réseau/CPU de Lighthouse.
- Les critères principaux du projet sont respectés, notamment :
  - score Lighthouse desktop ≥ 70,
  - absence d’erreurs bloquantes en accessibilité,
  - amélioration significative des indicateurs de performance (TTFB, FCP, LCP).

---

## Conclusion
- Ce projet m’a permis d’optimiser un site WordPress existant en améliorant ses performances, son accessibilité et son référencement, tout en respectant les bonnes pratiques WordPress.
- Les optimisations mises en place privilégient des solutions stables et maintenables, basées sur l’analyse des audits Lighthouse et une compréhension du fonctionnement du thème et de la cascade CSS.
- Les résultats obtenus répondent aux critères du projet OpenClassrooms et améliorent concrètement l’expérience utilisateur.