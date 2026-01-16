<?php

/**
 * Featured Slider Mobile — Infinite + dots (4 slides)
 *
 */

defined('ABSPATH') || exit;

//  Flag : active la limitation de srcset uniquement pendant ce template
$GLOBALS['mobile_slider_rendering'] = true;

$args_mobile = array(
    'posts_per_page'      => 4,
    'ignore_sticky_posts' => true,
    'post_status'         => 'publish',
    'no_found_rows'       => true,
);

$query_mobile = new WP_Query($args_mobile);

if (!$query_mobile->have_posts()) {
    unset($GLOBALS['mobile_slider_rendering']);
    return;
}

$slides       = $query_mobile->posts;
$total_slides = count($slides);

if ($total_slides < 1) {
    wp_reset_postdata();
    unset($GLOBALS['mobile_slider_rendering']);
    return;
}

$first_post = $slides[0];
$last_post  = $slides[$total_slides - 1];

/**
 * Extrait safe : excerpt si dispo, sinon trim du contenu
 */
if (!function_exists('mobile_slider_get_excerpt')) {
    function mobile_slider_get_excerpt($post_obj, $words = 20)
    {
        $raw_excerpt = trim(wp_strip_all_tags((string) $post_obj->post_excerpt));
        if ($raw_excerpt !== '') {
            return $raw_excerpt;
        }
        $raw_content = trim(wp_strip_all_tags((string) $post_obj->post_content));
        return wp_trim_words($raw_content, $words, '…');
    }
}

/**
 * Image WP responsive (srcset/sizes + width/height)
 */
if (!function_exists('mobile_slider_image')) {
    function mobile_slider_image($post_id, $attrs = array())
    {
        $thumb_id = get_post_thumbnail_id($post_id);
        if (!$thumb_id) return '';

        $defaults = array(
            'alt'   => '',
            'sizes' => '(max-width: 768px) 100vw, 768px',
        );

        $attrs = array_merge($defaults, $attrs);

        // medium_large = bon compromis mobile
        return wp_get_attachment_image($thumb_id, 'medium_large', false, $attrs);
    }
}
?>

