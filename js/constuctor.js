window.onload = function() {
    const companyInfo = {
        liiingo: {
            name: "Liiingo",
            image: "assets/img/Liiingo-logo_gradient.png",
            position: "JR. SOFTWARE DEVELOPER!", 
            tagLine: "I saw that you were looking for a developer that is interested in growing themselves and their skillset just as fast as they possibly can. I believe I could be that developer!"
        },
        scentsy: {
            name: "Scentsy",
            image: "assets/img/scentsy_logo_header.svg",
            position: "Entry Level Software Developer",
            tagLine: "I saw that you were looking for a developer with a lot of go getter attitude. I believe I could be that developer!"
        }
        };

    const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1);
    
    const companyResponse = getLastItem(window.location.pathname).toLowerCase();

    if (companyResponse in companyInfo){
        $("#hello").style.display = "flex";
        $("#hello-li").setAttribute("style","");
        $("#hello-anchor").className = "nav-link js-scroll-trigger active";
        $("#about-anchor").className = "nav-link js-scroll-trigger";

        function company_render({name, image, position, tagLine}) {
            $("#company-name").innerHTML=name;
            $("#company-image").src=image;
            $("#position").innerHTML=position;
            $("#tagLine").innerHTML=tagLine;
        }

        company_render(companyInfo[companyResponse]);
    }
}
