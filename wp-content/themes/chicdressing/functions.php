<?php
/*
Theme Name: Chic Dressing Child
Description: Fonctions personnalisées et optimisations de performance
Version: 1.1.0
*/

/* ==================================================== */
/* 1. CHARGEMENT DES STYLES Parent & Enfant             */
/* ==================================================== */
add_action('wp_enqueue_scripts', 'chicdressing_enqueue_styles'); // Priorité par défaut 10
function chicdressing_enqueue_styles() { // Chargement des styles CSS
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css'); // Thème parent
    wp_enqueue_style('child-style', get_stylesheet_uri(), ['parent-style'], wp_get_theme()->get('Version'));// Thème enfant
}

/* ==================================================== */
/* 2. OPTIMISATIONS DES IMAGES                          */
/* ==================================================== */

// Empêche WordPress de générer des images "géantes" (2560px+) inutiles
add_filter('big_image_size_threshold', '__return_false'); // Désactive la fonctionnalité native

// Force une taille raisonnable pour les miniatures du thème pour éviter le chargement de fichiers énormes
add_filter('post_thumbnail_size', 'override_ashe_thumbnail_size'); // Pour le thème Ashe

function override_ashe_thumbnail_size($size) {  // Redéfinit la taille des miniatures
    if ($size === 'ashe-full-thumbnail') { // Taille par défaut 1920px
        return 'medium-large'; // On force "medium-large" (768px max) pour de meilleures performances
    }
    return $size; // Retourne la taille inchangée pour les autres cas
}// Fin de la fonction override_ashe_thumbnail_size

/* ==================================================== */
/* 3. OPTIMISATIONS DES POLICES FONTS                   */
/* ==================================================== */
/* ========================================================================== */
/* 3.1 Désactive les Google Fonts du thème parent pour utiliser les locales   */
/* ========================================================================== */
add_action('wp_enqueue_scripts', 'dequeue_google_fonts', 20); // Priorité 20 pour s'assurer que c'est après le thème parent
function dequeue_google_fonts() { // Désenregistre les Google Fonts
    $handles = ['ashe-playfair-font', 'ashe-opensans-font', 'ashe-kalam-font']; // Identifiants des styles Google Fonts du thème parent
    foreach ($handles as $handle) { // Boucle pour désenregistrer chaque style
        wp_dequeue_style($handle); // Désenregistre le style
        wp_deregister_style($handle); // Désactive le style
    }// Fin de la boucle
}

/* ======================================================== */
/* 3.2 Préchargement des polices locales pour le LCP/FCP    */
/* ======================================================== */
add_action('wp_head', 'preload_fonts');// Ajoute dans le head
function preload_fonts() { // Précharge les polices locales
    $font_path = get_stylesheet_directory_uri() . '/fonts/'; // Chemin vers le dossier des polices locales
    // Préchargement des polices Playfair Display et Open Sans en WOFF2 avec attributs nécessaires
    echo '<link rel="preload" href="' . $font_path . 'playfair-display-v40-latin-regular.woff2" as="font" type="font/woff2" crossorigin>' . "\n";// Playfair Display Regular
    echo '<link rel="preload" href="' . $font_path . 'playfair-display-v40-latin-700.woff2" as="font" type="font/woff2" crossorigin>' . "\n";// Playfair Display Bold
    echo '<link rel="preload" href="' . $font_path . 'open-sans-v44-latin-regular.woff2" as="font" type="font/woff2" crossorigin>' . "\n";// Open Sans Regular
    echo '<link rel="preload" href="' . $font_path . 'open-sans-v44-latin-700.woff2" as="font" type="font/woff2" crossorigin>' . "\n";// Open Sans Bold
    echo '<link rel="preload" href="' . $font_path . 'open-sans-v44-latin-italic.woff2" as="font" type="font/woff2" crossorigin>' . "\n";// Open Sans Italic
    echo '<link rel="preload" href="' . $font_path . 'fa-solid-900.woff2" as="font" type="font/woff2" crossorigin>' . "\n";// Font Awesome Solid
    echo '<link rel="preload" href="' . $font_path . 'kalam-v18-latin-regular.woff2" as="font" type="font/woff2" crossorigin>' . "\n";// Kalam Regular
    echo '<link rel="preload" href="' . $font_path . 'kalam-v18-latin-700.woff2" as="font" type="font/woff2" crossorigin>' . "\n";// Kalam Bold

} // 

