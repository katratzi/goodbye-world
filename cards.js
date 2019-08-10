// if I want to add js link to top of html can use this to start things up right
// window.onload = function () {
//     // your javascript code goes here...
// }

const polaroids = [...document.querySelectorAll(".polaroid")];

function toggleHighlightOn(e) {
  // e.stopPropagation();
  // console.log(this);
  this.classList.add("highlight");
}

function toggleHighlightOff(e) {
  // e.stopPropagation();
  this.classList.remove("highlight");
}

function toggleBadge(e) {
  //  get the data group
  const myGroup = this.dataset.group;
  // console.log(myGroup);
  // toggle all of my group off
  toggleGroupOff(myGroup);

  // now just turn me on
  const badge = this.querySelector(".badge");
  badge.classList.add("highlight");

  //console.log("dataset" + badge.dataset.rating);
  const total = badge.innerHTML * 4;
  // what's the total? :)
  console.log("dataset inner." + badge.innerHTML + " " + total);
}

// toggle all highglights off
function toggleAllOthersOff() {
  polaroids.forEach(polaroid => {
    polaroid.classList.remove("highlight");
    const badge = polaroid.querySelector(".badge");
    polaroid.classList.remove("highlight");
  });
}

// toggle only badges in my group off
function toggleGroupOff(myGroup) {
  polaroids.forEach(polaroid => {
    // if in my group remove the highlight class
    if (polaroid.dataset.group == myGroup) {
      const badge = polaroid.querySelector(".badge");
      badge.classList.remove("highlight");
    }
  });
}

// add our listeners for highlighting
polaroids.forEach(polaroid => {
  // nice hover effect then the click
  polaroid.addEventListener("mouseenter", toggleHighlightOn, {});
  polaroid.addEventListener("mouseleave", toggleHighlightOff, {});
  polaroid.addEventListener("mousedown", toggleBadge, {});
});
