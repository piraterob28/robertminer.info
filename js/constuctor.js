window.onload = function() {
    const companyInfo = {
        sel: {
            name: "SEL",
            image: "assets/img/sel_logo.png",
            position: "Associate Software Engineer!",
            tagLine: "I saw that you were seeking a professional, innovative and detail-oriented individual for your Software Engineer position with a C# and Javascript emphasis. I believe I could be that developer!"
        },
    };

    const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1);
    
    const companyResponse = getLastItem(window.location.href).toLowerCase();
    
    
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