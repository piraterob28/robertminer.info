window.onload = function() {
    const companyInfo = {
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
        }, 
        marketerhire: {
            name: "MarketerHire",
            image: "assets/img/marketerhire_logo.png",
            position: "Junior Developer!",
            tagLine: "I saw that you were seeking an Integrations Developer, that will be assisting your tech team in maintaining, building, and conceptualizing internal automations and workflows. I believe I could be that developer!"
        }, 
        remesh: {
            name: "remesh",
            image: "assets/img/remesh_logo.png",
            position: "Junior Software Developer in Test!",
            tagLine: "I saw that you were seeking a Junior Software Engineer in Test, who will ensure high-quality, rapid software releases by helping with your product teams' testing strategy by implementing automated and manual regression tests for new and updated features. I believe I could be that developer!"
        }, 
        trace: {
            name: "Trace",
            image: "assets/img/trace_logo.png",
            position: "Intern - Junior Developer!",
            tagLine: "I saw that you were seeking a Intern - Junior Developer, who will grow with Trace by helping to develop your public website and liaise with sales to implement marketing improvements. I believe I could be that developer!"
        },
        survey160: {
            name: "Survey160",
            image: "assets/img/survey160_logo.jpg",
            position: "Junior Software Engineer!",
            tagLine: "I saw that you were seeking a Software Engineer to be a cornerstone member of your small but growing team. I believe I could be that developer!"
        },
        grantstreetgroup: {
            name: "GSG",
            image: "assets/img/grant_street_group_logo.png",
            position: "Software Developer Entry Level!",
            tagLine: "I saw that you were seeking a developer that has recently begun their software development career and is eager to gain more experience. I believe I could be that developer!"
        }, 
        chainlinklabs: {
            name: "Chainlink Labs",
            image: "assets/img/chainlink_labs_logo.jpg",
            position: "Junior Software Engineer!",
            tagLine: "I saw that you were seeking a developer that will collaborate with the companys experienced technical team of senior engineers, distributed systems computing experts and security experts, building a world-changing decentralized infrastructure. I believe I could be that developer!"
        },
        pagerduty: {
            name: "PagerDuty",
            image: "assets/img/pagerduty_logo.png",
            position: "Software Developer Intern !",
            tagLine: "I saw that you were seeking a developer for your Career Accelerator Program to get the opportunity to learn and build meaningful skills at PagerDuty. I believe I could be that developer!"
        },
        storj: {
            name: "Storj Labs",
            image: "assets/img/storj-labs-logo.jpg",
            position: "Software Engineer Intern!",
            tagLine: "I saw that you were seeking a developer for your 2021 Internship Program. I believe I could be that developer!"
        },
        simplot: {
            name: "Simplot",
            image: "assets/img/simplot.jpg",
            position: "Delivery Engineer Intern!",
            tagLine: "I saw that you were seeking someone that has a passion for technology and wants to gain real experience working on a team that develops technical solutions using cloud-based technologies. I believe I could be that developer!"
        },
        dimagi: {
            name: "Dimagi",
            image: "assets/img/dimagi_logo.png",
            position: "Software Engineer Intern!",
            tagLine: "I saw that you were seeking someone that will have the opportunity to grow their skillset as well as make a real impact across the world. I believe I could be that developer!" 
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