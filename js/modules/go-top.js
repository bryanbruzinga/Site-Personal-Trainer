export default function goTop() {
  let topo = document.getElementById("seta-topo");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      topo.style.display = "block";
    } else {
      topo.style.display = "none";
    }
  });
}
