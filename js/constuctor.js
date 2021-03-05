window.onload = function() {
    // alert("the URL of this page is: " + window.location.pathname);
    if (window.location.pathname.includes("liingo")){
        document.getElementById("hello").style.display = "flex";
    }
  };