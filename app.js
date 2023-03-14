function getRating(event) {
  const btnRating = event.target.value;
  const thankText = document.getElementById("rating-back");

  console.log(btnRating);
  thankText.getElementsByTagName('h1')[0].innerHTML = `You selected ${btnRating} out of 5`;
  thankText.getElementsByTagName('p')[0].innerHTML = `We appreciate you taking the time to give us a rating. If you ever need more support, don't hesitate to get in touch!`;
}



function thankYou() {
  var ratingCard = document.getElementById("rating-front");
  var thankCard = document.getElementById("rating-back");

  ratingCard.style.transform = "rotateY(180deg)";
  thankCard.style.transform = "none";
  console.log("Flipped");
}

