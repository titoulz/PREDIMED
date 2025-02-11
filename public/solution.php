<?php
require_once '../base.php';
?>

<?php
require_once BASE_PROJET . '/src/_partials/header.php';
?>

<div class="container mt-5">
    <!-- Hero Section -->
    <div class="bg-primary text-white text-center p-5 rounded">
        <h1 class="fw-bold">Notre Solution</h1>
        <p class="lead">Une approche innovante de la télésurveillance médicale pour les pathologies chroniques</p>
    </div>

    <!-- Introduction -->
    <section class="mt-5">
        <p class="fs-5 text-center text-muted">
            MyPrédi est une solution innovante de télésurveillance médicale dédiée à la prise en charge
            des patients atteints de pathologies chroniques et polypathologiques. Elle permet un suivi
            médical à distance efficace et personnalisé, intégrant des dispositifs médicaux connectés
            installés au domicile des patients.
        </p>
    </section>

    <!-- Pathologies Prises en Charge -->
    <section class="mt-5">
        <h2 class="text-center text-primary mb-4">Pathologies Prises en Charge</h2>
        <div class="row">
            <?php
            $pathologies = [
                ["icon" => "bi-heart-pulse", "name" => "Pathologies des personnes âgées", "description" => "Désordres gérontologiques"],
                ["icon" => "bi-stethoscope", "name" => "Télésurveillance post-opératoire", "description" => "Suivi après intervention"],
                ["icon" => "bi-heart", "name" => "Insuffisance cardiaque", "description" => "Suivi cardiaque continu"],
                ["icon" => "bi-lungs", "name" => "Insuffisance respiratoire", "description" => "Surveillance respiratoire"],
                ["icon" => "bi-droplet", "name" => "Insuffisance rénale", "description" => "Monitoring rénal"],
                ["icon" => "bi-bandaid", "name" => "Diabète", "description" => "Contrôle glycémique"]
            ];
            foreach ($pathologies as $item): ?>
                <div class="col-md-4">
                    <div class="card shadow-sm mb-4">
                        <div class="card-body text-center">
                            <i class="bi <?= $item['icon']; ?> text-primary fs-2"></i>
                            <h5 class="mt-3"><?= $item['name']; ?></h5>
                            <p class="text-muted"><?= $item['description']; ?></p>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <!-- Dispositifs Médicaux -->
    <section class="mt-5 bg-light p-4 rounded">
        <h2 class="text-center text-primary mb-4">Dispositifs Médicaux Connectés</h2>
        <ul class="list-group list-group-flush">
            <?php
            $devices = [
                "Capteurs physiologiques", "Montres et bracelets intelligents", "Tensiomètres",
                "Électrocardiographes", "Oxymètres de pouls", "Balances médicales",
                "Thermomètres", "Glucomètres", "Stéthoscopes numériques", "Dispositifs de mesure respiratoire"
            ];
            foreach ($devices as $device): ?>
                <li class="list-group-item"><i class="bi bi-arrow-right-circle text-primary"></i> <?= $device; ?></li>
            <?php endforeach; ?>
        </ul>
    </section>

    <!-- Certifications -->
    <section class="mt-5">
        <h2 class="text-center text-primary mb-4">Certifications et Sécurité</h2>
        <div class="row">
            <?php
            $certifications = [
                ["icon" => "bi-shield-lock", "title" => "Dispositif médical", "description" => "Classé C.E., dispositif médical de classe 1"],
                ["icon" => "bi-lock", "title" => "Sécurité des données", "description" => "Certifications ISO 13485, ISO 27001 et HDS"],
                ["icon" => "bi-database", "title" => "Protection des données", "description" => "Conformité RGPD et confidentialité garantie"]
            ];
            foreach ($certifications as $cert): ?>
                <div class="col-md-4">
                    <div class="card shadow-sm text-center mb-4">
                        <div class="card-body">
                            <i class="bi <?= $cert['icon']; ?> text-primary fs-2"></i>
                            <h5 class="mt-3"><?= $cert['title']; ?></h5>
                            <p class="text-muted"><?= $cert['description']; ?></p>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <!-- Objectifs -->
    <section class="mt-5 bg-light p-4 rounded">
        <h2 class="text-center text-primary mb-4">Objectifs de la Télésurveillance</h2>
        <div class="row">
            <?php
            $objectives = [
                ["icon" => "bi-check-circle", "title" => "Détection précoce", "description" => "Détecter précocement les signes de détérioration de l'état de santé."],
                ["icon" => "bi-activity", "title" => "Réduction des urgences", "description" => "Réduire le recours aux urgences et les hospitalisations évitables."],
                ["icon" => "bi-people", "title" => "Optimisation du travail", "description" => "Faciliter le travail des professionnels de santé avec un suivi à distance fiable."],
                ["icon" => "bi-heart-pulse", "title" => "Qualité de vie", "description" => "Favoriser le maintien à domicile des patients en toute sécurité."],
                ["icon" => "bi-tablet", "title" => "Flexibilité de gestion", "description" => "Offrir une gestion flexible de la télésurveillance, externalisée ou interne."]
            ];
            foreach ($objectives as $obj): ?>
                <div class="col-md-4">
                    <div class="card shadow-sm text-center mb-4">
                        <div class="card-body">
                            <i class="bi <?= $obj['icon']; ?> text-primary fs-2"></i>
                            <h5 class="mt-3"><?= $obj['title']; ?></h5>
                            <p class="text-muted"><?= $obj['description']; ?></p>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

</div>

<?php
require_once BASE_PROJET . '/src/_partials/footer.php';
?>
