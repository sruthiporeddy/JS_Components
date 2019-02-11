window.onload = function(){
    var tabsArr = ['Text', 'Talk', 'Data','SMS'];
    var tabContentArr = ['slide1.jpg','slide2.jpg','slide3.jpg','slide4.jpg','slide5.jpg'];

    // Display of Tab links

    let tabs = document.querySelector('.tab_links');
    for(let i=0 ; i<tabsArr.length;i++){
        let tabName = document.createElement('li');
        let tabLink = document.createElement('a');
        tabLink.setAttribute('href','#tab'+i);
        tabLink.textContent = tabsArr[i];
        tabName.appendChild(tabLink);

        tabName.classList.add('tab'+i);
        tabs.appendChild(tabName);
    }
    
    tabs.firstElementChild.classList.add('active');

    //Display of tab content

    let tabContainer = document.querySelector('.tab_content');
    for(let i=0 ; i<tabsArr.length;i++){
        let tabContent =  document.createElement('div');
        tabContent.classList.add('tab_data');
        tabContent.setAttribute('id','tab'+i);
        let tabImage = document.createElement('img');
        tabImage.setAttribute('src','../images/'+tabContentArr[i]);
       
        tabContent.appendChild(tabImage);
        tabContainer.appendChild(tabContent);

    }
    tabContainer.firstElementChild.classList.add('visible');
    
  

    $('.tab_links li a').on('click', function(e){
      var currentAttrValue = $(this).attr('href');
      //console.log(currentAttrValue);
        //  console.log($('.tab_data'+currentAttrValue));
      $('.tab_data'+currentAttrValue).show().siblings().hide();
      $(this).parent('li').addClass('active').siblings().removeClass('active');
    });
}




