<?php
require_once '../base.php';
?>

<?php
require_once BASE_PROJET .
    '/src/_partials/header.php';
?>

<div class="container mt-5">
    <div class="text-center">
        <h1 class="fw-bold text-primary">Bienvenue sur MyPrédi</h1>
        <p class="lead">Une solution innovante de télésurveillance médicale</p>
    </div>

    <section class="my-5">
        <div class="row">
            <div class="col-md-6">
                <h2 class="text-secondary">Notre Solution</h2>
                <p>
                    MyPrédi est une plateforme avancée de télésurveillance médicale, permettant un suivi précis et personnalisé des patients atteints de pathologies chroniques et polypathologiques.
                </p>
                <ul>
                    <li>Pathologies des personnes âgées</li>
                    <li>Insuffisance cardiaque et respiratoire</li>
                    <li>Suivi post-opératoire</li>
                    <li>Diabète, insuffisance rénale</li>
                </ul>
                <a href="#" class="btn btn-primary">En savoir plus</a>
            </div>
            <div class="col-md-6 text-center">
                <img src="assets/images/telemedecine.jpg" class="img-fluid rounded shadow" alt="Télésurveillance Médicale">
            </div>
        </div>
    </section>

    <section class="bg-light p-4 rounded shadow-sm">
        <h2 class="text-center text-secondary">Nos Engagements</h2>
        <div class="row text-center">
            <div class="col-md-4">
                <i class="bi bi-shield-check text-primary" style="font-size: 3rem;"></i>
                <h4>Sécurité des données</h4>
                <p>Conforme aux normes ISO 27001 et RGPD</p>
            </div>
            <div class="col-md-4">
                <i class="bi bi-heart-pulse text-danger" style="font-size: 3rem;"></i>
                <h4>Suivi personnalisé</h4>
                <p>Une prise en charge adaptée pour chaque patient</p>
            </div>
            <div class="col-md-4">
                <i class="bi bi-gear-wide-connected text-success" style="font-size: 3rem;"></i>
                <h4>Interopérabilité</h4>
                <p>Compatible avec les systèmes de santé</p>
            </div>
        </div>
    </section>
</div>

<?php
require_once BASE_PROJET . '/src/_partials/footer.php';
?>
