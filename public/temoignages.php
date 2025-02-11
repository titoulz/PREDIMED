<?php
require_once '../base.php';
?>


<?php
require_once BASE_PROJET . '/src/_partials/header.php';

$testimonials = [
    [
        "title" => "De la télésurveillance pour les insuffisants cardiaques, une première mondiale",
        "description" => "Dans le cadre de la semaine du cœur, une grande journée d'information sur l'insuffisance cardiaque est organisée au NHC à Strasbourg. L'insuffisance cardiaque concerne 1,2 millions de Français, chaque année 120.000 nouveaux cas sont détectés. À Strasbourg, une 1ère française est testée : de la télésurveillance médicale, nous sommes en plein dans ce que l'on appelle l'intelligence artificielle.",
        "videoUrl" => "https://youtu.be/amwpZ3ywUWM",
        "category" => "Innovation Médicale",
        "icon" => "bi-heart-pulse"
    ],
    [
        "title" => "La télésurveillance médicale pour les diabétiques",
        "description" => "Le diabète est une hyperglycémie chronique dont la gravité repose sur des complications, aigües ou chroniques, qui sont liées aux difficultés de suivi des patients. DIABETe est un projet initié par Predimed Technology en collaboration avec le Centich et les HUS pour évaluer un nouveau modèle de parcours de soin pour le patient diabétique à haut risque cardiovasculaire.",
        "videoUrl" => "https://youtu.be/Cw4isMJrgao",
        "category" => "Suivi Diabétique",
        "icon" => "bi-activity"
    ],
    [
        "title" => "Télésurveillance médicale à domicile de patients post-covid",
        "description" => "Reportage de France 3 Alsace sur le projet CovidRAD en collaboration avec les Hôpitaux Universitaires de Strasbourg. Découvrez l'expérience d'un patient covid post-hospitalisation de retour à son domicile grâce au dispositif médical de télésurveillance PREDIMED.",
        "videoUrl" => "https://youtu.be/1WkjxcVXmbQ",
        "category" => "Post-COVID",
        "icon" => "bi-shield-lock"
    ],
    [
        "title" => "Insuffisance cardiaque et télémédecine",
        "description" => "L'âge moyen de l'insuffisance cardiaque est de 75 ans et tue plus que l'infarctus du myocarde. Cette maladie chronique est la première cause de consultation dans les pays occidentaux. Découvrez comment la télémédecine révolutionne le suivi des patients.",
        "videoUrl" => "https://youtu.be/_wBNhHp5I70",
        "category" => "Cardiologie",
        "icon" => "bi-heart"
    ],
    [
        "title" => "La télémédecine par Predimed Technology",
        "description" => "PREDIMED est la nouvelle plateforme intelligente de télésurveillance médicale. Son principe est simple : grâce à l'intelligence artificielle issue d'une collaboration entre médecins et ingénieurs, la plateforme détecte les premiers symptômes de décompensation cardiaque du patient.",
        "videoUrl" => "https://youtu.be/trsF9mxTt14",
        "category" => "Innovation",
        "icon" => "bi-people"
    ]
];

// Fonction pour extraire l'ID d'une vidéo YouTube
function getYouTubeVideoId($url) {
    preg_match("/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.+&v=))([^&?]+)/", $url, $matches);
    return $matches[1] ?? "";
}
?>

<div class="container mt-5">
    <!-- Hero Section -->
    <div class="bg-primary text-white text-center p-5 rounded">
        <h1 class="fw-bold">Témoignages</h1>
        <p class="lead">Découvrez les expériences de nos utilisateurs avec PREDIMED</p>
    </div>

    <!-- Témoignages Grid -->
    <div class="row mt-5">
        <?php foreach ($testimonials as $index => $testimonial): ?>
            <div class="col-md-6 mb-4">
                <div class="card shadow-sm">
                    <!-- Vidéo -->
                    <a href="<?= $testimonial['videoUrl']; ?>" target="_blank" class="position-relative">
                        <img src="https://img.youtube.com/vi/<?= getYouTubeVideoId($testimonial['videoUrl']); ?>/maxresdefault.jpg"
                             class="card-img-top" alt="<?= $testimonial['title']; ?>">
                        <div class="position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-50 text-white p-3 rounded-circle">
                            <i class="bi bi-play-circle fs-1"></i>
                        </div>
                    </a>

                    <!-- Contenu -->
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                            <i class="bi <?= $testimonial['icon']; ?> text-primary fs-4 me-2"></i>
                            <span class="text-primary"><?= $testimonial['category']; ?></span>
                        </div>
                        <h5 class="card-title"><?= $testimonial['title']; ?></h5>
                        <p class="card-text text-muted"><?= $testimonial['description']; ?></p>
                        <a href="<?= $testimonial['videoUrl']; ?>" target="_blank" class="btn btn-outline-primary">
                            <i class="bi bi-box-arrow-up-right"></i> Voir sur YouTube
                        </a>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>

<?php
require_once BASE_PROJET . '/src/_partials/footer.php';
?>
