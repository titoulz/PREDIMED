<?php
require_once '../base.php';
?>

<?php require_once BASE_PROJET . '/src/_partials/header.php'; ?>

<div class="container mt-5">
    <h2 class="text-center text-primary fw-bold">Nos Partenaires</h2>
    <p class="text-center text-muted">Découvrez nos partenaires qui collaborent avec nous pour innover en télésurveillance médicale.</p>

    <div class="row row-cols-1 row-cols-md-3 g-4 mt-4">
        <?php
        $partenaires = [
            ["img" => "path/to/logo_ars.png", "name" => "ARS"],
            ["img" => "path/to/logo_centich.png", "name" => "CENTICH"],
            ["img" => "path/to/logo_grand_est.png", "name" => "Région Grand Est"],
            ["img" => "path/to/logo_hus.png", "name" => "Les Hôpitaux Universitaires de Strasbourg"],
            ["img" => "path/to/logo_sante_compagnie.png", "name" => "Santé & Compagnie"],
            ["img" => "path/to/logo_asdia.png", "name" => "ASDIA"],
            ["img" => "path/to/logo_crt.png", "name" => "Centre de Ressource Territorial"],
            ["img" => "path/to/logo_iso13485.png", "name" => "ISO 13485"],
            ["img" => "path/to/logo_ans.png", "name" => "ANS"],
            ["img" => "path/to/logo_interoperabilite.png", "name" => "Interopérabilité"],
            ["img" => "path/to/logo_iso27001.png", "name" => "ISO 27001"],
            ["img" => "path/to/logo_hds.png", "name" => "HDS"],
            ["img" => "path/to/logo_les_opalines.png", "name" => "Les Opalines"],
            ["img" => "path/to/logo_chru_besancon.png", "name" => "CHRU Besançon"],
            ["img" => "path/to/logo_mutualite_francaise.png", "name" => "Mutualité Française"],
        ];

        foreach ($partenaires as $partenaire) {
            echo '<div class="col">';
            echo '    <div class="card text-center shadow-sm">';
            echo '        <div class="card-body">';
            echo '            <img src="' . $partenaire['img'] . '" class="img-fluid mb-3" alt="' . $partenaire['name'] . '" style="max-height: 100px;">';
            echo '            <h5 class="card-title text-primary">' . $partenaire['name'] . '</h5>';
            echo '        </div>';
            echo '    </div>';
            echo '</div>';
        }
        ?>
    </div>
</div>

<?php require_once BASE_PROJET . '/src/_partials/footer.php'; ?>
