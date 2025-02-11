<?php
require_once '../base.php';
?>

<?php require_once BASE_PROJET . '/src/_partials/header.php'; ?>

<div class="container mt-5 text-center">
    <h1 class="fw-bold">Qui demande le suivi ?</h1>
    <p class="text-muted">Notre équipe médicale examinera votre demande et prendra contact avec vous dans les plus brefs délais.</p>

    <div class="row justify-content-center mt-4">
        <!-- Bénéficiaire -->
        <div class="col-md-4">
            <div class="card shadow-lg border-0 p-4">
                <img src="path/to/beneficiaire.png" alt="Bénéficiaire" class="img-fluid mx-auto" style="max-height: 150px;">
                <h3 class="mt-3">Je suis le <strong class="text-primary">Bénéficiaire</strong></h3>
            </div>
        </div>

        <!-- Professionnel -->
        <div class="col-md-4">
            <div class="card shadow-lg border-0 p-4">
                <img src="path/to/professionnel.png" alt="Professionnel" class="img-fluid mx-auto" style="max-height: 150px;">
                <h3 class="mt-3">Je suis un <strong class="text-danger">Professionnel</strong></h3>
            </div>
        </div>

        <!-- Proche -->
        <div class="col-md-4">
            <div class="card shadow-lg border-0 p-4">
                <img src="path/to/proche.png" alt="Proche" class="img-fluid mx-auto" style="max-height: 150px;">
                <h3 class="mt-3">Je suis un <strong class="text-success">Proche</strong></h3>
            </div>
        </div>
    </div>
</div>

<?php require_once BASE_PROJET . '/src/_partials/footer.php'; ?>