/* ========================================================= */
/*  3.3 PERF : supprimer le preconnect inutile fonts.gstatic */
/* ========================================================= */
add_filter('wp_resource_hints', function ($urls, $relation_type) {// Filtre pour nettoyer les preconnects
    if ($relation_type !== 'preconnect') return $urls; // Ne traiter que les preconnects

    return array_values(array_filter($urls, function ($url) { // Filtre pour enlever fonts.gstatic.com
        $href = is_array($url) ? ($url['href'] ?? '') : $url; // Récupère l'URL
        return (strpos($href, 'fonts.gstatic.com') === false); // Garde uniquement si ce n'est pas fonts.gstatic.com
    })); // Retourne les URLs filtrées
}, 10, 2); // Priorité 10, 2 arguments

/* ==================================================== */
/* 4. IMAGE OPTIMISATIONS LCP & PRODUITS WOOCOMMERCE    */
/* ==================================================== */
/* ==================================================== */
/* 4.1 PRÉCHARGEMENT IMAGE HEADER SUR L'ACCUEIL          */
/* ==================================================== */
add_action('wp_head', 'preload_header_image', 1); // Priorité 1 pour être en tout début du head
function preload_header_image() { // Précharge l'image d'en-tête uniquement sur l'accueil
    if (!is_home() && !is_front_page()) return; // Seulement sur l'accueil

    $url = get_header_image(); // Récupère l'URL de l'image d'en-tête
    if (!$url) return; // Si pas d'image, on sort

    echo '<link rel="preload" as="image" href="' . esc_url($url) . '" fetchpriority="high">' . "\n"; // Précharge l'image avec priorité haute
} // Fin de la fonction preload_header_image

/* ==================================================== */
/* 4.2 OPTIMISATION LCP Turbo Image Produit              */
/* ==================================================== */

// Variable globale pour compter les produits
$prod_counter = 0; // Initialisation du compteur

// Fonction pour remettre le compteur à zéro appelée dans index.php avant la boucle produits
function reset_product_counter() { // Réinitialise le compteur de produits
    global $prod_counter; // Accède à la variable globale
    $prod_counter = 0; // Remet le compteur à zéro
} // Fin de la fonction reset_product_counter

add_filter('woocommerce_product_get_image', 'turbo_smart_image', 10, 5);

function turbo_smart_image($html, $product, $size, $attr, $placeholder) {
    // IMPORTANT : sur l'accueil (LCP = header), on ne priorise PAS les produits
    if (is_home() || is_front_page()) {
        return $html;
    }

    return $html;
}

/* ==================================================== */
/* 5. NETTOYAGE DES SCRIPTS JS                          */
/* ==================================================== */
/* ============================================================================================ */
/* 5.1 Nettoyage des scripts inutiles sur l'accueil Utilisation des fonctions natives WordPress */
/* ============================================================================================ */
add_action('wp_enqueue_scripts', 'remove_unused_js', 999); // Priorité élevée pour s'assurer que c'est après tous les enregistrements
function remove_unused_js() { // Fonction de nettoyage des scripts JS
    if (is_front_page()) { // Si on est sur l'accueil, on vire le JS inutile
        // Liste des scripts à bannir de l'accueil
        $scripts_to_remove = ['contact-form-7', 'grecaptcha', 'google-recaptcha']; // Contact Form 7 et reCAPTCHA
        foreach ($scripts_to_remove as $script) { // Boucle pour désenregistrer chaque script
            wp_dequeue_script($script);// Désenregistre le script
            wp_deregister_script($script);// Désactive le script
        }// Fin de la boucle
    }// Fin de la condition accueil

    // Gestion spécifique de reCAPTCHA (chargement uniquement sur page contact)
    // On suppose que la page de contact a le slug 'contact' ou 'contactez-nous'
    if (!is_page('contact') && !is_page('contactez-nous')) { // Si on n'est pas sur la page contact 
        wp_dequeue_script('google-recaptcha'); // Désenregistre le script reCAPTCHA
        wp_dequeue_script('wpcf7-recaptcha'); // Désenregistre le script CF7 reCAPTCHA

    }
}

