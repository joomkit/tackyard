
// modal
/* This script supports IE9+ */

  /* Opening modal window function */
  function openModal() {
      /* Get trigger element */
      var modalTrigger = document.getElementsByClassName('jsModalTrigger');

      /* Set onclick event handler for all trigger elements */
      for(var i = 0; i < modalTrigger.length; i++) {
          modalTrigger[i].onclick = function() {
            var target = this.getAttribute('href').substr(1);
            var modalWindow = document.getElementById(target);

            modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open'; 
          }
      }   
  }

  function closeModal(){
    /* Get close button */
    var closeButton = document.getElementsByClassName('jsModalClose');
    var closeOverlay = document.getElementsByClassName('jsOverlay');

    /* Set onclick event handler for close buttons */
      for(var i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function() {
          var modalWindow = this.parentNode.parentNode;

          modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }   

    /* Set onclick event handler for modal overlay */
      for(var i = 0; i < closeOverlay.length; i++) {
        closeOverlay[i].onclick = function() {
          var modalWindow = this.parentNode;

          modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }  

  }

  /* Handling domready event IE9+ */
  function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  /* Triggering modal window function after dom ready */
  ready(openModal);
  ready(closeModal);


// shipping info text
document.addEventListener('DOMContentLoaded', function (event) {

    const container = document.querySelector('#sidewinder-wrapper');

    // Click handler for entire DIV container
    container.addEventListener('click', function (e) {
        // But only alert for elements that have an alert-button class
        if (e.target.classList.contains('delivery-method-checkbox')) {

            const checked = document.querySelector('#shipping-checkbox:checked') !== null;
            console.log(checked); // false
            if (checked) {
                // shipping custom help
                var fieldtitle = 'Shipping';
                var infotext = 'See our useful shipping your stuff guide <a id="ship-pop"  class="jsModalTrigger" href="jsModal">here</a>'
                var labels = document.getElementsByTagName('LABEL');
                for (var i = 0; i < labels.length; i++) {
                    if (labels[i].textContent == fieldtitle) {
                        labels[i].insertAdjacentHTML('afterend', '<div id="ship-help" class="info-text-container"><div class="info-text-icon"><i class="ss-info"></i></div><div class="info-text-content"><p>' + infotext + '</p></div></div>');
                    }
                }
                openModal();
                closeModal();
            } else {
                let node = document.getElementById("ship-help");
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
            }
        }
    });
});


// cover image
document.addEventListener('DOMContentLoaded', function (event) {
    const JKparams = new URLSearchParams(window.location.search)

    const JKcategory = JKparams.get("category")
    const JKlistings = JKparams.get("listings")
    console.log(JKcategory)
    if (!JKcategory) {
        console.log("no filter");
        let homeDesktopFilter = document.getElementById('desktop-filters');
        if (homeDesktopFilter) homeDesktopFilter.setAttribute('style', 'display:none');
    }
    //detect listings url and hide cover image
    const JKurl = window.location.href;
    const find = 'listings';
    const found = JKurl.match(find);
    const landerBox = document.getElementsByClassName("marketplace-lander")[0];

    if (found !== null && found[0] === find) {
        console.log('You are in the listings page');
        if (landerBox) landerBox.setAttribute('style', 'display:block');
    } else {
        if (landerBox) landerBox.setAttribute('style', 'display:none');
    }
});

//location
document.addEventListener('DOMContentLoaded', function (event) {

    let url = window.location.href;
    let find = 'new';
    let found = url.match(find);

    console.log(found);

    if (found !== null && found[0] === find) {
        console.log("update location text info");
        let fieldtitle = 'Location';
        let infotext = 'Add your postcode or town to show buyers where you are.';
        let alllabels = document.getElementsByTagName('LABEL');
        for (var i = 0; i < alllabels.length; i++) {
            console.log('label-loop');
            if (alllabels[i].textContent == fieldtitle) {
                alllabels[i].insertAdjacentHTML('afterend', '<div class="info-text-container"><div class="info-text-icon"><i class="ss-info"></i></div><div class="info-text-content"><p>' + infotext + '</p></div></div>');
            }
        }
    }
});

