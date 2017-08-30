$(document).ready(function(){
    
    // Déclaration de variable pour eviter de les appeler X fois
    var $choice = $("#content > div");
    var $back = $("#back");
    var $message = $("#message");
    var $form = $("form");
    
    //Si le media queries est au dessus de 1280px
    if (window.matchMedia("(min-width: 1280px)").matches) {
        // Lorsque l'on clique sur un choix
        $choice.click(function(){

            //On anime le bloc choisi
            $(this).css({
                          width: "120%",
                          zIndex : "10",
                          cursor: "default"
                        });

            //On montre le bouton back
            $back.fadeIn();

            //On anime et cache le message
            $message.animate({
                                top:"70%",
                                opacity:0
                            });

            //On anime et montre le formulaire
            $form.css("display", "block")
                 .animate({
                            left:"50%",
                            opacity:1
                         });

        });

        // Lorsque l'on clique sur le bouton back
        $back.click(function(){

            //On cache le bouton back
            $(this).fadeOut();

            //On anime le bloc choisi précédemment, et on le remet comme avant
            $choice.css("width","60%");

            //Avec un délais on enleve l'attribut style de l'élément choisi
            setTimeout( function() {

                $choice.removeAttr("style");

            }, 250);

            //On montre le message avec une animation
            $message.animate({
                                top:"50%",
                                opacity:1
                            });

            //On cache le formulaire avec une animation
            $form.css("display", "none")
                 .animate({
                            left:"20%",
                            opacity:0
                         });

        });
        
    }
    
    //S'il est en dessous de 1280px
    else if(window.matchMedia("(min-width: 768px)").matches){
        // Lorsque l'on clique sur un choix
        $choice.click(function(){

            //On anime le bloc choisi
            $(this).css({
                          width: "140%",
                          zIndex : "10",
                          cursor: "default"
                        });

            //On montre le bouton back
            $back.fadeIn();

            //On anime et cache le message
            $message.animate({
                                top:"70%",
                                opacity:0
                            });

            //On anime et montre le formulaire
            $form.css("display", "block")
                 .animate({
                            left:"50%",
                            opacity:1
                         });

        });

        // Lorsque l'on clique sur le bouton back
        $back.click(function(){

            //On cache le bouton back
            $(this).fadeOut();

            //On anime le bloc choisi précédemment, et on le remet comme avant
            $choice.css("width","70%");

            //Avec un délais on enleve l'attribut style de l'élément choisi
            setTimeout( function() {

                $choice.removeAttr("style");

            }, 250);

            //On montre le message avec une animation
            $message.animate({
                                top:"50%",
                                opacity:1
                            });

            //On cache le formulaire avec une animation
            $form.css("display", "none")
                 .animate({
                            left:"20%",
                            opacity:0
                         });

        });
    }
    
    //S'il est en dessous de 768px
    else{
        // Lorsque l'on clique sur un choix
        $choice.click(function(){

            //On anime le bloc choisi
            $(this).css({
                          height: "100vh",
                          zIndex : "10",
                          cursor: "default"
                        });
            
            $("img").css("height","100vh");

            //On montre le bouton back
            $back.fadeIn();

            //On anime et cache le message
            $message.animate({
                                top:"70%",
                                opacity:0
                            });

            //On anime et montre le formulaire
            $form.css("display", "block")
                 .animate({
                            left:"50%",
                            opacity:1
                         });

        });

        // Lorsque l'on clique sur le bouton back
        $back.click(function(){

            //On cache le bouton back
            $(this).fadeOut();

            //On anime le bloc choisi précédemment, et on le remet comme avant
            $choice.css("height","50vh");
            
            $("img").css("height","50vh");

            //Avec un délais on enleve l'attribut style de l'élément choisi
            setTimeout( function() {

                $choice.removeAttr("style");
                $("img").removeAttr("style");

            }, 250);

            //On montre le message avec une animation
            $message.animate({
                                top:"50%",
                                opacity:1
                            });

            //On cache le formulaire avec une animation
            $form.css("display", "none")
                 .animate({
                            left:"20%",
                            opacity:0
                         });

        });
    }
    
});