/* ==================================================== */
/* 5.2 Différer le chargement des scripts JS (DEFER)    */
/* ==================================================== */
add_filter('script_loader_tag', 'defer_scripts', 10, 3); // Priorité 10, 3 arguments
function defer_scripts($tag, $handle, $src) { // Fonction pour ajouter l'attribut DEFER
    if (is_admin()) return $tag; // Ne rien faire dans l'admin
       // On n'ajoute pas DEFER si le script a déjà async ou defer
    if (strpos($tag, ' defer') !== false) return $tag; // Déjà différé
    if (strpos($tag, ' async') !== false) return $tag; // Déjà asynchrone
    if (strpos($tag, 'type="module"') !== false || strpos($tag, "type='module'") !== false) return $tag; // Modules JS déjà différés par nature

    // Liste des scripts à exclure du DEFER
    $no_defer = array(// Ajoute ici les handles des scripts à exclure du DEFER
        // 'un-handle-a-exclure'
    );// Fin de la liste
    if (in_array($handle, $no_defer, true)) { // Si le script est dans la liste
        return $tag; // Retourne le tag inchangé
    } // Fin de la condition liste

    // Pour tous les autres scripts sur PC on diffère
    return str_replace(' src', ' defer src', $tag); // Ajoute DEFER
} // Fin de la fonction defer_scripts

/* ========================================================== */
/* 6. OPTIMISATIONS EXTERNES Embeds                            */
/* Chargement différé Lazy Load pour Twitter et Instagram     */
/* ========================================================== */
add_action('wp_footer', 'load_external_embeds_lazy', 20);// Priorité 20 pour s'assurer que c'est en bas de page
function load_external_embeds_lazy() { // Fonction pour charger les embeds de manière différée
    ?> 
    <script>
    (function() { // IIFE pour éviter les conflits
        function loadExternalEmbeds() { // Fonction pour charger les scripts externes
            // Instagram
            if (document.querySelector('.instagram-media') && !document.getElementById('instagram-embed-js')) { // Si un embed Instagram est présent et le script n'est pas déjà chargé
                var s = document.createElement('script'); s.id = 'instagram-embed-js'; // Crée le script
                s.src = '//www.instagram.com/embed.js'; s.async = true; // Définit la source et l'asynchrone
                document.body.appendChild(s); // Ajoute le script au body
            } // Fin de la condition Instagram
            // Twitter
            if (document.querySelector('.twitter-timeline') && !document.getElementById('twitter-wjs')) { // Si un embed Twitter est présent et le script n'est pas déjà chargé
                var s = document.createElement('script'); s.id = 'twitter-wjs'; // Crée le script
                s.src = 'https://platform.twitter.com/widgets.js'; s.async = true; // Définit la source et l'asynchrone
                document.body.appendChild(s); // Ajoute le script au body
            } // Fin de la condition Twitter
        } // Fin de la fonction loadExternalEmbeds
        // Déclencheur interaction utilisateur (scroll, click, touch)
        ['click','scroll','mousemove','touchstart','keydown'].forEach(function(evt) { // Pour chaque type d'événement
            window.addEventListener(evt, loadExternalEmbeds, { once: true, passive: true }); // Ajoute un écouteur d'événement qui se déclenche une seule fois
        }); // Fin de la boucle des événements
    })(); // Fin de l'IIFE
    </script> 
    <?php
}// Fin de la fonction load_external_embeds_lazy

