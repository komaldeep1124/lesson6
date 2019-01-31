/* custom javascript goes herr*/
//iife-imm invoked func expr
(function(){

    function Start()
    {
          console.log(`%c app started..`, 
        "font-size:20px;color:blue;font-weight:bold");
    }
    window.addEventListener("load",Start);
})();