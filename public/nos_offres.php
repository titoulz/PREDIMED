<?php
require_once '../base.php';
?>

<?php require_once BASE_PROJET . '/src/_partials/header.php'; ?>

<div class="container mt-5">
    <!-- En-tête -->
    <div class="bg-primary text-white text-center p-5 rounded">
        <h1 class="fw-bold">Nos Offres</h1>
        <p class="lead">Découvrez nos solutions de télésurveillance adaptées aux établissements de santé, centres territoriaux et médecins de ville.</p>
    </div>

    <!-- Onglets de navigation -->
    <ul class="nav nav-pills nav-justified mt-4">
        <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#hopitaux">Hôpitaux et Cliniques</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#crt">Centres de Ressources Territoriaux</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#medecins">Médecins de Ville</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#particuliers">Particuliers</a>
        </li>
    </ul>

    <div class="tab-content mt-4">
        <!-- Hôpitaux et Cliniques -->
        <div id="hopitaux" class="tab-pane fade show active">
            <h2 class="text-primary">Hôpitaux et Cliniques</h2>
            <p><strong>MyPrédi : Une Solution de Télésurveillance Médicale pour le Maintien à Domicile</strong></p>
            <p>Dans le cadre du développement du maintien à domicile, PREDIMED TECHNOLOGY déploie MyPrédi, une solution de télésurveillance médicale conçue pour assurer un suivi à distance des patients, en parfaite concertation avec les professionnels de santé.</p>
            <p><strong>Pathologies couvertes :</strong></p>
            <ul>
                <li>Gériatrie (prise en charge des troubles liés au vieillissement)</li>
                <li>Suivi post-opératoire en gastro-entérologie et chirurgie bariatrique</li>
                <li>Insuffisance cardiaque</li>
                <li>Insuffisance rénale</li>
                <li>Insuffisance respiratoire</li>
                <li>Diabète</li>
            </ul>
            <p><strong>Méthodologie de mise en place :</strong></p>
            <ul>
                <li>Élaboration du protocole de télésuivi</li>
                <li>Définition des critères de surveillance spécifiques à chaque pathologie</li>
                <li>Validation des protocoles en concertation avec les professionnels de santé</li>
                <li>Déploiement de dispositifs médicaux connectés</li>
                <li>Détection précoce des anomalies et envoi d’alertes en temps réel</li>
                <li>Mobilisation d’une équipe médicale et pluridisciplinaire 24h/24 et 7j/7</li>
                <li>Surveillance continue des données de santé</li>
                <li>Coordination avec les équipes soignantes</li>
            </ul>
        </div>

        <!-- Centres de Ressources Territoriaux -->
        <div id="crt" class="tab-pane fade">
            <h2 class="text-primary">Centres de Ressources Territoriaux</h2>
            <p>Le Centre de Ressources Territorial (CRT) a choisi MyPrédi, la solution de télésurveillance médicale développée par PREDIMED TECHNOLOGY, pour assurer le suivi des personnes âgées à domicile. Cette solution innovante, certifiée dispositif médical C.E., permet une surveillance continue des patients, notamment pour détecter les fragilités gériatriques, prévenir les complications et anticiper les passages aux urgences.
            </p>
            <p>Grâce à MyPrédi, les données de santé sont analysées en temps réel par une équipe médicale, garantissant une prise en charge rapide et adaptée aux besoins des patients. Cette solution est certifiée ISO 13485, ISO 27001 et HDS, assurant une sécurité maximale des données de santé et une conformité totale avec les exigences réglementaires. De plus, MyPrédi est interopérable avec les systèmes de santé nationaux et régionaux, facilitant la coordination entre les professionnels de santé et les structures médico-sociales.
            </p>
            <p>En intégrant MyPrédi, le CRT optimise le maintien à domicile des personnes âgées, tout en renforçant la prévention et la qualité des soins, dans une approche alliant innovation et sécurité.</p>
        </div>

        <!-- Médecins de Ville -->
        <div id="medecins" class="tab-pane fade">
            <h2 class="text-primary">Médecins de Ville</h2>
            <h3 class="text-secondary">MyPrédi : Une Solution de Télésurveillance Médicale Prédictive pour les Médecins Généralistes et Spécialistes</h3>
            <p>Dans un contexte où les médecins de ville, qu’ils soient généralistes ou spécialistes, sont de plus en plus sollicités pour le suivi des patients chroniques et polypathologiques, MyPrédi leur offre un outil innovant et prédictif pour une prise en charge anticipative et efficace.</p>
            <p>Contrairement aux solutions classiques de télésurveillance qui déclenchent des alertes d’urgence immédiates, MyPrédi n’est pas un dispositif d’alerte en temps réel. Il repose sur une analyse prédictive des données cliniques, permettant aux médecins d’ajuster les traitements et d’anticiper d’éventuelles dégradations de l’état de santé de leurs patients.</p>
            <p>Grâce à une collecte continue et une analyse avancée des paramètres médicaux, MyPrédi génère des rapports médicaux détaillés, facilitant ainsi le suivi à distance et optimisant la décision thérapeutique.</p>

            <h3 class="text-secondary">Une Télésurveillance Médicale Encadrée par les Médecins</h3>
            <p>MyPrédi est conçu pour être un outil d’aide à la décision médicale, en respectant un protocole défini par le médecin généraliste ou spécialiste. Il s’adapte aux besoins spécifiques de chaque patient et des médecins qui assurent leur suivi.
            </p>
            <p>Les données collectées sont traitées selon un protocole clinique personnalisé, défini avec le médecin, qui décide :</p>
            <ul>
                <li>Quels paramètres de santé doivent être surveillés en priorité (tension artérielle, fréquence cardiaque, glycémie, poids, saturation en oxygène, etc.).</li>
                <li>La fréquence des rapports de suivi (journalier, hebdomadaire ou mensuel).</li>
                <li>Les seuils et tendances à surveiller pour anticiper les complications.</li>
                <li>La coordination avec les infirmiers(ères) et autres professionnels de santé pour assurer un suivi optimal.</li>
            </ul>

            <h3 class="text-secondary">Un Outil Conçu pour Faciliter le Travail des Médecins de Ville</h3>
            <p>Un Accès Facilité à un Historique Médical Consolidé :</p>
            <p>MyPrédi collecte, stocke et analyse en continu les données médicales des patients. Contrairement aux consultations ponctuelles, où les médecins doivent s’appuyer sur des mesures isolées ou sur les déclarations des patients, MyPrédi leur donne accès à un historique détaillé des données cliniques.</p>
            <ul>
                <li>Une vision complète et évolutive de l’état du patient sur plusieurs semaines ou mois.</li>
                <li>Des tendances et corrélations cliniques identifiées, facilitant le diagnostic.</li>
                <li>Une meilleure évaluation de l’efficacité des traitements et des ajustements nécessaires.</li>
            </ul>
            <p>Un Gain de Temps et une Optimisation de la Prise en Charge</p>
            <p>Les médecins reçoivent des rapports médicaux synthétiques, évitant ainsi de devoir analyser eux-mêmes des centaines de données brutes.</p>
            <ul>
                <li>Rapport journalier : Pour un suivi intensif des patients les plus fragiles.</li>
                <li>Rapport hebdomadaire : Une vue d’ensemble des paramètres pour ajuster le protocole de soins.</li>
                <li>Rapport mensuel : Analyse complète de l’évolution de la santé du patient sur le long terme.</li>
            </ul>
            <p>Ces rapports permettent d’adapter les traitements en fonction des tendances réelles, et non sur une simple mesure prise lors de la consultation.</p>

            <h3 class="text-secondary">Les Avantages Clés pour les Médecins Généralistes et Spécialistes</h3>
            <p>Amélioration du Diagnostic et de la Prise en Charge</p>
            <ul>
                <li>Accès à un historique clinique structuré permettant une analyse approfondie de l’évolution du patient.</li>
                <li>Anticipation des complications avant qu’elles ne nécessitent une intervention en urgence.</li>
                <li>Détection précoce des dégradations de l’état de santé, facilitant la prise de décision médicale.</li>
            </ul>
            <p> Une Coordination Renforcée avec les Infirmiers et les Services de Soins à Domicile</p>
            <ul>
                <li>Transmission des rapports aux infirmiers et aux SSIAD, qui assurent un suivi régulier des patients.</li>
                <li>Adaptation du protocole de soins en fonction des données cliniques collectées.</li>
            </ul>
            <p>Un Suivi Sécurisé et Conformité aux Normes Réglementaires</p>
            <ul>
                <li>Interopérabilité certifiée par l’ANS, garantissant une intégration fluide avec les Dossiers Médicaux Partagés (DMP) et les systèmes hospitaliers.</li>
                <li>Protection des données médicales certifiée ISO 27001 et HDS, garantissant une sécurisation maximale des informations patients.</li>
            </ul>
            <p>Une Réduction des Hospitalisations Évitables</p>
            <ul>
                <li>Meilleure gestion des maladies chroniques, évitant les hospitalisations non planifiées.</li>
                <li>Diminution du recours aux urgences grâce à une détection anticipée des complications.</li>
            </ul>

            <h3 class="text-secondary">Pourquoi Intégrer MyPrédi dans la Pratique des Médecins de Ville ?</h3>
            <ul>
                <li>Un dispositif médical certifié C.E., assurant sécurité et fiabilité clinique.</li>
                <li>Un outil de suivi médical structuré et personnalisable, selon les protocoles des médecins.</li>
                <li>Une meilleure anticipation des complications et une adaptation proactive des traitements.</li>
                <li>Un accès rapide à des rapports détaillés, permettant un gain de temps considérable en consultation.</li>
                <li>Une solution interopérable, conforme aux normes de cybersécurité et de protection des données médicales.</li>
                <li>Un renforcement du lien entre médecins, infirmiers et autres professionnels de santé, assurant une continuité des soins optimisée.</li>
            </ul>

            <h3 class="text-secondary">Un Outil de Prédiction Médicale au Service des Médecins de Ville</h3>
            <p>Avec MyPrédi, les médecins généralistes et spécialistes disposent d’un outil médical avancé, leur permettant de :</p>
            <ul>
                <li>Mieux évaluer la condition de leurs patients chroniques grâce à des données consolidées.</li>
                <li>Prendre des décisions plus éclairées sur l’évolution des traitements.</li>
                <li>Réduire la pression sur leur activité quotidienne en optimisant le suivi à distance.</li>
                <li>Améliorer la coordination des soins, en lien avec les infirmiers et les structures médico-sociales.</li>
            </ul>
            <p>En intégrant MyPrédi dans leur pratique, les médecins de ville bénéficient d’un véritable allié dans la prise en charge des patients à domicile, en toute sécurité et avec une précision clinique accrue.</p>



        </div>

        <!-- Particuliers -->
        <div id="particuliers" class="tab-pane fade">
            <h2 class="text-primary">Particuliers</h2>

            <h3 class="text-secondary">OMyPrédi pour les Particuliers : Un Suivi Médical Prédictif et Structuré</h3>
            <p>Dans un contexte où le maintien à domicile et la prévention des complications de santé sont essentiels, MyPrédi, développé par PREDIMED TECHNOLOGY, propose une approche innovante de télésurveillance médicale prédictive.</p>
            <p>MyPrédi n’est pas une solution d’urgence mais un dispositif médical prédictif permettant d’anticiper les risques de dégradation de l’état de santé des patients.</p>

            <h3 class="text-secondary">Une Solution de Suivi Structurée, et Non un Système d’Alerte d’Urgence</h3>
            <p>Grâce à son intelligence médicale intégrée, MyPrédi identifie les signes avant-coureurs de détérioration de l’état de santé et transmet des rapports réguliers aux infirmières ou aux services de soins infirmiers à domicile (SSIAD), qui évaluent la situation et appliquent les recommandations du protocole médical défini.</p>

            <h3 class="text-secondary">Un Suivi Médical Structuré et Adapté aux Pathologies Chroniques</h3>
            <p><strong>L’offre pour les particuliers repose sur la mise à disposition d’un kit de télésurveillance médicale comprenant des dispositifs médicaux connectés certifiés C.E. :</strong></p>
            <ul>
                <li>Tensiomètre connecté : suivi de la pression artérielle et prévention des risques d’hypertension.</li>
                <li>Oxymètre de pouls : surveillance de la saturation en oxygène pour les insuffisants respiratoires.</li>
                <li>Balance connectée : détection des variations de poids liées à des pathologies chroniques (diabète, insuffisance cardiaque…).</li>
                <li>Électrocardiographe : suivi cardiaque à distance et analyse des variations du rythme cardiaque.</li>
                <li>Glucomètre connecté : contrôle continu de la glycémie pour les patients diabétiques.</li>
                <li>Capteurs de température : surveillance des variations thermiques et prévention des infections.</li>
            </ul>

            <h3 class="text-secondary">Une Génération de Rapports Structurés pour un Suivi Optimisé</h3>
            <p><strong>Les rapports médicaux générés permettent aux professionnels de santé de détecter précocement les situations à risque et d’adapter les soins en amont des complications :</strong></p>
            <ul>
                <li><strong>Rapport journalier :</strong> Recommandé pour les patients nécessitant un suivi intensif.</li>
                <li><strong>Rapport hebdomadaire :</strong> Permet une évaluation intermédiaire et un ajustement des soins en fonction des tendances observées.</li>
                <li><strong>Rapport mensuel :</strong> Vision globale et consolidée de l’évolution de la santé du patient.</li>
            </ul>

            <h3 class="text-secondary">Pourquoi Choisir MyPrédi ?</h3>
            <ul>
                <li>✔ Une solution de télésurveillance prédictive et non un simple générateur d’alertes.</li>
                <li>✔ Un dispositif médical certifié C.E., garantissant sécurité et fiabilité clinique.</li>
                <li>✔ Un suivi structuré et encadré, défini par le médecin généraliste ou le spécialiste.</li>
                <li>✔ Des rapports détaillés pour une meilleure prise en charge et un suivi médical optimisé.</li>
                <li>✔ Une solution interopérable et conforme aux plus hauts standards de sécurité des données de santé.</li>
            </ul>

            <p><strong>Grâce à MyPrédi, les patients bénéficient d’un suivi structuré et personnalisé, tandis que les professionnels de santé disposent d’un outil de surveillance avancé pour améliorer la qualité des soins et prévenir les complications.</strong></p>
        </div>
    </div>
</div>

<?php require_once BASE_PROJET . '/src/_partials/footer.php'; ?>