/* ==================================================== */
/* 7. OPTIMISATIONS CSS Autoptimize                     */
/* ==================================================== */

// Chargement non-bloquant du CSS généré par Autoptimize
add_filter('style_loader_tag', 'optimize_css_loading', 10, 4); // Priorité 10, 4 arguments
function optimize_css_loading($html, $handle, $href, $media) { // Fonction pour optimiser le chargement du CSS
    if (is_admin() || is_front_page()) return $html; // Ne rien faire dans l'admin ou si href vide 

    // Cible uniquement le CSS d'Autoptimize
    if (strpos($href, '/autoptimize/') !== false) { // Si le href contient /autoptimize/
        $href = esc_url($href); // Sécurise l'URL
        // Technique du "media swap" pour ne pas bloquer le rendu
        $out  = "<link rel='stylesheet' href='{$href}' media='print' onload=\"this.media='all'\">"; // Chargement différé
        $out .= "<noscript><link rel='stylesheet' href='{$href}'></noscript>"; // Fallback pour les navigateurs sans JS
        return $out; // Retourne le nouveau HTML
    } // Fin de la condition Autoptimize
    
    return $html;// Retourne le HTML inchangé pour les autres styles
}// Fin de la fonction optimize_css_loading



/* ==================== */
/* 8. SLIDER MOBILE     */
/* ==================== */
/* ==================================================== */
/* 8.1 Slider Mobile : Script de gestion du slider      */
/* ==================================================== */
add_action('wp_footer', 'mobile_slider_script'); // Ajoute dans le footer

function mobile_slider_script() { // Script JS pour le slider mobile
    if ( ! is_home() && ! is_front_page() ) return; // Seulement sur l'accueil
    ?>
    <script>
    document.addEventListener("DOMContentLoaded", function() { // Attendre que le DOM soit chargé
        const slider = document.getElementById('mobile-slider'); // Sélectionne le slider mobile
        if (!slider) return; // Si pas de slider, on sort

        const slides = slider.querySelectorAll('.mobile-slide'); // Sélectionne toutes les slides
        const dots = document.querySelectorAll('.slider-dots button'); // Sélectionne tous les boutons de navigation
        const slideCount = slides.length; // Nombre total de slides (y compris les clones)

        // On initialise sur la slide 1 (index 1 car index 0 est le clone)
        slider.scrollLeft = slider.offsetWidth; // Positionne sur la première vraie slide 

        let isScrolling; // Variable pour le timeout de scroll

        slider.addEventListener('scroll', function() { // Événement de scroll
            clearTimeout(isScrolling); // Nettoie le timeout précédent

            // Points actifs pendant le scroll
            const index = Math.round(slider.scrollLeft / slider.offsetWidth); // Calcule l'index actuel

            let realIndex = index - 1; // ignorer le clone au début
            if (realIndex < 0) realIndex = dots.length - 1; // Si avant la première, aller au dernier
            if (realIndex >= dots.length) realIndex = 0; // Si après la dernière, aller au premier

            dots.forEach(d => d.classList.remove('active')); // Retire la classe active de tous les dots
            if (dots[realIndex]) dots[realIndex].classList.add('active'); // Ajoute la classe active au dot actuel

            // Téléportation pour boucle infinie
            isScrolling = setTimeout(function() { // Timeout après le scroll
                if (index === 0) {  // Si on est sur le clone du début
                    slider.style.scrollBehavior = 'auto'; // Désactive le scroll lisse
                    slider.scrollLeft = slider.offsetWidth * (slideCount - 2); // Va à la dernière vraie slide
                    slider.style.scrollBehavior = 'smooth'; // Réactive le scroll lisse
                } else if (index === slideCount - 1) { // Si on est sur le clone de la fin
                    slider.style.scrollBehavior = 'auto'; // Désactive le scroll lisse
                    slider.scrollLeft = slider.offsetWidth; // Va à la première vraie slide
                    slider.style.scrollBehavior = 'smooth'; // Réactive le scroll lisse
                } // Fin des conditions de téléportation
            }, 150); // Délai pour détecter la fin du scroll
        }); // Fin de l'événement de scroll

        // Clic sur les dots
        dots.forEach(dot => { // Pour chaque dot
            dot.addEventListener('click', function() { // Événement de clic
                const targetIndex = parseInt(this.getAttribute('data-target'), 10); // Récupère l'index cible
                slider.scrollTo({ // Scroll vers la slide cible
                    left: slider.offsetWidth * (targetIndex + 1), // +1 à cause du clone
                    behavior: 'smooth' // Scroll lisse
                }); // Fin du scrollTo
            }); // Fin de l'événement de clic
        }); // Fin de la boucle des dots

        // Ajustement au redimensionnement
        window.addEventListener('resize', () => { // Événement de redimensionnement
            slider.scrollLeft = slider.offsetWidth; // Repositionne sur la première vraie slide
        }); // Fin de l'événement resize
    }); // Fin de l'événement DOMContentLoaded
    </script> 
    <?php
}

