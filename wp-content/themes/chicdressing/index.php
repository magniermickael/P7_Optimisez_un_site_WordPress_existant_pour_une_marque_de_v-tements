<?php

get_header(); // Appel du header

if (is_home()) { // Si on est sur la page d'accueil

	// SLIDER : Chargement UNIQUEMENT sur Ordinateur/Tablette
		if ( ashe_options( 'featured_slider_label' ) === true && ashe_options( 'featured_slider_location' ) !== 'front' ) {// Si le slider est activé et pas sur la page d'accueil
			if ( ashe_options( 'featured_slider_source' ) === 'posts' ) { // Source : Articles
				get_template_part( 'templates/header/featured', 'slider' ); // Chargement du slider par défaut
			} else { // Source : Slider personnalisé
				get_template_part( 'templates/header/featured', 'slider-custom' );// Chargement du slider personnalisé
			} // Fin source
		}// Fin activation

	// SLIDER MOBILE : Chargement UNIQUEMENT sur Mobile
		get_template_part( 'templates/header/featured', 'slider-mobile' );  // Chargement du slider mobile
	

	// LIENS EN VEDETTE (Bannières) : Chargement UNIQUEMENT sur Ordinateur/Tablette
	if ( ! wp_is_mobile() ) {// On le cache sur mobile pour gagner massivement en vitesse
		if (ashe_options('featured_links_label') === true && ashe_options('featured_links_location') !== 'front') { // Si les liens en vedette sont activés et pas sur la page d'accueil
			get_template_part('templates/header/featured', 'links'); // Chargement des liens en vedette
		}// Fin activation
	} // Fin liens en vedette

?><!-- PRODUITS & FASHION MAP sur l'accueil uniquement -->
	<div id="chic-products" class="boxed-wrapper clear-fix"> <!-- Produits -->
		<h1 class="chic-title">Achat-vente de pièces de créateur à prix cassés</h1> <!-- Titre -->
		<?php
		// On change le nom de la clé pour forcer une nouvelle "photocopie" optimisée
		$cache_key = 'cd_home_products_final_v4'; // Clé de cache unique pour la page d'accueil
		$html = get_transient($cache_key); // Récupère le cache existant s'il existe

		if (false === $html) { // Le cache n'existe pas : on le génère			
			// On génère le HTML des produits
			$html = do_shortcode('[products orderby="date" columns="3" order="ASC"]'); // Shortcode WooCommerce pour afficher les produits 
			
			// On sauvegarde ce HTML optimisé pour 1 heure
			set_transient($cache_key, $html, HOUR_IN_SECONDS); // Sauvegarde du cache pendant 1 heure
		} // Fin génération du cache
		echo $html; // Affiche le HTML des produits
		?>
		<p class="text-center"><a class="chic-bouton" href="<?php echo esc_url(get_permalink(wc_get_page_id('shop'))); ?>">Voir toute la collection</a></p> <!-- Bouton vers la boutique -->
	</div> <!-- Fin produits -->

	<div id="chic-fashionweek-map" class="boxed-wrapper clear-fix"> <!-- Fashion Map -->
		<h2 class="chic-title">Marques de luxe – FashionMap été 2022</h2> <!-- Titre -->
		<iframe 
			class="cd-map"
			title="Carte : Fashion Week été 2022"
			data-src="https://www.google.com/maps/d/embed?mid=1SU-W19k76UkTXASeT7PnGAyDYCY&ehbc=2E312F"
			src="about:blank"
			loading="lazy"
			allowfullscreen="" 
			referrerpolicy="no-referrer-when-downgrade"> <!-- Attributs pour optimiser le chargement de la carte  -->
		</iframe>  <!-- Carte Google Maps intégrée avec chargement différé -->
	</div> <!-- Fin Fashion Map -->
<?php

}// Fin is_home

?> 

<main id="main" role="main" class="main-content clear-fix<?php echo esc_attr(ashe_options('general_content_width')) === 'boxed' ? ' boxed-wrapper' : ''; ?>" data-layout="<?php echo esc_attr(ashe_options('general_home_layout')); ?>" data-sidebar-sticky="<?php echo esc_attr(ashe_options('general_sidebar_sticky')); ?>"> <!-- Main Content -->

	<?php // SIDE BARS
	get_template_part('templates/sidebars/sidebar', 'left'); // Sidebar Gauche

	if (strpos(ashe_options('general_home_layout'), 'list') === 0) { // Mise en page Liste 
		get_template_part('templates/grid/blog', 'list'); // Chargement de la grille en liste
	} else { // Mise en page Grille
		get_template_part('templates/grid/blog', 'grid'); // Chargement de la grille en grille
	} // Fin mise en page

	get_template_part('templates/sidebars/sidebar', 'right'); // Sidebar Droite
	?> <!-- Fin Sidebars -->

</main> <!-- Fin Main Content -->

<?php get_footer(); ?> <!-- Appel du footer --> 


