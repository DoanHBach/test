function searchHotels() {
  var checkinDate = document.getElementById("checkinDate").value;
  var checkoutDate = document.getElementById("checkoutDate").value;
  var adults = document.getElementById("adults").value;
  var children = document.getElementById("children").value;

  // Perform search operation based on the selected criteria
  console.log("Check-in Date:", checkinDate);
  console.log("Check-out Date:", checkoutDate);
  console.log("Adults:", adults);
  console.log("Children:", children);
}

const image = document.querySelector(".scroll-slide");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  image.style.transform = `translateY(${scrollPosition}px)`;
});