<div class="mobile-slider-container">

    <div class="mobile-slider-wrapper" id="mobile-slider">

        <?php
        /* =========================
		   CLONE LAST (avant le 1er)
		   ========================= */
        $post = $last_post;
        setup_postdata($post);

        $post_id = (int) $post->ID;
        $excerpt = mobile_slider_get_excerpt($post);

        $img_html = mobile_slider_image($post_id, array(
            'alt'           => '',
            'loading'       => 'lazy',
            'decoding'      => 'async',
            'fetchpriority' => 'low',
        ));
        ?>
        <div class="mobile-slide clone-last" data-index="<?php echo esc_attr($total_slides - 1); ?>">
            <div class="slider-item-bg"><?php echo $img_html; ?></div>

            <div class="cv-container image-overlay">
                <div class="cv-outer">
                    <div class="cv-inner">
                        <div class="slider-info">

                            <div class="slider-categories">
                                <?php echo wp_kses_post(get_the_category_list(', ', '', $post_id)); ?>
                            </div>

                            <h2 class="slider-title">
                                <a href="<?php echo esc_url(get_permalink($post_id)); ?>">
                                    <?php echo esc_html(get_the_title($post_id)); ?>
                                </a>
                            </h2>

                            <div class="slider-content">
                                <p><?php echo esc_html($excerpt); ?></p>
                            </div>

                            <div class="slider-date">
                                <?php echo esc_html(get_the_date(get_option('date_format'), $post_id)); ?>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <a href="<?php echo esc_url(get_permalink($post_id)); ?>" class="mobile-global-link">
                <span class="screen-reader-text"><?php echo esc_html('Lire l’article : ' . get_the_title($post_id)); ?></span>
            </a>
        </div>

        <?php
        /* =========================
		   SLIDES RÉELLES (4)
		   ========================= */
        foreach ($slides as $index => $post) :
            setup_postdata($post);

            $post_id = (int) $post->ID;
            $excerpt = mobile_slider_get_excerpt($post);

            if ($index === 0) {
                $img_html = mobile_slider_image($post_id, array(
                    'alt'           => esc_attr(get_the_title($post_id)),
                    'loading'       => 'eager',
                    'decoding'      => 'auto',
                    'fetchpriority' => 'high',
                ));
            } else {
                $img_html = mobile_slider_image($post_id, array(
                    'alt'           => esc_attr(get_the_title($post_id)),
                    'loading'       => 'lazy',
                    'decoding'      => 'async',
                    'fetchpriority' => 'low',
                ));
            }
        ?>
            <div class="mobile-slide" data-index="<?php echo esc_attr($index); ?>">
                <div class="slider-item-bg"><?php echo $img_html; ?></div>

                <div class="cv-container image-overlay">
                    <div class="cv-outer">
                        <div class="cv-inner">
                            <div class="slider-info">

                                <div class="slider-categories">
                                    <?php echo wp_kses_post(get_the_category_list(', ', '', $post_id)); ?>
                                </div>

                                <h2 class="slider-title">
                                    <a href="<?php echo esc_url(get_permalink($post_id)); ?>">
                                        <?php echo esc_html(get_the_title($post_id)); ?>
                                    </a>
                                </h2>

                                <div class="slider-content">
                                    <p><?php echo esc_html($excerpt); ?></p>
                                </div>

                                <div class="slider-date">
                                    <?php echo esc_html(get_the_date(get_option('date_format'), $post_id)); ?>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <a href="<?php echo esc_url(get_permalink($post_id)); ?>" class="mobile-global-link">
                    <span class="screen-reader-text"><?php echo esc_html('Lire l’article : ' . get_the_title($post_id)); ?></span>
                </a>
            </div>
        <?php endforeach; ?>

        <?php
        /* =========================
		   CLONE FIRST (après le dernier)
		   ========================= */
        $post = $first_post;
        setup_postdata($post);

        $post_id = (int) $post->ID;
        $excerpt = mobile_slider_get_excerpt($post);

        $img_html = mobile_slider_image($post_id, array(
            'alt'           => '',
            'loading'       => 'lazy',
            'decoding'      => 'async',
            'fetchpriority' => 'low',
        ));
        ?>
        <div class="mobile-slide clone-first" data-index="0">
            <div class="slider-item-bg"><?php echo $img_html; ?></div>

            <div class="cv-container image-overlay">
                <div class="cv-outer">
                    <div class="cv-inner">
                        <div class="slider-info">

                            <div class="slider-categories">
                                <?php echo wp_kses_post(get_the_category_list(', ', '', $post_id)); ?>
                            </div>

                            <h2 class="slider-title">
                                <a href="<?php echo esc_url(get_permalink($post_id)); ?>">
                                    <?php echo esc_html(get_the_title($post_id)); ?>
                                </a>
                            </h2>

                            <div class="slider-content">
                                <p><?php echo esc_html($excerpt); ?></p>
                            </div>

                            <div class="slider-date">
                                <?php echo esc_html(get_the_date(get_option('date_format'), $post_id)); ?>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <a href="<?php echo esc_url(get_permalink($post_id)); ?>" class="mobile-global-link">
                <span class="screen-reader-text"><?php echo esc_html('Lire l’article : ' . get_the_title($post_id)); ?></span>
            </a>
        </div>

        <?php wp_reset_postdata(); ?>
    </div>

    <div class="slider-dots">
        <?php for ($i = 0; $i < $total_slides; $i++) : ?>
            <button
                type="button"
                class="<?php echo ($i === 0) ? 'active' : ''; ?>"
                data-target="<?php echo esc_attr($i); ?>"
                aria-label="<?php echo esc_attr('Aller au slide ' . ($i + 1)); ?>">
            </button>
        <?php endfor; ?>
    </div>

</div>

<?php
// Fin : on coupe le flag
unset($GLOBALS['mobile_slider_rendering']);
