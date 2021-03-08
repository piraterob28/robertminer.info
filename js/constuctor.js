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
            tagLine: "I saw that you were looking for an engineer to enhance and maintain your automated test framework and QA processes to ensure the delivery of a quality business application software product. I believe I could be that developer!"
        },
        bastian: {
            name: "Bastian",
            image: "assets/img/bastian_logo.png",
            position: "Software Engineer I!",
            tagLine: "I saw that you were looking for a Software Engineer I to work with a small R&D team in Boise to produce an industry leading Mobile Robotic solution for the Material Handling Industry.  I believe I could be that developer!"
        },
        sel: {
            name: "SEL",
            image: "assets/img/sel_logo.png",
            position: "Associate Software Engineer!",
            tagLine: "I saw that you were seeking a professional, innovative and detail-oriented individual for your Software Engineer position with a C# and Javascript emphasis. I believe I could be that developer!"
        },
        "4mile": {
            name: "4MILE",
            image: "assets/img/4MILE_logo.png",
            position: "Junior Software Engineer!",
            tagLine: "I saw that you were seeking an engineer looking for opportunities to develop their technical, leadership, and business skills. I believe I could be that developer!"
        }
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