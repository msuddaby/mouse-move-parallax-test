(function() {
    // Add event listener
    // document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");

    let _randX = 0;
    let _randY = 0;

    //let myInt = setInterval(parallax, 1);

    // Magic happens here
    function parallax() {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        // let _mouseX = e.clientX;
        // let _mouseY = e.clientY;
        _randX = _randX + 1;
        let _depth1 = `${50 - (_randX - _w) * 0.01}% ${50 - (_randY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_randX - _w) * 0.02}% ${50 - (_randY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_randX - _w) * 0.06}% ${50 - (_randY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        elem.style.backgroundPosition = x;
    }

    const image = document.querySelector("#forest-1 #img1");
    const image2 = document.querySelector('#forest-1 #img2');
    const container = document.querySelector(".container");





    // let myStuff = setInterval(doMove, 1);
    let movement = 0;
    
    let forestContainer = document.querySelector('#forest-1');

    let imgWidth = 1920;
    let initPos = 0;
    let currentPos1 = 0;
    let currentPos2 = 0 - imgWidth;
    
    forestContainer.style.transform = `translate3d(-1920px,0,0)`
    //image.style.transform = `translate3d(${initPos}px,0,0)`;
    //image2.style.transform = `translate3d(${initPos}px,0,0)`

    
    function doMove() {
        console.log(window.innerWidth + imgWidth)
        if (currentPos1 >= imgWidth) {
            movement = 0;
            image.style.order = '0';
        } 
        if (currentPos2 >= imgWidth) {
            currentPos2 = initPos2;
        }
        else {
            movement += 1;
        }

        currentPos1 = currentPos1 + 1;
        currentPos2 = currentPos2 + 1;
        image.style.transform = `translate3d(${currentPos1}px,0,0)`;
        image2.style.transform = `translate3d(${currentPos2}px,0,0)`;
    }

    function getContainerPos() {
        let containerPos = container.getBoundingClientRect().x;
        let viewWidth = window.innerWidth;
        console.log(viewWidth - containerPos);
        return viewWidth - containerPos;
    }

    // let movement = 0;
    // let img1 = document.querySelector('.scrolling-bg');
    // setInterval(doMove, 1);

    // console.log(img1.style.backgroundPosition);

    // function doMove() {
    //     if (movement == 1920) {
    //         movement = 0;
    //     }

    //     movement += 1;
    //     img1.style.backgroundPosition = `${movement}px`;
    // }

})();