/* ==================================================== */
/*  8.2 LIMITER LE SRCSET DES IMAGES DU SLIDER MOBILE   */
/* ==================================================== */
add_filter('wp_calculate_image_srcset', 'limit_mobile_slider_srcset', 10, 5); // Priorité 10, 5 arguments
function limit_mobile_slider_srcset($sources, $size_array, $image_src, $image_meta, $attachment_id) { // Limite le srcset pour le slider mobile

    // On limite uniquement pendant le rendu du slider mobile
    if (empty($GLOBALS['mobile_slider_rendering'])) { // Si on n'est pas en train de rendre le slider mobile
        return $sources; // On ne fait rien
    } // Fin de la condition de rendu

    //  Seulement sur mobile
    if (!wp_is_mobile()) { // Si on n'est pas sur mobile
        return $sources; // On ne fait rien
    } // Fin de la condition mobile

    //  On garde max 1024px (suffisant même sur DPR 2/3 sans aller chercher 2048)
    foreach ($sources as $width => $source) { // Boucle sur les sources
        if ((int) $width > 1024) { // Si la largeur est supérieure à 1024px
            unset($sources[$width]); // On la supprime
        } // Fin de la condition de largeur
    } // Fin de la boucle

    return $sources; // Retourne les sources modifiées
} // Fin de la fonction limit_mobile_slider_srcset

/* ==================================================== */
/* 8.3 LIMITER LE SRCSET DES MINIATURES PRODUITS HOME    */
/* ==================================================== */
add_filter('wp_calculate_image_srcset', 'limit_home_product_thumb_srcset', 10, 5); // Priorité 10, 5 arguments
function limit_home_product_thumb_srcset($sources, $size_array, $image_src, $image_meta, $attachment_id) { // Limite le srcset pour les miniatures produits sur l'accueil
    if (!is_home() && !is_front_page()) return $sources; // Si on n'est pas sur l'accueil, on ne fait rien

    // Si on est sur une image "petite" (thumbnail produit typiquement ~300px)
    if (!empty($size_array[0]) && (int)$size_array[0] <= 300) { // Si la largeur est inférieure ou égale à 300px
        // On garde max 600px (suffisant même sur DPR 2/3 sans aller chercher plus grand)
        foreach ($sources as $width => $source) { // Boucle sur les sources
            if ((int)$width > 600) { // Si la largeur est supérieure à 600px
                unset($sources[$width]); // On la supprime
            } // Fin de la condition de largeur
        } // Fin de la boucle
    } // Fin de la condition de taille

    return $sources; // Retourne les sources modifiées
} // Fin de la fonction limit_home_product_thumb_srcset

