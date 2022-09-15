document.addEventListener('DOMContentLoaded', function (event) {

  // modal
  var modal = document.querySelector(".modal");
  var trigger = document.querySelector(".trigger");
  var closeButton = document.querySelector(".close-button");

  function toggleModal() {
    modal.classList.toggle("show-modal");
  }

  function windowOnClick(event) {
    if (event.target === modal) {
      toggleModal();
    }
  }

  trigger.addEventListener("click", toggleModal);
  closeButton.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);

  var labels = document.getElementsByTagName('LABEL');

  const container = document.querySelector('#sidewinder-wrapper');
  // shipping info text
  // Click handler for entire DIV container
  container.addEventListener('click', function (e) {
    // But only alert for elements that have an alert-button class
    if (e.target.classList.contains('delivery-method-checkbox')) {

      const checked = document.querySelector('#shipping-checkbox:checked') !== null;
      console.log(checked); // false
      if (checked) {
        // shipping custom help
        var fieldtitle = 'Shipping';
        var infotext = 'See our useful shipping your stuff guide <a id="ship-pop"  class="trigger" href="#jsModal">here</a>'

        for (var i = 0; i < labels.length; i++) {
          if (labels[i].textContent == fieldtitle) {
            labels[i].insertAdjacentHTML('afterend', '<div id="ship-help" class="info-text-container"><div class="info-text-icon"><i class="ss-info"></i></div><div class="info-text-content"><p>' + infotext + '</p></div></div>');
          }
        }
        openModal();
        //  closeModal();
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

    //do location off this handler
    let LocFieldtitle = 'Location';
    let infotextLoc = 'Add your postcode or town to show buyers where you are.';

    if (labels) {
      for (var i = 0; i < labels.length; i++) {
        console.log('label-loop');
        if (labels[i].textContent == LocFieldtitle) {
          labels[i].insertAdjacentHTML('afterend', '<div class="info-text-container"><div class="info-text-icon"><i class="ss-info"></i></div><div class="info-text-content"><p>' + infotextLoc + '</p></div></div>');
        }
      }
    }
  }
});

