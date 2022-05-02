
        const toggleBtn = document.querySelector("#toggle-theme");
        const toggleBtn1 = document.querySelector("#toggle-theme1");
        const toggleBtn2 = document.querySelector("#toggle-theme2");
        const toggleBtn3 = document.querySelector("#toggle-theme3");


        toggleBtn.addEventListener('click', (e) => {
            console.log("Switching theme");
            if (document.documentElement.hasAttribute('theme') ) {
                document.documentElement.removeAttribute('theme');
            }
        });
        toggleBtn1.addEventListener('click', (e) => {
            
                document.documentElement.setAttribute('theme', 'theme1');     
        });
        toggleBtn2.addEventListener('click', (e) => {

            document.documentElement.setAttribute('theme', 'theme2');
        });
        toggleBtn3.addEventListener('click', (e) => {

            document.documentElement.setAttribute('theme', 'theme3');
        });
        