/* ==================================================== */
/* 9. CHARGEMENT DIFFÉRÉ DE LA CARTE GOOGLE MAP         */
/* ==================================================== */  
add_action('wp_footer', 'lazy_load_home_map', 50); // Priorité 50 pour être en fin de footer

function lazy_load_home_map() { // Chargement différé de la carte Google Map sur l'accueil
    if (!is_home() && !is_front_page()) return; // Seulement sur l'accueil
    ?>
    <script>// Script pour charger la carte Google Map de manière différée
    document.addEventListener("DOMContentLoaded", () => { // Attendre que le DOM soit chargé
      const iframe = document.querySelector('iframe.cd-map[data-src]'); // Sélectionne l'iframe de la carte avec data-src
      if (!iframe) return; // Si pas d'iframe, on sort

      const loadMap = () => { // Fonction pour charger la carte
        if (iframe.dataset.loaded) return; // Si déjà chargé, on sort
        iframe.src = iframe.dataset.src; // Définit la source de l'iframe
        iframe.dataset.loaded = "1"; // Marque comme chargé
      }; // Fin de la fonction loadMap

      // Utilisation d'Intersection Observer pour charger quand l'iframe est proche du viewport
      if ("IntersectionObserver" in window) { // Si le navigateur supporte Intersection Observer
        const io = new IntersectionObserver((entries) => { // Crée un nouvel observateur
          entries.forEach(e => { // Pour chaque entrée
            if (e.isIntersecting) { // Si l'iframe est dans le viewport
              loadMap(); // Charge la carte
              io.disconnect(); // Déconnecte l'observateur
            } // Fin de la condition isIntersecting
          }); // Fin de la boucle des entrées
        }, { rootMargin: "200px" }); // Marge pour précharger avant d'entrer dans le viewport

        io.observe(iframe); // Observe l'iframe
      } else { 
        // Fallback : chargement après un délai de 3 secondes
        setTimeout(loadMap, 3000); 
      } // Fin du else
    }); // Fin de l'événement DOMContentLoaded
    </script> <!-- Fin du script de chargement différé -->
    <?php
} // Fin de la fonction lazy_load_home_map

/* ===================================================== */
/* 10. FIX LAZYLOAD GUTENBERG GALLERIES                  */
/* Ajoute data-skip-lazy aux images des galeries         */
/* Gutenberg pour éviter le lazyload natif problématique */
/* ===================================================== */
add_filter('the_content', 'cd_skip_lazy_for_gutenberg_galleries', 20); // Priorité 20 pour s'assurer que c'est après le rendu du contenu
function cd_skip_lazy_for_gutenberg_galleries($content) { // Fonction pour ajouter data-skip-lazy
    if (!is_singular('post')) { // Seulement pour les articles
        return $content; // Retourne le contenu inchangé
    } // Fin de la condition article

    // Utilise une expression régulière pour trouver les galeries et ajouter l'attribut
    $content = preg_replace_callback( // Utilise une fonction de rappel pour la regex
        '/<figure[^>]*class="[^"]*wp-block-gallery[^"]*"[^>]*>.*?<\/figure>/is', // Trouve les figures de galerie
        function ($m) { // Fonction de rappel pour ajouter l'attribut
            // Ajoute l'attribut uniquement s'il n'existe pas déjà
            return preg_replace('/<img\b(?![^>]*\bdata-skip-lazy\b)/i', '<img data-skip-lazy="1"', $m[0]); // Ajoute data-skip-lazy aux images
        }, // Fin de la fonction de rappel
        $content // Le contenu à traiter
    );// Fin de preg_replace_callback

    return $content; // Retourne le contenu modifié
} // Fin de la fonction cd_skip_lazy_for_gutenberg_galleries 

