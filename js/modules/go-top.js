export default function goTop() {
  let topo = document.getElementById("seta-topo");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      topo.style.opacity = "1";
    } else {
      topo.style.opacity = "0";
    }
  });
}
