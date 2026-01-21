<?php

/**
 * Featured Slider Mobile — Infinite + dots (4 slides)
 *
 */

defined('ABSPATH') || exit; // Sécurité : Empêche l'accès direct au fichier

//   On met un flag global pour indiquer qu'on est en train de rendre le slider mobile
$GLOBALS['mobile_slider_rendering'] = true; // Flag global
// Requête des articles pour le slider mobile
$args_mobile = array(  // Arguments de la requête
    'posts_per_page'      => 4, // Nombre d'articles à afficher
    'ignore_sticky_posts' => true, // Ignorer les articles épinglés
    'post_status'         => 'publish', // Seulement les articles publiés
    'no_found_rows'       => true, // Optimisation : Pas besoin du comptage total des articles
); // Fin des arguments de la requête

$query_mobile = new WP_Query($args_mobile); // Exécute la requête
// Vérifie si des articles sont trouvés
if (!$query_mobile->have_posts()) { // Si aucun article n'est trouvé
    unset($GLOBALS['mobile_slider_rendering']); // Fin du flag global
    return; // On quitte
} // Fin condition articles

$slides       = $query_mobile->posts; // Récupère les articles
$total_slides = count($slides); // Nombre total d'articles
// Si aucun article, on quitte
if ($total_slides < 1) { // Si moins d'un article
    wp_reset_postdata(); // Réinitialise les données postales
    unset($GLOBALS['mobile_slider_rendering']); // Fin du flag global
    return; // On quitte
} // Fin condition nombre d'articles

$first_post = $slides[0]; // Premier article
$last_post  = $slides[$total_slides - 1]; // Dernier article

/**
 * Extrait safe : excerpt si dispo, sinon trim du contenu
 */
// Retourne un extrait propre avec un nombre de mots limité
if (!function_exists('mobile_slider_get_excerpt')) { // Si la fonction n'existe pas déjà
    function mobile_slider_get_excerpt($post_obj, $words = 20) // Fonction pour obtenir un extrait
    { // Paramètres : objet post, nombre de mots
        $raw_excerpt = trim(wp_strip_all_tags((string) $post_obj->post_excerpt)); // Nettoie l'extrait brut
        if ($raw_excerpt !== '') { // Si l'extrait brut n'est pas vide
            return $raw_excerpt; // Retourne l'extrait
        }  // Fin condition extrait brut
        // Sinon, on crée un extrait à partir du contenu
        $raw_content = trim(wp_strip_all_tags((string) $post_obj->post_content)); // Nettoie le contenu brut
        return wp_trim_words($raw_content, $words, '…'); // Retourne un extrait tronqué
    } // Fin de la fonction
} // Fin condition fonction existe

/**
 * Image WP responsive (srcset/sizes + width/height)
 */
// Retourne l'image responsive pour le slider mobile
if (!function_exists('mobile_slider_image')) { // Si la fonction n'existe pas déjà
    function mobile_slider_image($post_id, $attrs = array()) // Fonction pour obtenir l'image
    { // Paramètres : ID du post, attributs supplémentaires
        $thumb_id = get_post_thumbnail_id($post_id); // Récupère l'ID de l'image mise en avant
        if (!$thumb_id) return ''; // Si pas d'image, retourne vide
        
        $defaults = array( // Début des attributs par défaut
            'alt'   => '', // Texte alternatif vide
            'sizes' => '(max-width: 768px) 100vw, 768px', // Taille responsive
        ); // Fin des attributs par défaut

        $attrs = array_merge($defaults, $attrs); // Fusionne les attributs par défaut avec ceux fournis

        // Retourne l'image avec les attributs
        return wp_get_attachment_image($thumb_id, 'medium', false, $attrs); // Retourne l'image avec les attributs
    } // Fin de la fonction
} // Fin condition fonction existe
?> 

