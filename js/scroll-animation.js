function scrollAnimation (cls, animation, entries) {
    target = document.querySelectorAll('.'+cls);

  function handleIntersection(entries) {
    entries.map((entry) => {
      console.log(entry.isIntersecting);
      if (entry.isIntersecting) {
        entry.target.classList.add(animation)
      } else {
      }
    });
}

///////////////////////////////////////////
/*| Setting up new observer of the page |*/
///////////////////////////////////////////
const observer = new IntersectionObserver(handleIntersection);

/////////////////////////////////////
/*| Setting up observing elements |*/
/////////////////////////////////////
for (let i = 0; i < target.length; i++) {
  observer.observe(target[i]);
}
}