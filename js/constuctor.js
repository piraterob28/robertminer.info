window.onload = function() {
    const companyInfo = {
        sel: {
            name: "SEL",
            image: "assets/img/sel_logo.png",
            position: "Associate Software Engineer!",
            traits: {
                trait_1: "Blah Blah Blah Blah Blah Blah",
                image_1: "assets/img/salesforce.jpg",
                trait_2: "Blah Blah Blah Blah Blah Blah",
                image_2: "assets/img/salesforce.jpg",
                trait_3: "Blah Blah Blah Blah Blah Blah",
                image_3: "assets/img/salesforce.jpg",
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
            $("#company-trait-text-1").append(traits.trait_1)
            $("#company-trait-image-1").src = traits.image_1
            $("#company-trait-text-2").append(traits.trait_2)
            $("#company-trait-image-2").src = traits.image_2
            $("#company-trait-text-3").append(traits.trait_3)
            $("#company-trait-image-3").src = traits.image_3
        }
        company_render(companyInfo[companyResponse]);
    } else {
        $("#about-anchor").addClass("active");
    }
  }