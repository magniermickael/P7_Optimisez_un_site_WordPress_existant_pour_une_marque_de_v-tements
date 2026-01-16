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

<div class="featured-slider-area<?php echo ashe_options('general_slider_width') === 'boxed' ? ' boxed-wrapper' : ''; ?>">

	<div id="featured-slider" class="<?php echo esc_attr(ashe_options('general_slider_width')) === 'boxed' ? 'boxed-wrapper' : ''; ?>" data-slick="<?php echo esc_attr($slider_data); ?>">

		<?php
		$meta_query = (true == ashe_options('featured_slider_exc_images')) ? [['key' => '_thumbnail_id', 'compare' => 'EXISTS']] : [];

		// Query Args
		$args = array(
			'post_type'           => array('post'),
			'orderby'             => 'rand',
			'order'               => 'DESC',
			'posts_per_page'      => ashe_options('featured_slider_amount'),
			'ignore_sticky_posts' => 1,
			'meta_query'          => $meta_query,
		);

		if (ashe_options('featured_slider_display') === 'category') {
			$args['cat'] = ashe_options('featured_slider_category');
		}

		$sliderQuery = new WP_Query($args);
		$slide_index = 0;

		if ($sliderQuery->have_posts()) :
			while ($sliderQuery->have_posts()) : $sliderQuery->the_post();
				$slide_index++;
				$is_first_slide = ($slide_index === 1);

				$slider_img = '';
				if (has_post_thumbnail()) {
					// --- OPTIMISATION ---
					// 1. On applique vos réglages (pas d'async sur la 1ère)
					// 2. On charge la 1ère en priorité haute (eager)

					$attr = [
						'class' => 'slider-image-area',
						'sizes' => '(max-width: 768px) 100vw, 1200px',
					];

					if ($is_first_slide) {
						// Pour la 1ère image : Priorité MAXIMALE et pas d'async (votre constat)
						$attr['fetchpriority'] = 'high';
						$attr['loading'] = 'eager';
						// Pas de 'decoding' => 'async' ici
					} else {
						// Pour les suivantes : On diffère tout
						$attr['loading'] = 'lazy';
						$attr['decoding'] = 'async';
					}

					$slider_img = get_the_post_thumbnail(get_the_ID(), 'ashe-full-thumbnail', $attr);
				}
		?>

				<div class="slider-item">
					<div class="slider-item-bg"><?php echo $slider_img; ?></div>

					<div class="cv-container image-overlay">
						<div class="cv-outer">
							<div class="cv-inner">
								<div class="slider-info">
									<?php $category_list = get_the_category_list(', '); ?>
									<?php if ($category_list) : ?>
										<div class="slider-categories"><?php echo '' . $category_list; ?></div>
									<?php endif; ?>

									<h2 class="slider-title">
										<a href="<?php echo esc_url(get_permalink()); ?>"><?php the_title(); ?></a>
									</h2>

									<div class="slider-content"><?php ashe_excerpt(30); ?></div>

									<div class="slider-read-more">
										<a href="<?php echo esc_url(get_permalink()); ?>"><?php esc_html_e('read more', 'ashe'); ?></a>
									</div>

									<div class="slider-date"><?php the_time(get_option('date_format')); ?></div>
								</div>
							</div>
						</div>
					</div>
				</div>

		<?php
			endwhile;
		endif;
		wp_reset_postdata(); 
		?>

	</div> <!-- #featured-slider -->
</div>	<!-- .featured-slider-area -->	