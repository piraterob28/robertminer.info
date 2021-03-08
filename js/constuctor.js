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
        document.getElementById("hello").style.display = "flex";
        document.getElementById("hello-li").setAttribute = (style, "display:block");
        document.getElementById("hello-anchor").className = "nav-link js-scroll-trigger active";
        document.getElementById("about-anchor").className = "nav-link js-scroll-trigger";

        function company_render({name, image, position, tagLine}) {
            document.getElementById("company-name").innerHTML=name;
            document.getElementById("company-image").src=image;
            document.getElementById("position").innerHTML=position;
            document.getElementById("tagLine").innerHTML=tagLine;
        }

        company_render(companyInfo[companyResponse]);
    }
  }