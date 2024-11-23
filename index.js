const mainItem = document.querySelector('.sideMenu');
const items = document.querySelectorAll('.sideMenu .menuItem');
const allLinks = document.querySelectorAll('.link');
const linkicons = document.querySelectorAll('.link_icon');

const humbarger = document.getElementById('humbarger');
const sideMenu = document.querySelector('aside');

/*=====================================================
*===================  Large Screen   ==================
*======================================================*/
if(window.innerWidth > 768){
    humbarger.addEventListener('click', function(){
        items.forEach(function(value){
            value.classList.remove('show');
        })
        sideMenu.classList.toggle('smallWidth');
    })

    function sideMenuToggle(){
        items.forEach(function(item, index){
            
            // dropdown show and hide link
            item.addEventListener('click', function(){
                sideMenu.classList.remove('smallWidth');
            

                for(var i = 0; i < items.length; i++){
                    if(index != i){
                        items[i].classList.remove('show');
                        items[i].classList.remove('active');
                    }
                }

                if(!sideMenu.classList.contains('smallWidth') && item.classList.contains('dropMenu')){
                    item.classList.toggle('show');
                }
                item.classList.add('active');
            })
        })
    }
}

/*=====================================================
*===================  Small screen   ==================
*======================================================*/
if(window.innerWidth < 768){
    humbarger.addEventListener('click', function(){
        items.forEach(function(value){
            value.classList.remove('show');
        })
        sideMenu.classList.toggle('smallWidth');
    })


    function sideMenuToggle(){
        items.forEach(function(item, index){
            
            // dropdown show and hide link
            item.addEventListener('click', function(){
                for(var i = 0; i < items.length; i++){
                    if(index != i){
                        items[i].classList.remove('show');
                        items[i].classList.remove('active');
                    }
                }

                item.classList.add('active');
                item.classList.toggle('show');
            })

        })
    }
}

// link active script
function linkActive(){
    let links = document.querySelectorAll('.dropItem');
    links.forEach(function(link, index){
        for(let i = 0; i < linkicons.length; i++){
            if (link.classList.contains('active') && index == i) {
                linkicons[i].innerHTML = '&#10026;';
            }
        }
    })
}


sideMenuToggle();
linkActive();




