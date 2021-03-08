export default function goTop() {
  let topo = document.getElementById("seta-topo");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
<<<<<<< HEAD
      topo.style.opacity = "1";
    } else {
      topo.style.opacity = "0";
=======
      topo.style.display = "block";
    } else {
      topo.style.display = "none";
>>>>>>> refs/remotes/origin/master
    }
  });
}
