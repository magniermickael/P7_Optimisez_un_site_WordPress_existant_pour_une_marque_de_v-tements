<?php
$slider_navigation 	= ashe_options('featured_slider_navigation'); // Flèches de navigation
$slider_pagination 	= ashe_options('featured_slider_pagination'); // Points de pagination

$slider_data = '{'; // Début des données du slider
$slider_data .= '"slidesToShow":1, "fade":true'; // Affiche 1 slide à la fois avec effet fondu
if (!$slider_navigation) { // Si les flèches de navigation sont désactivées
	$slider_data .= ', "arrows":false'; // Désactive les flèches
} // Fin condition flèches
if ($slider_pagination) { // Si les points de pagination sont activés
	$slider_data .= ', "dots":true'; // Active les points de pagination
} // Fin condition points
$slider_data .= '}'; // Fin des données du slider
?>
<!-- Slider -->
<div class="featured-slider-area<?php echo ashe_options('general_slider_width') === 'boxed' ? ' boxed-wrapper' : ''; ?>"> <!-- Zone du slider -->

	<div id="featured-slider" class="<?php echo esc_attr(ashe_options('general_slider_width')) === 'boxed' ? 'boxed-wrapper' : ''; ?>" data-slick="<?php echo esc_attr($slider_data); ?>"> <!-- #featured-slider -->

		<?php
		$meta_query = (true == ashe_options('featured_slider_exc_images')) ? [['key' => '_thumbnail_id', 'compare' => 'EXISTS']] : []; // Exclure les articles sans image mise en avant

		// Requête des articles pour le slider
		$args = array(
			'post_type'           => array('post'), // Type de contenu : articles
			'orderby'             => 'rand', // Ordre aléatoire
			'order'               => 'DESC', // Ordre descendant
			'posts_per_page'      => ashe_options('featured_slider_amount'), // Nombre d'articles à afficher
			'ignore_sticky_posts' => 1, // Ignorer les articles épinglés
			'meta_query'          => $meta_query, // Filtre pour exclure les articles sans image mise en avant
		); // Fin des arguments de la requête

		if (ashe_options('featured_slider_display') === 'category') { // Si l'affichage est par catégorie
			$args['cat'] = ashe_options('featured_slider_category'); // Catégorie spécifique pour le slider
		} // Fin condition catégorie

		$sliderQuery = new WP_Query($args); // Exécute la requête
		$slide_index = 0; // Index du slide

		if ($sliderQuery->have_posts()) :  // Si des articles sont trouvés
			while ($sliderQuery->have_posts()) : $sliderQuery->the_post(); // Boucle à travers les articles
				$slide_index++; // Incrémente l'index du slide
				$is_first_slide = ($slide_index === 1); // Vérifie si c'est le premier slide
 
 				$slider_img = ''; // Initialisation de la variable de l'image du slider
				if (has_post_thumbnail()) { // Si l'article a une image mise en avant
					// --- OPTIMISATION --- 
					
					// Attributs personnalisés pour l'image
					$attr = [ // Début des attributs
						'class' => 'slider-image-area', // Classe CSS pour le style
						'sizes' => '(max-width: 768px) 100vw, 1200px', // Taille responsive
					]; // Fin des attributs

					if ($is_first_slide) { // Si c'est le premier slide
						// Pour le premier : On charge prioritairement
						$attr['fetchpriority'] = 'high'; // Priorité de chargement élevée
						$attr['loading'] = 'eager'; // Chargement immédiat
						$attr['decoding'] = 'async'; // Décodage asynchrone
					} else {
						//  Pour les autres : Chargement différé
						$attr['loading'] = 'lazy'; // Chargement différé
						$attr['decoding'] = 'async'; // Décodage asynchrone
					} // Fin condition premier slide

					$slider_img = get_the_post_thumbnail(get_the_ID(), 'ashe-full-thumbnail', $attr); // Récupère l'image mise en avant avec les attributs
				} // Fin condition image mise en avant
		?>
				<div class="slider-item"> <!-- Slide individuel -->
					<div class="slider-item-bg"><?php echo $slider_img; ?></div> <!-- Image de fond du slide -->

					<div class="cv-container image-overlay"> <!-- Conteneur pour le contenu du slide -->
						<div class="cv-outer"> <!-- Conteneur externe -->
							<div class="cv-inner"> <!-- Conteneur interne -->
								<div class="slider-info"> <!-- Informations du slide -->
									<?php $category_list = get_the_category_list(', '); ?> <!-- Récupère la liste des catégories de l'article -->
									<?php if ($category_list) : ?> <!-- Si des catégories existent -->
										<div class="slider-categories"><?php echo '' . $category_list; ?></div> <!-- Affiche les catégories -->
									<?php endif; ?> <!-- Fin condition catégories -->

									<h2 class="slider-title"> <!-- Titre du slide -->
										<a href="<?php echo esc_url(get_permalink()); ?>"><?php the_title(); ?></a> <!-- Lien vers l'article avec le titre -->
									</h2>

									<div class="slider-content"><?php ashe_excerpt(30); ?></div> <!-- Extrait de l'article -->

									<div class="slider-read-more"> <!-- Lien "lire la suite" -->
										<a href="<?php echo esc_url(get_permalink()); ?>"><?php esc_html_e('read more', 'ashe'); ?></a> <!-- Texte traduit "lire la suite" -->
									</div>

									<div class="slider-date"><?php the_time(get_option('date_format')); ?></div> <!-- Date de publication de l'article -->
								</div> <!-- .slider-info -->
							</div> <!-- .cv-inner -->
						</div> <!-- .cv-outer -->
					</div> <!-- .cv-container -->
				</div> <!-- .slider-item -->

		<?php
			endwhile; // Fin de la boucle des articles
		endif; // Fin de la condition des articles
		wp_reset_postdata();  // Réinitialise les données postales
		?> 

	</div> <!-- #featured-slider -->
</div>	<!-- .featured-slider-area -->	