<div class="mobile-slider-container"> <!-- Conteneur du slider mobile -->

    <div class="mobile-slider-wrapper" id="mobile-slider"> <!-- Wrapper du slider mobile -->

        <?php
        /* =========================
		   CLONE LAST (avant le 1er)
		   ========================= */
        // On clone le dernier slide avant le premier pour l'effet infini   
        $post = $last_post; // Dernier article
        setup_postdata($post); // Prépare les données postales
        // Récupération des données de l'article
        $post_id = (int) $post->ID; // ID de l'article
        $excerpt = mobile_slider_get_excerpt($post); // Extrait de l'article
        // Récupération de l'image avec des attributs spécifiques
        $img_html = mobile_slider_image($post_id, array( // Récupère l'image avec des attributs spécifiques
            'alt'           => '', // Texte alternatif vide
            'loading'       => 'eager', // Chargement immédiat
            'decoding'      => 'async', // Décodage asynchrone
            'fetchpriority' => 'low', // Priorité de chargement basse
        )); // Fin des attributs
        ?>
        <div class="mobile-slide clone-last" data-index="<?php echo esc_attr($total_slides - 1); ?>"> <!-- Slide cloné du dernier -->
            <div class="slider-item-bg"><?php echo $img_html; ?></div> <!-- Image de fond du slide cloné -->

            <div class="cv-container image-overlay"> <!-- Conteneur du contenu du slide cloné -->
                <div class="cv-outer"> <!-- Conteneur externe -->
                    <div class="cv-inner"> <!-- Conteneur interne -->
                        <div class="slider-info"> <!-- Informations du slide -->

                            <div class="slider-categories"> <!-- Catégories du slide -->
                                <?php echo wp_kses_post(get_the_category_list(', ', '', $post_id)); ?> <!-- Liste des catégories -->
                            </div>

                            <h2 class="slider-title"> <!-- Titre du slide -->
                                <a href="<?php echo esc_url(get_permalink($post_id)); ?>"> <!-- Lien vers l'article -->
                                    <?php echo esc_html(get_the_title($post_id)); ?> <!-- Titre de l'article -->
                                </a>
                            </h2>

                            <div class="slider-content"> <!-- Contenu du slide -->
                                <p><?php echo esc_html($excerpt); ?></p> <!-- Extrait de l'article -->
                            </div>

                            <div class="slider-date"> <!-- Date du slide -->
                                <?php echo esc_html(get_the_date(get_option('date_format'), $post_id)); ?> <!-- Date de publication -->
                            </div>

                        </div> <!-- .slider-info -->
                    </div> <!-- .cv-inner -->
                </div> <!-- .cv-outer -->
            </div> <!-- .cv-container -->

            <a href="<?php echo esc_url(get_permalink($post_id)); ?>" class="mobile-global-link"> <!-- Lien global du slide cloné -->
                <span class="screen-reader-text"><?php echo esc_html('Lire l’article : ' . get_the_title($post_id)); ?></span> <!-- Texte pour les lecteurs d'écran -->
            </a>
        </div>

        <?php
        /* =========================
		   SLIDES RÉELLES (4)
		   ========================= */
        // Boucle à travers les articles réels
        foreach ($slides as $index => $post) : // Pour chaque article
            setup_postdata($post); // Prépare les données postales
            // Récupération des données de l'article
            $post_id = (int) $post->ID; // ID de l'article
            $excerpt = mobile_slider_get_excerpt($post); // Extrait de l'article

            if ($index === 0) { // Premier slide
                $img_html = mobile_slider_image($post_id, array( // Récupère l'image avec des attributs spécifiques
                    'alt'           => esc_attr(get_the_title($post_id)), // Texte alternatif avec le titre de l'article
                    'loading'       => 'eager', // Chargement immédiat
                    'decoding'      => 'auto', // Décodage automatique
                    'fetchpriority' => 'high', // Priorité de chargement élevée
                )); // Fin des attributs
            } else { // Autres slides
                $img_html = mobile_slider_image($post_id, array( // Récupère l'image avec des attributs spécifiques
                    'alt'           => esc_attr(get_the_title($post_id)), // Texte alternatif avec le titre de l'article
                    'loading'       => 'lazy', // Chargement différé
                    'decoding'      => 'async', // Décodage asynchrone
                    'fetchpriority' => 'low', // Priorité de chargement faible
                )); // Fin des attributs
            } // Fin condition index
        ?>
            <div class="mobile-slide" data-index="<?php echo esc_attr($index); ?>">  <!-- Slide réel -->
                <div class="slider-item-bg"><?php echo $img_html; ?></div> <!-- Image de fond du slide -->

                <div class="cv-container image-overlay"> <!-- Conteneur du contenu du slide -->
                    <div class="cv-outer"> <!-- Conteneur externe -->
                        <div class="cv-inner"> <!-- Conteneur interne -->
                            <div class="slider-info"> <!-- Informations du slide -->

                                <div class="slider-categories"> <!-- Catégories du slide -->
                                    <?php echo wp_kses_post(get_the_category_list(', ', '', $post_id)); ?> <!-- Liste des catégories -->
                                </div>

                                <h2 class="slider-title"> <!-- Titre du slide -->
                                    <a href="<?php echo esc_url(get_permalink($post_id)); ?>"> <!-- Lien vers l'article -->
                                        <?php echo esc_html(get_the_title($post_id)); ?> <!-- Titre de l'article -->
                                    </a>
                                </h2>

                                <div class="slider-content"> <!-- Contenu du slide -->
                                    <p><?php echo esc_html($excerpt); ?></p> <!-- Extrait de l'article -->
                                </div>

                                <div class="slider-date"> <!-- Date du slide -->
                                    <?php echo esc_html(get_the_date(get_option('date_format'), $post_id)); ?> <!-- Date de publication -->
                                </div>

                            </div> <!-- .slider-info -->
                        </div>  <!-- .cv-inner -->
                    </div> <!-- .cv-outer -->
                </div> <!-- .cv-container -->

                <a href="<?php echo esc_url(get_permalink($post_id)); ?>" class="mobile-global-link"> <!-- Lien global du slide -->
                    <span class="screen-reader-text"><?php echo esc_html('Lire l’article : ' . get_the_title($post_id)); ?></span> <!-- Texte pour les lecteurs d'écran -->
                </a>
            </div> <!-- .mobile-slide -->
        <?php endforeach; ?> <!-- Fin de la boucle des articles -->

        <?php
        /* =========================
		   CLONE FIRST (après le dernier)
		   ========================= */
        // On clone le premier slide après le dernier pour l'effet infini
        $post = $first_post; // Premier article
        setup_postdata($post); // Prépare les données postales
        // Récupération des données de l'article
        $post_id = (int) $post->ID; // ID de l'article
        $excerpt = mobile_slider_get_excerpt($post); // Extrait de l'article
        // Récupération de l'image avec des attributs spécifiques
        $img_html = mobile_slider_image($post_id, array(    // Récupère l'image avec des attributs spécifiques
            'alt'           => '', // Texte alternatif vide
            'loading'       => 'eager', // Chargement immédiat
            'decoding'      => 'async', // Décodage asynchrone
            'fetchpriority' => 'low', // Priorité de chargement basse
        )); // Fin des attributs
        ?>
        <div class="mobile-slide clone-first" data-index="0"> <!-- Slide cloné du premier -->
            <div class="slider-item-bg"><?php echo $img_html; ?></div> <!-- Image de fond du slide cloné -->
 
            <div class="cv-container image-overlay"> <!-- Conteneur du contenu du slide cloné -->
                <div class="cv-outer"> <!-- Conteneur externe -->
                    <div class="cv-inner"> <!-- Conteneur interne -->
                        <div class="slider-info"> <!-- Informations du slide -->

                            <div class="slider-categories">  <!-- Catégories du slide -->
                                <?php echo wp_kses_post(get_the_category_list(', ', '', $post_id)); ?>  <!-- Liste des catégories -->
                            </div>

                            <h2 class="slider-title"> <!-- Titre du slide -->
                                <a href="<?php echo esc_url(get_permalink($post_id)); ?>"> <!-- Lien vers l'article -->
                                    <?php echo esc_html(get_the_title($post_id)); ?> <!-- Titre de l'article -->
                                </a>
                            </h2>

                            <div class="slider-content"> <!-- Contenu du slide -->
                                <p><?php echo esc_html($excerpt); ?></p> <!-- Extrait de l'article -->
                            </div>

                            <div class="slider-date"> <!-- Date du slide -->
                                <?php echo esc_html(get_the_date(get_option('date_format'), $post_id)); ?> <!-- Date de publication -->
                            </div>

                        </div> <!-- .slider-info -->
                    </div> <!-- .cv-inner -->
                </div> <!-- .cv-outer -->
            </div> <!-- .image-overlay -->

            <a href="<?php echo esc_url(get_permalink($post_id)); ?>" class="mobile-global-link">  <!-- Lien global du slide cloné -->
                <span class="screen-reader-text"><?php echo esc_html('Lire l’article : ' . get_the_title($post_id)); ?></span> <!-- Texte pour les lecteurs d'écran -->
            </a>
        </div> <!-- .mobile-slide -->

        <?php wp_reset_postdata(); ?> <!-- Réinitialise les données postales -->
    </div> <!-- .mobile-slider-wrapper -->

    <div class="slider-dots">  <!-- Points de navigation du slider -->
        <?php for ($i = 0; $i < $total_slides; $i++) : ?> <!-- Boucle pour chaque slide -->
            <button 
                type="button" 
                class="<?php echo ($i === 0) ? 'active' : ''; ?>"
                data-target="<?php echo esc_attr($i); ?>" 
                aria-label="<?php echo esc_attr('Aller au slide ' . ($i + 1)); ?>">
            </button> <!-- Bouton pour chaque point -->
        <?php endfor; ?> <!-- Fin de la boucle des slides -->
    </div> <!-- .slider-dots -->

</div> <!-- .mobile-slider-container -->

<?php
// Fin : on coupe le flag global
unset($GLOBALS['mobile_slider_rendering']); // Fin du flag global
