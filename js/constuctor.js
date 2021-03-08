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
            position: "Software Development Engineer in Test!",
            tagLine: "I saw that you were looking for an enginner to enhance and maintain your automated test framework and QA processes to ensure the delivery of a quality business application software product. I believe I could be that developer!"
        }
        };

    const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1);
    
    const companyResponse = getLastItem(window.location.pathname).toLowerCase();
    
    if (companyResponse in companyInfo){
        $("#hello").css("display", "flex");
        $("#hello-li").attr("style","");
        
        function company_render({name, image, position, tagLine}) {
            $("#hello-anchor").addClass("active");
            $("#about-anchor").removeClass("active");
            $("#company-name").append(name);
            $("#company-image").attr("src",image);
            $("#position").append(position);
            $("#tagLine").append(tagLine);
        }
        company_render(companyInfo[companyResponse]);
    } else {
        $("#about-anchor").addClass("active");
    }
  }