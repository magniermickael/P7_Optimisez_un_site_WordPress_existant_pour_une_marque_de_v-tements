<!-- Main Container -->
<div class="main-container">  <!-- Zone principale -->

	<?php

	// Category Description
	if (is_category()) { // Si c'est une page de catégorie
		get_template_part('templates/grid/category', 'description'); // Chargement de la description de la catégorie
	}
	// On ajoute un titre à la section blog
	echo '<h2 id="leblog" class="chic-title">Dernières publications </h2>'; // Titre de la section blog
	// Blog Grid
	echo '<ul class="blog-grid">'; // Début de la grille des articles


	if (have_posts()) :  // Si des articles sont disponibles

		// boucle des articles
		while (have_posts()) : // Boucle à travers les articles

			the_post(); // Prépare les données de l'article actuel
			// On évite d'afficher l'article avec l'ID 19 en mode aperçu du customizer
			if (! (ashe_is_preview() && get_the_ID() == 19)) :  // Si on n'est pas en mode aperçu du customizer pour l'article avec l'ID 19

				$post_class = (true == ashe_options('blog_page_show_dropcaps')) ? 'blog-post ashe-dropcaps' : 'blog-post'; // Classe CSS pour l'article

				echo '<li>'; // Début de l'élément de la liste

	?>
				<article id="post-<?php the_ID(); ?>" <?php post_class($post_class); ?>> <!-- Article -->

					<div class="post-media"> <!-- Média de l'article -->
						<a class="post-media-link" 
							href="<?php echo esc_url(get_permalink()); ?>" 
							aria-label="<?php echo esc_attr(get_the_title()); ?>"> <!-- Lien vers l'article avec titre pour l'accessibilité -->
							<span class="screen-reader-text"><?php echo esc_html(get_the_title()); ?></span> <!-- Texte pour les lecteurs d'écran -->
						</a>

						<?php the_post_thumbnail('medium_large', array( // Image mise en avant avec taille medium_large
							'loading'  => 'lazy', // Chargement différé pour optimiser la performance
						)); ?> <!-- Affiche l'image mise en avant -->
					</div> <!-- .post-media -->

					<header class="post-header"> <!-- En-tête de l'article -->

						<?php
						// Catégories
						$category_list = get_the_category_list(',&nbsp;&nbsp;'); // Récupère la liste des catégories de l'article
						// Affichage des catégories
						if (ashe_options('blog_page_show_categories') === true && $category_list) {  // Si l'option d'affichage des catégories est activée et que des catégories existent
							echo '<div class="post-categories">' . $category_list . ' </div>'; // Affiche les catégories
						} // Fin condition affichage catégories

						?> <!-- Fin catégories -->

						<?php if (get_the_title()) : ?> <!-- Si le titre de l'article existe -->
							<h2 class="post-title"> <!-- Titre de l'article -->
								<a href="<?php esc_url(the_permalink()); ?>"><?php the_title(); ?></a> <!-- Lien vers l'article avec le titre -->
							</h2>
						<?php endif; ?> <!-- Fin condition titre -->

						<?php if (ashe_options('blog_page_show_date') || ashe_options('blog_page_show_comments')) : ?> <!-- Si l'option d'affichage de la date ou des commentaires est activée -->
							<div class="post-meta clear-fix"> <!-- Métadonnées de l'article -->
								
								<?php if (ashe_options('blog_page_show_date') === true) : ?> <!-- Si l'option d'affichage de la date est activée -->
									<span class="post-date"><?php the_time(get_option('date_format')); ?></span> <!-- Affiche la date de publication -->
								<?php endif; ?> <!-- Fin condition date -->

								<span class="meta-sep">/</span> <!-- Séparateur -->

								<?php
								// Affichage des commentaires ou du partage social
								if (ashe_post_sharing_check() && ashe_options('blog_page_show_comments') === true) { // Si le partage social est activé et l'option d'affichage des commentaires est activée
									comments_popup_link(esc_html__('0 Comments', 'ashe'), esc_html__('1 Comment', 'ashe'), '% ' . esc_html__('Comments', 'ashe'), 'post-comments'); // Affiche le lien des commentaires
								} // Fin condition commentaires
								?> 

							</div> <!-- .post-meta -->
						<?php endif; ?> <!-- Fin condition date ou commentaires -->

					</header> <!-- .post-header -->

					<?php 
					// Description de l'article
					if (ashe_options('blog_page_post_description') !== 'none') : ?> <!-- Si l'option d'affichage de la description de l'article n'est pas définie sur "none" -->

						<div class="post-content"> <!-- Contenu de l'article -->
							<?php
							// Affichage du contenu ou de l'extrait selon l'option
							if (ashe_options('blog_page_post_description') === 'content') {// Si l'option est définie sur "content"
								the_content(''); // Affiche le contenu complet de l'article
							} elseif (ashe_options('blog_page_post_description') === 'excerpt') { // Si l'option est définie sur "excerpt"
								ashe_excerpt(110); // Affiche un extrait de l'article avec une limite de 110 mots
							} // Fin condition description
							?>
						</div> <!-- .post-content -->

					<?php endif; ?> <!-- Fin condition description -->

					<div class="read-more"> <!-- Lien "lire la suite" -->
						<a href="<?php echo esc_url(get_permalink()); ?>"><?php esc_html_e('read more', 'ashe'); ?></a> <!-- Texte traduit "lire la suite" -->
					</div>

					<footer class="post-footer"> <!-- Pied de page de l'article -->

						<?php 
						// Affichage de l'auteur
						if (ashe_options('blog_page_show_author') === true) : ?> <!-- Si l'option d'affichage de l'auteur est activée -->
							<span class="post-author"> <!-- Auteur de l'article -->
								<a href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'), get_the_author_meta('user_nicename'))); ?>"> <!-- Lien vers les articles de l'auteur -->
									<?php echo get_avatar(get_the_author_meta('ID'), 30); ?> <!-- Avatar de l'auteur avec une taille de 30px -->
								</a>
								<?php the_author_posts_link(); ?> <!-- Lien vers les articles de l'auteur -->
							</span> <!-- .post-author -->
						<?php endif; ?> 	<!-- Fin condition auteur -->

						<?php 
						// Affichage des commentaires ou du partage social	
						if (ashe_post_sharing_check()) { 	// Si le partage social est activé
							ashe_post_sharing(); 			// Affiche les boutons de partage social
						} else if (ashe_options('blog_page_show_comments') === true) { 	// Sinon, si l'option d'affichage des commentaires est activée
							comments_popup_link(esc_html__('0 Comments', 'ashe'), esc_html__('1 Comment', 'ashe'), '% ' . esc_html__('Comments', 'ashe'), 'post-comments'); // Affiche le lien des commentaires
						} // Fin condition commentaires ou partage social

						?> 

					</footer> <!-- .post-footer -->

					<!-- Related Posts -->
					<?php ashe_related_posts(esc_html__('You May Also Like', 'ashe'), ashe_options('blog_page_related_orderby')); ?> <!-- Articles liés -->

				</article> <!-- .blog-post -->

		<?php
				echo '</li>'; // Fin de l'élément de la liste

			endif; // Fin exclusion article ID 19 en aperçu

		endwhile; //  Fin de la boucle des articles

	else: // Sinon, si aucun article n'est trouvé

		?>

		<div class="no-result-found"> <!-- Message de non-résultat -->
			<h3><?php esc_html_e('Nothing Found!', 'ashe'); ?></h3> <!-- Titre traduit "Rien trouvé !" -->
			<p><?php esc_html_e('Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'ashe'); ?></p> <!-- Message traduit d'excuse -->
			<div class="ashe-widget widget_search"> <!-- Formulaire de recherche -->
				<?php get_search_form(); ?> <!-- Affiche le formulaire de recherche -->
			</div>  <!-- .widget_search -->
		</div> <!-- .no-result-found -->

	<?php 

	endif; //  Fin condition articles disponibles

	echo '</ul>'; // Fin de la grille des articles
	echo '<p class="text-center"><a class="chic-bouton" href="' . site_url('blog') . '">Voir tous les articles</a></p>'; // Bouton vers la page blog

	?>

	<?php get_template_part('templates/grid/blog', 'pagination'); ?> <!-- Pagination -->

</div><!-- .main-container -->