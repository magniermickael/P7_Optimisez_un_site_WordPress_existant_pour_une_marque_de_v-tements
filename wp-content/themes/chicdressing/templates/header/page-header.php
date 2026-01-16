<?php if (ashe_options('header_image_label') === true) : ?><!-- Affiche le logo si l'option est activée -->

	<div class="entry-header"> <!-- Conteneur de l'en-tête -->
		<div class="cv-outer"> <!-- Conteneur externe -->
			<div class="cv-inner"> <!-- Conteneur interne -->
				<div class="header-logo"> <!-- Conteneur du logo -->
					<!-- Affichage du logo personnalisé ou du nom du site -->
					<?php if (has_custom_logo()) : // Si un logo personnalisé est défini
						$custom_logo_id = get_theme_mod('custom_logo'); // Récupère l'ID du logo personnalisé
						$custom_logo = wp_get_attachment_image_src($custom_logo_id, 'medium_large');// On utilise "medium_large" pour de meilleures performances
					?>
						<a href="<?php echo esc_url(home_url('/')); ?>" class="logo-img"> <!-- Lien vers la page d'accueil -->
							<img
								src="<?php echo esc_url($custom_logo[0]); ?>" 
								width="<?php echo esc_attr($custom_logo[1]); ?>"
								height="<?php echo esc_attr($custom_logo[2]); ?>"
								alt="<?php echo esc_attr(get_bloginfo('name')); ?>"
								loading="lazy"
								fetchpriority="high"> <!-- Image du logo avec attributs optimisés -->
						</a> <!-- Fin du lien vers la page d'accueil -->
					<?php else : ?> <!-- Sinon, affiche le nom du site -->
						<a href="<?php echo esc_url(home_url('/')); ?>" class="header-logo-a"><?php echo esc_html(get_bloginfo('name')); ?></a> <!-- Lien vers la page d'accueil avec le nom du site -->
					<?php endif; ?> <!-- Fin de la condition du logo personnalisé -->

					<p class="site-description"><?php echo bloginfo('description'); ?></p> <!-- Description du site -->

				</div> <!-- .header-logo -->
			</div> <!-- .cv-inner -->
		</div> <!-- .cv-outer -->
	</div> <!-- .entry-header -->

<?php endif; ?> <!-- Fin de la condition d'affichage du logo -->