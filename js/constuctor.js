window.onload = function() {
    const companyInfo = {
        sel: {
            name: "SEL",
            image: "assets/img/sel_logo.png",
            position: "Associate Software Engineer!",
            traits: {
                trait_1: "Blah Blah Blah Blah Blah Blah 1",
                image_1: "assets/img/Done_all_round_fill.svg",
                trait_2: "Blah Blah Blah Blah Blah Blah 2 ",
                image_2: "assets/img/thumb_up.svg",
                trait_3: "Blah Blah Blah Blah Blah Blah 3",
                image_3: "assets/img/Trophy.svg",
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
            $("#company-trait-image-1").attr("src",traits.image_1)
            $("#company-trait-text-2").append(traits.trait_2)
            $("#company-trait-image-2").attr("src",traits.image_2)
            $("#company-trait-text-3").append(traits.trait_3)
            $("#company-trait-image-3").attr("src",traits.image_3)
        }
        company_render(companyInfo[companyResponse]);
    } else {
        $("#about-anchor").addClass("active");
    }
  }