window.onload = function() {
    const companyInfo = {
        sel: {
            name: "SEL",
            image: "assets/img/sel_logo.png",
            position: "Associate Software Engineer!",
            traits: {
                trait_1: "Blah Blah Blah Blah Blah Blah",
                image_1: "assets/img/salesforece.jpg",
                trait_2: "Blah Blah Blah Blah Blah Blah",
                image_2: "assets/img/salesforece.jpg",
                trait_3: "Blah Blah Blah Blah Blah Blah",
                image_3: "assets/img/salesforece.jpg",
            },
            tagLine: "I saw that you were seeking a professional, innovative and detail-oriented individual for your Software Engineer position with a C# and Javascript emphasis. I believe I could be that developer!"
        },
    };

    const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1);
    
    const companyResponse = getLastItem(window.location.href).toLowerCase();
    
    
    if (companyResponse in companyInfo){
        $("#hello").css("display", "flex");
        $("#hello-li").attr("style","");
        
        function company_render({name, image, position, traits, tagLine}) {
            $("#hello-anchor").addClass("active");
            $("#about-anchor").removeClass("active");
            $("#company-name").append(name);
            $("#company-image").attr("src",image);
            $("#position").append(position);
            $("#tagLine").append(tagLine);
            $("#trait-1").append(traits.trait_1)
            $("#image-1").append(traits.image_1)
            $("#trait-2").append(traits.trait_2)
            $("#image-2").append(traits.image_2)
            $("#trait-3").append(traits.trait_3)
            $("#image-3").append(traits.image_3)
        }
        company_render(companyInfo[companyResponse]);
    } else {
        $("#about-anchor").addClass("active");
    }
  }