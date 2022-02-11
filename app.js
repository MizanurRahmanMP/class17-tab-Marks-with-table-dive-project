
// Get elements


// const mizan_tab = document.querySelectorAll('.mizan-tab .tab-menu ul a');
// const tab_pane_all = document.querySelectorAll('.mizan-tab .tab_pane');

// mizan_tab.forEach( item =>{

//     item.addEventListener('click', function(e){

//         e.preventDefault();

//        mizan_tab.forEach(item =>{

//            item.classList.remove('active');
//        })

//        item.classList.add('active');

//        const tab_pane = document.querySelector(this.getAttribute('href'));

//        tab_pane_all.forEach( item =>{

//         item.classList.remove('active');
//        });

//       tab_pane.classList.add('active');


//     });

   
// });

// Get Element start
const mizan_tab = document.querySelectorAll('.mizan-tab .tab-menu ul a');
const tab_pane_all = document.querySelectorAll('.mizan-tab .tab_pane');

mizan_tab.forEach(item =>{

    item.addEventListener('click', function(e){
        e.preventDefault();

        mizan_tab.forEach( item =>{

            item.classList.remove('active');
        });

        item.classList.add('active');

        

        const tab_pane = document.querySelector(this.getAttribute('href'));

        tab_pane_all.forEach(item =>{
            item.classList.remove('active');
        });
        tab_pane.classList.add('active');
    });


});



