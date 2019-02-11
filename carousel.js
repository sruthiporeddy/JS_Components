

    const slides_data = ['slide1.jpg','slide2.jpg','slide3.jpg','slide4.jpg','slide5.jpg',
    'slide1.jpg','slide2.jpg','slide3.jpg','slide4.jpg','slide5.jpg'];

    const track = document.querySelector('.carousel_track');
    const carouselNav = document.querySelector('.carousel_nav');
   
   
    for(let i=0 ; i<slides_data.length;i++){
        let carousel_list = document.createElement('li');
        carousel_list.className ='carousel_slide';
        let carousel_image = document.createElement('img');
        carousel_image.className = 'carousel_img';
        carousel_image.setAttribute('src','../images/'+slides_data[i]);
        carousel_list.appendChild(carousel_image);
        track.appendChild(carousel_list);
        track.firstElementChild.classList.add('current_slide');

        // Nav indiactors 

        carouselIndicator = document.createElement('button');
        carouselIndicator.className ='carousel_indicator';

        carouselNav.appendChild(carouselIndicator);
        carouselNav.firstElementChild.classList.add('current_slide');  

    }  


    const slides = Array.from(track.children);
    const previousButton = document.querySelector('.carousel_button_left');
    const nextButton = document.querySelector('.carousel_button_right');
    const indicators = Array.from(carouselNav.children);
    const slideWidth = slides[0].getBoundingClientRect().width;
    
    const setSlideWidth = function(slide,index){
        slide.style.left = slideWidth * index + 'px';
    }

    const slideMove = function(track,currentSlide,targetSlide){
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current_slide');
        targetSlide.classList.add('current_slide');
       
    }

    const navButtonSlide = function(currentIndicator,targetIndicator){
        currentIndicator.classList.remove('current_slide');
        targetIndicator.classList.add('current_slide');
    }

    const hideshowArrows = function(slides,previousButton,nextButton,targetIndicator){
        if(targetIndicator === 0 ){
            previousButton.classList.add('is_hidden');
            nextButton.classList.remove('is_hidden');
        } else if(targetIndicator === slides.length-1){
            previousButton.classList.remove('is_hidden');
            nextButton.classList.add('is_hidden');
        }
        else {
            previousButton.classList.remove('is_hidden');
            nextButton.classList.remove('is_hidden');
        }
    }

    //setting slides width inline

    slides.forEach(setSlideWidth);

    // Move slides on right arrow click
    nextButton.addEventListener('click',function(e) {
       const currentSlide = document.querySelector('.current_slide');
       const nextSlide = currentSlide.nextElementSibling;
       const currentIndicator = carouselNav.querySelector('.current_slide');
       const nextIndicator = currentIndicator.nextElementSibling; 
       const nextIndex = slides.findIndex(slide => slide === nextSlide);

       slideMove(track,currentSlide,nextSlide);
       navButtonSlide(currentIndicator,nextIndicator);
       hideshowArrows(slides,previousButton,nextButton,nextIndex);
    });
    
     // Move slides on left arrow click

     previousButton.addEventListener('click',function(e){
        const currentSlide = document.querySelector('.current_slide');
        const prevSlide = currentSlide.previousElementSibling;
        const currentIndicator = carouselNav.querySelector('.current_slide');
        const prevIndicator = currentIndicator.previousElementSibling; 
        const prevIndex = slides.findIndex(slide => slide === prevSlide);
      
        slideMove(track,currentSlide,prevSlide);
        navButtonSlide(currentIndicator,prevIndicator);
        hideshowArrows(slides,previousButton,nextButton,prevIndex);
     });


     // Move slides based on navigation buttons 
 
     carouselNav.addEventListener('click', function(e){
         const targetnavButton = e.target.closest('button');
         if(!targetnavButton) return false;

         const currentSlide = track.querySelector('.current_slide');
         const currentIndicator = carouselNav.querySelector('.current_slide');
         const targetIndicator = indicators.findIndex(indicator => indicator === targetnavButton);
         const targetSlide = slides[targetIndicator];

         slideMove(track,currentSlide,targetSlide) ;
         navButtonSlide(currentIndicator,targetnavButton);
         hideshowArrows(slides,previousButton,nextButton,targetIndicator);
     });





