<?php

$slider_navigation 	= ashe_options('featured_slider_navigation');
$slider_pagination 	= ashe_options('featured_slider_pagination');

$slider_data = '{';

$slider_data .= '"slidesToShow":1, "fade":true';

if (!$slider_navigation) {
	$slider_data .= ', "arrows":false';
}

if ($slider_pagination) {
	$slider_data .= ', "dots":true';
}


$slider_data .= '}';

?>

<!-- Wrap Slider Area -->
<div class="featured-slider-area<?php echo ashe_options('general_slider_width') === 'boxed' ? ' boxed-wrapper' : ''; ?>">

	<!-- Featured Slider -->
	<div id="featured-slider" class="<?php echo esc_attr(ashe_options('general_slider_width')) === 'boxed' ? 'boxed-wrapper' : ''; ?>" data-slick="<?php echo esc_attr($slider_data); ?>">

		<?php

		$slider_repeater_encoded = get_theme_mod('featured_slider_repeater', json_encode(array(
			array(
				'image_url' => '',
				'title' => 'Slide 1 Title',
				'text' => 'Slide 1 Description. Some lorem ipsum dolor sit amet text',
				'link' => '',
				'btn_text' => 'Button 1',
				'checkbox' => '0',
				'id' => 'customizer_repeater_56d7ea7f40a1'
			),
			array(
				'image_url' => '',
				'title' => 'Slide 2 Title',
				'text' => 'Slide 2 Description. Some lorem ipsum dolor sit amet text',
				'link' => '',
				'btn_text' => 'Button 2',
				'checkbox' => '0',
				'id' => 'customizer_repeater_56d7ea7f40a2'
			),
			array(
				'image_url' => '',
				'title' => 'Slide 3 Title',
				'text' => 'Slide 3 Description. Some lorem ipsum dolor sit amet text',
				'link' => '',
				'btn_text' => 'Button 3',
				'checkbox' => '0',
				'id' => 'customizer_repeater_56d7ea7f40a3'
			),
		)));

		$slider_repeater = json_decode($slider_repeater_encoded);

		// Loop Start
		$slide_index = 0;
		foreach ($slider_repeater as $repeater_item) : ?>

			<div class="slider-item">

				<div class="slider-item-bg">
					<?php
					// Option 2 : image en <img> (srcset + lazy) au lieu de background-image
					$is_first_slide = ($slide_index === 0);// pour le chargement prioritaire de la première image
					$loading        = $is_first_slide ? 'eager' : 'lazy';// 'eager' pour la première image, 'lazy' pour les autres
					$fetchpriority  = $is_first_slide ? 'high'  : 'auto';// 'high' pour la première image, 'auto' pour les autres

					$slider_img = '';// initialisation

					if (! empty($repeater_item->image_url)) {// Si une URL d'image est définie

						// Selon la config, "image_url" peut être un ID d’attachement OU une URL
						if (is_numeric($repeater_item->image_url)) {//

							$slider_img = wp_get_attachment_image(// Récupère l'image avec des attributs optimisés
								(int) $repeater_item->image_url, // ID de l'image
								'medium_large', // taille raisonnable pour éviter les images trop lourdes
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


				<div class="cv-container image-overlay">
					<div class="cv-outer">
						<div class="cv-inner">
							<div class="slider-info">

								<?php

								$target = '1' === $repeater_item->checkbox ? '_blank' : '_self';

								if ($repeater_item->btn_text === '' && $repeater_item->link !== '') {
									echo '<a class="slider-image-link" href="' . esc_url($repeater_item->link) . '" target="' . $target . '"></a>';
								}

								?>

								<?php if ($repeater_item->title !== '') : ?>
									<?php if ($repeater_item->link !== '') : ?>
										<h2 class="slider-title">
											<a href="<?php echo esc_url($repeater_item->link); ?>"><?php echo $repeater_item->title; ?></a>
										</h2>
									<?php else: ?>
										<h2 class="slider-title"><?php echo $repeater_item->title; ?></h2>
									<?php endif; ?>
								<?php endif; ?>

								<?php if ($repeater_item->text !== ''): ?>
									<div class="slider-content"><?php echo $repeater_item->text; ?></div>
								<?php endif; ?>

								<?php if ($repeater_item->btn_text !== '') : ?>
									<div class="slider-read-more">
										<a href="<?php echo esc_url($repeater_item->link); ?>" target="<?php echo $target; ?>"><?php echo $repeater_item->btn_text; ?></a>
									</div>
								<?php endif; ?>

							</div>
						</div>
					</div>
				</div>

			</div>
		<?php $slide_index++; ?> <!-- Incrémente l'index du slide -->
		<?php endforeach; // Loop end 
		?>

	</div><!-- #featured-slider -->

</div><!-- .featured-slider-area -->