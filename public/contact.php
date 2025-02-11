<?php
require_once '../base.php';
?>

<?php require_once BASE_PROJET . '/src/_partials/header.php'; ?>

<div class="container mt-5">
    <!-- En-tête -->
    <div class="bg-primary text-white text-center p-5 rounded">
        <h1 class="fw-bold"><i class="bi bi-envelope"></i> Contactez-nous</h1>
        <p class="lead">Notre équipe est à votre écoute</p>
    </div>

    <div class="row mt-5">
        <!-- Formulaire de contact -->
        <div class="col-lg-6">
            <h2 class="text-primary"><i class="bi bi-chat-dots"></i> Formulaire de contact</h2>
            <form action="contact_process.php" method="POST" class="mt-4">
                <div class="mb-3">
                    <label for="name" class="form-label">Nom complet</label>
                    <input type="text" class="form-control" id="name" name="name" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" name="email" required>
                </div>
                <div class="mb-3">
                    <label for="subject" class="form-label">Sujet</label>
                    <input type="text" class="form-control" id="subject" name="subject" required>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary w-100">Envoyer</button>
            </form>
        </div>

        <!-- Informations de contact -->
        <div class="col-lg-6">
            <h2 class="text-primary"><i class="bi bi-telephone"></i> Informations de contact</h2>
            <ul class="list-group list-group-flush mt-4">
                <li class="list-group-item">
                    <i class="bi bi-telephone-fill text-primary"></i> <strong>Téléphone :</strong> +33 (0)1 23 45 67 89
                </li>
                <li class="list-group-item">
                    <i class="bi bi-envelope-fill text-primary"></i> <strong>Email :</strong> contact@predimed.fr
                </li>
                <li class="list-group-item">
                    <i class="bi bi-geo-alt-fill text-primary"></i> <strong>Adresse :</strong><br>
                    123 Avenue de la Santé<br>
                    75000 Paris, France
                </li>
            </ul>

            <!-- Carte Google Maps -->
            <div class="mt-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615674431!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647874587123!5m2!1sfr!2sfr"
                    width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </div>
</div>

<?php require_once BASE_PROJET . '/src/_partials/footer.php'; ?>
