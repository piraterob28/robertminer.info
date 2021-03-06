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
        },
        visitpay: {
            name: "VisitPay",
            image: "assets/img/VisitPay_logo.jpg",
            position: "Junior Developer / Software Engineer I!",
            tagLine: "I saw that you were seeking someone that thrives on challenges, loves learning, is self-driven, diligent, and enjoys solving problems and wants to be part of a high-growth, high-innovation company that is revolutionizing the healthcare market. I believe I could be that developer!"  
        },
        juniper: {
            name: "Juniper",
            image: "assets/img/juniper-networks.png",
            position: "Software Engineer Intern!",
            tagLine: "I saw that you were seeking someone who is looking for the opportunity to apply their math and programming skills to solve real-life problems such as COVID Contact Tracing, while learning how to build massively scalable microservices using state-of-the-art cloud technologies such as Kafka, ElasticSearch and Kubernetes. I believe I could be that developer!" 
        }, 
        salesforce: {
            name: "Salesforce",
            image: "assets/img/salesforce.jpg",
            position: "Site Reliability Engineer!",
            tagLine: "I saw that you were seeking someone who is interested in complex distributed systems- how they work, how they can work better, how we even know if they’re working at all. I believe I could be that developer!"
        },
        fillycoder: {
            name: "Filly Coder",
            image: "assets/img/filly-coder.jpg",
            position: "Entry Level Web Developer!",
            tagLine: "I saw that you were seeking someone who is interested in your Entry Level Web Developer. I believe I could be that developer!"
        },
        rightpoint: {
            name: "Rightpoint",
            image: "assets/img/rightpoint.png",
            position: "Associate UI Developer!",
            tagLine: "I saw that you were seeking someone to start their careers working with and learning from top-notch, talented consults building solutions for our many clients, who would move past HTML/CSS and into application development using Angular or React within a year of joining. I believe I could be that developer!"
        },
        venafi: {
            name: "Venafi",
            image: "assets/img/venafi_logo.png",
            position: "Python Software Developer in Test!",
            tagLine: "I saw that you were seeking someone with a can do attitude and a thirst to just dig in and figure out the hard things. I believe I could be that developer!"
        },
        lovingly: {
            name: "Lovingly",
            image: "assets/img/Lovingly_logo_blue.svg",
            position: "Jr. Full Stack Software Engineer!",
            tagLine: "I saw that you were seeking someone who has a healthy work ethic, welcomes challenges, and enjoys being part of a company that works together as a team. They don’t give up when it seems like their facing a wall—they brainstorm, research, learn, and solve. I believe I could be that developer!"
        },
        infinicept: {
            name: "Infinicept",
            image: "assets/img/infinicept-logo-rgb.png",
            position: "Junior Software Engineer!",
            tagLine: "I saw that you were seeking someone won’t shy away from bringing their unique experiences and values to their role as a junior engineer. They are fearless and will dive headfirst into unfamiliar problems. I believe I could be that developer!"
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