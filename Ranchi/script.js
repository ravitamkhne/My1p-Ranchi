// code for using cursor 

const curserDot = document.querySelector("[data-cursor-dot]");
    const cursorOuline = document.querySelector("[data-cursor-outline]");

    window.addEventListener("mousemove", function (e){
        const posX = e.clientX;
        const posY = e.clientY;
        
        curserDot.style.left = `${posX}PX`;
        curserDot.style.top = `${posY}PX`;

        // cursorOuline.style.left = `${posX}px`;
        // cursorOuline.style.top = `${posY}px`;

        cursorOuline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, {duration: 500, fill: "forwards" });
    })






    // code for project images 

    const list = document.querySelectorAll('.pactive');
    const itemBox = document.querySelectorAll('.project-items');

    for(let i = 0; i<list.length; i++){
        list[i].addEventListener('click', function(){
            for(let j=0; j<list.length; j++){
                list[j].classList.remove('active');
            }
            this.classList.add('active');

            let dataFilter = this.getAttribute('data-filter');
            
            for(let k = 0; k<itemBox.length; k++){
                itemBox[k].classList.remove('active');
                itemBox[k].classList.add('hide');

                if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                    itemBox[k].classList.remove('hide');
                    itemBox[k].classList.add('active');
                }

            }


        })
    }