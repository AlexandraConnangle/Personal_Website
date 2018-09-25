<!DOCTYPE html>
<html lang="fr">
    <head>
        <?php 
            include("cv/php/header/head.php");
        ?>
    </head>
    <body>
        <header id="top">
            <?php 
                include("cv/php/header/nav.php");
                include("cv/php/header/diaporama.php");
            ?>
        </header>
        <?php 
            include("cv/php/contents/presentation.php");
            include("cv/php/contents/ability.php");
            include("cv/php/contents/portfolio.php");
        ?>
        <script src="cv/js/jquery/jquery-3.3.1.min.js"></script>
        <script src="cv/js/small_menu.js"></script>
        <script src="cv/js/script.js"></script>
    </body>
</html>