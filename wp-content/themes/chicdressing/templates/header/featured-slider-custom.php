<?php
// Options de configuration du slider
$slider_navigation 	= ashe_options('featured_slider_navigation'); // Flèches de navigation
$slider_pagination 	= ashe_options('featured_slider_pagination'); // Points de pagination

$slider_data = '{'; // Début des données du slider

$slider_data .= '"slidesToShow":1, "fade":true'; // Affiche 1 slide à la fois avec effet fondu
// Configuration des flèches de navigation
if (!$slider_navigation) { // si les flèches de navigation sont désactivées
	$slider_data .= ', "arrows":false'; //  Désactive les flèches
} // Fin condition flèches
// Configuration des points de pagination
if ($slider_pagination) { // Si les points de pagination sont activés
	$slider_data .= ', "dots":true'; // Active les points de pagination
} // Fin condition points


$slider_data .= '}'; // Fin des données du slider

?>

<!-- Slider -->
<div class="featured-slider-area<?php echo ashe_options('general_slider_width') === 'boxed' ? ' boxed-wrapper' : ''; ?>"> <!-- Zone du slider -->

	<!-- #featured-slider -->
	<div id="featured-slider" class="<?php echo esc_attr(ashe_options('general_slider_width')) === 'boxed' ? 'boxed-wrapper' : ''; ?>" data-slick="<?php echo esc_attr($slider_data); ?>"> <!-- #featured-slider -->

		<?php
		// Récupération des données du slider personnalisé depuis le Customizer
		$slider_repeater_encoded = get_theme_mod('featured_slider_repeater', json_encode(array( // Valeurs par défaut si aucune donnée n'est définie
			array( // Slide 1
				'image_url' => '', // URL de l'image (vide par défaut)
				'title' => 'Slide 1 Title', // Titre du slide
				'text' => 'Slide 1 Description. Some lorem ipsum dolor sit amet text', // Description du slide
				'link' => '', // Lien du slide (vide par défaut)
				'btn_text' => 'Button 1', // Texte du bouton
				'checkbox' => '0', // Checkbox pour ouvrir le lien dans un nouvel onglet (0 = non coché)
				'id' => 'customizer_repeater_56d7ea7f40a1' // ID unique du slide
			),
			array( // Slide 2
				'image_url' => '', // URL de l'image (vide par défaut)
				'title' => 'Slide 2 Title', // Titre du slide
				'text' => 'Slide 2 Description. Some lorem ipsum dolor sit amet text', // Description du slide
				'link' => '', // Lien du slide (vide par défaut)
				'btn_text' => 'Button 2', // Texte du bouton
				'checkbox' => '0', // Checkbox pour ouvrir le lien dans un nouvel onglet (0 = non coché)
				'id' => 'customizer_repeater_56d7ea7f40a2' // ID unique du slide
			),
			array( // Slide 3
				'image_url' => '', // URL de l'image (vide par défaut)
				'title' => 'Slide 3 Title', // Titre du slide
				'text' => 'Slide 3 Description. Some lorem ipsum dolor sit amet text', // Description du slide
				'link' => '', // Lien du slide (vide par défaut)
				'btn_text' => 'Button 3', // Texte du bouton
				'checkbox' => '0', // Checkbox pour ouvrir le lien dans un nouvel onglet (0 = non coché)
				'id' => 'customizer_repeater_56d7ea7f40a3' // ID unique du slide
			), // Fin slide 3
		))); // Fin get_theme_mod

		$slider_repeater = json_decode($slider_repeater_encoded); // Décodage des données JSON en objet PHP

		//  Boucle à travers chaque élément du slider
		$slide_index = 0; // Initialisation de l'index du slide
		foreach ($slider_repeater as $repeater_item) : ?> <!-- Loop start -->

			<div class="slider-item"> <!-- Slide individuel -->

				<div class="slider-item-bg"> <!-- Fond de la slide -->
					<?php
					// Option 2 : image en <img> (srcset + lazy) au lieu de background-image
					$is_first_slide = ($slide_index === 0);// pour le chargement prioritaire de la première image
					$loading        = $is_first_slide ? 'eager' : 'lazy';// 'eager' pour la première image, 'lazy' pour les autres
					$fetchpriority  = $is_first_slide ? 'high'  : 'auto';// 'high' pour la première image, 'auto' pour les autres

					$slider_img = '';// initialisation

					if (! empty($repeater_item->image_url)) {// Si une URL d'image est définie

						// Selon la config, "image_url" peut être un ID d’attachement OU une URL
						if (is_numeric($repeater_item->image_url)) {// Si c'est un ID d'attachement

							$slider_img = wp_get_attachment_image(// Récupère l'image avec des attributs optimisés
								(int) $repeater_item->image_url, // ID de l'image
								'medium_large', //  Taille de l'image 
								false, // pas d'icône 
								[ // tableau d'attributs supplémentaires
									'class'         => 'cd-slide-img',// classe CSS pour le style
									'loading'       => $loading,// attribut de chargement
									'fetchpriority' => $fetchpriority, // attribut de priorité de récupération
									'decoding'      => 'async', // décodage asynchrone pour de meilleures performances
									'sizes'         => '(max-width: 768px) 100vw, 1200px', // attribut sizes pour le responsive
								] 	// fin du tableau d'attributs
							); 	// Fin de wp_get_attachment_image
						} else { // sinon, on suppose que c'est une URL directe
							$slider_img = '<img class="cd-slide-img" src="' . esc_url($repeater_item->image_url) . '" alt="" loading="' . esc_attr($loading) . '" decoding="async"' . ($is_first_slide ? ' fetchpriority="high"' : '') . '>'; // Image avec attributs optimisés
						} // Fin de la condition is_numeric
					}// Fin de la condition !empty

					echo $slider_img; // Affiche l'image de la slide
					?> <!-- Image de fond de la slide -->
				</div> <!-- .slider-item-bg -->


				<div class="cv-container image-overlay"> <!-- Conteneur pour le contenu de la slide -->
					<div class="cv-outer"> <!-- Conteneur externe -->
						<div class="cv-inner"> <!-- Conteneur interne -->
							<div class="slider-info"> <!-- Informations de la slide -->

								<?php
									$target = '1' === $repeater_item->checkbox ? '_blank' : '_self'; // Détermine si le lien s'ouvre dans un nouvel onglet
								$target = '1' === $repeater_item->checkbox ? '_blank' : '_self'; // Détermine si le lien s'ouvre dans un nouvel onglet
								// Lien invisible sur toute l'image si aucun texte de bouton n'est défini
								if ($repeater_item->btn_text === '' && $repeater_item->link !== '') { // Si aucun texte de bouton n'est défini mais qu'un lien est présent
									echo '<a class="slider-image-link" href="' . esc_url($repeater_item->link) . '" target="' . $target . '"></a>'; // Crée un lien invisible sur toute l'image du slide
								}  // Fin de la condition lien invisible

								?>

								<?php if ($repeater_item->title !== '') : ?> <!-- Si un titre est défini -->
									<?php if ($repeater_item->link !== '') : ?> <!-- Si un lien est défini -->
										<h2 class="slider-title"> <!-- Titre du slide avec lien -->
											<a href="<?php echo esc_url($repeater_item->link); ?>"><?php echo $repeater_item->title; ?></a> <!-- Lien vers l'URL définie -->
										</h2>
									<?php else: ?> <!-- Titre sans lien -->
										<h2 class="slider-title"><?php echo $repeater_item->title; ?></h2> <!-- Titre simple -->
									<?php endif; ?> <!-- Fin condition lien -->
								<?php endif; ?>

								<?php if ($repeater_item->text !== ''): ?> <!-- Si un texte est défini -->
									<div class="slider-content"><?php echo $repeater_item->text; ?></div> <!-- Affiche le texte -->
								<?php endif; ?> <!-- Fin condition texte -->

								<?php if ($repeater_item->btn_text !== '') : ?> <!-- Si un texte de bouton est défini -->
									<div class="slider-read-more">	 <!-- Bouton du slide -->
										<a href="<?php echo esc_url($repeater_item->link); ?>" target="<?php echo $target; ?>"><?php echo $repeater_item->btn_text; ?></a> <!-- Lien du bouton avec le texte défini -->
									</div>
								<?php endif; ?> <!-- Fin condition texte de bouton -->

							</div> <!-- .slider-info -->
						</div> <!-- .cv-inner -->
					</div> <!-- .cv-outer -->
				</div> <!-- .cv-container -->

			</div> <!-- .slider-item -->
		<?php $slide_index++; ?> <!-- Incrémente l'index du slide -->
		<?php endforeach; // Fin de la boucle des slides
		?>

	</div><!-- #featured-slider -->

</div><!-- .featured-slider-area -->