// modal
var trigger;
var modal;
var closeButton;
var shipHelpBtn;
// window.onload = function () {

// }

function initModal() {
  modal = document.querySelector(".omodal");
  closeButton = document.querySelector(".close-button");
  trigger = document.querySelector(".trigger");
  shipHelpBtn = document.querySelector("#ship-help");

}
function initListeners() {
  // trigger.addEventListener("click", toggleModal);
  closeButton.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);
  shipHelpBtn.addEventListener("click", toggleModal);
}
function toggleModal() {
  modal.classList.toggle("pop-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

var labels = document.getElementsByTagName('LABEL');

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
        var infotext = 'See our useful shipping your stuff guide <button id="ship-pop"  class="trigger" >here</button>'

        var shiphelpEl = document.getElementById("ship-help");

        if (!shiphelpEl) {
          for (var i = 0; i < labels.length; i++) {
            if (labels[i].textContent == fieldtitle) {
              labels[i].insertAdjacentHTML('afterend', '<div id="ship-help" class="info-text-container"><div class="info-text-icon"><i class="ss-info"></i></div><div class="info-text-content"><p>' + infotext + '</p></div></div>');
            }
          }
        }
        // init modal button
        initModal()
        initListeners()
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

    // if (labels) {
    for (var i = 0; i < labels.length; i++) {
      console.log('label-loop');
      if (labels[i].textContent == LocFieldtitle) {
        labels[i].insertAdjacentHTML('afterend', '<div class="info-text-container"><div class="info-text-icon"><i class="ss-info"></i></div><div class="info-text-content"><p>' + infotextLoc + '</p></div></div>');
      }
    }
    // }
  }

});





//close button for menu

//<span class="close-button">&#10005;</span>

document.addEventListener('DOMContentLoaded', function (event) {

  // chnage logo url
  var logo = document.querySelector('.Logo');
  logo.setAttribute('href', 'https://tackyard.co.uk')

// get profile link
var profileLink = document.querySelector('.Avatar__link__RlpRO');
var profileLinkBtn = document.querySelector('#profileLinkBtn');
profileLinkBtn.href = profileLink.href;

// get inbox link
var inboxLink = document.querySelector('.ProfileDropdown__profileAction__1H9nm');
var inboxBtn = document.querySelector('#inboxBtn');
inboxBtn.href = inboxLink.href;

// search icon button trigger

var searchIconBtn = document.querySelector('#searchIconBtn');
var searchIconBar = document.querySelector('.SearchBar__mobileToggle__3pjye');
searchIconBtn.addEventListener('click', function(e) {
  if (searchIconBar.classList.contains('d-flex')) {
    searchIconBar.classList.remove('d-flex');
} else {
  searchIconBar.classList.add('d-flex');
}
});

  // formfilter style classes
  const thisForm = document.getElementById('homepage-filters');

  if (thisForm) {

    //inject appl and reset filter button at top
    const filterContainer = document.querySelector("#filters");
    const filterBtn = document.createElement("button");

    filterBtn.setAttribute('type', 'submit');
    filterBtn.setAttribute('id', 'top-filter');
    filterBtn.textContent = 'Apply filter';

    const resetBtn = document.createElement("button");
    resetBtn.setAttribute('type', 'reset');
    resetBtn.setAttribute('id', 'reset-filter');
    resetBtn.setAttribute('class', 'reset-filter-form');
    resetBtn.textContent = 'Reset';

    filterContainer.prepend(resetBtn);
    filterContainer.prepend(filterBtn);

    // Click handler for entire DIV container
    thisForm.addEventListener('click', function (e) {
      //
      if (e.target.classList.contains('reset-filter-form')) {
        // resetBtn.addEventListener('click', function (e) {
        //   console.log('reset click');
        //   //thisForm.reset();
        //   resetFormy();
        // })
        // thisForm.reset();
        // document.getElementById('homepage-filters').reset();
        // document.querySelector('input[type=checkbox]').checked = false;
        // var inputs = document.querySelectorAll("input[type='checkbox']");
        // for (var i = 0; i < inputs.length; i++) {
        //   if (inputs[i].checked = true) inputs[i].checked = false;
        // }
        // console.log('FIN reset click on form listener');

        window.location = 'https://app.tackyard.co.uk'

      }
    });
  }
});