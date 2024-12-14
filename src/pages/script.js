const initialCards = [
  {
    name: "Whiteface Mountain",
    link: "https://images.unsplash.com/photo-1548873902-8b69fb85030a?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Whiteface has the greatest vertical east of the Rockies. More vertical equals longer runs, less time on lifts, no crowds, and endless fun. Whiteface is big, with a diversity of terrain for every level, offering a significant degree of steeps, with access to the slides off the Summit Quad.",
  },
  {
    name: "Gore Mountain",
    link: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcStb6rcwS7Y4-dYUkhxAZGaxtyiNtA4-9OL_fF539g63iExesUj0hNWYeYLXmarqFjXXMo7qoCgicFPjYdcrz7HGfokt9pAs0joIdNekb0",
    description:
      "Gore offers scenic skyrides and fun adventure activities during the summer and fall! Our cross-country trail network features snowmaking, grooming, and lights- snowshoers welcome on sides of trails too. Join us day or night at the historic North Creek Ski Bowl!",
  },
  {
    name: "Hunter Mountain",
    link: "https://comfort-ski.com/upload/hunter-mountain-1.jpg",
    description:
      "with a summit that climbs to 3,200 ft. Hunter Mountain maintains renowned terrain across three separate mountains, with high-efficiency, state-of-the-art snowmaking that covers 100 percent of its trails, hence its 'snowmaking capital of the world' reputation.",
  },
  {
    name: "Belleayre Mountain",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFqmTCL1ihLAihDVp2J1OtK9ujCHwhHUsbbA&s",
    description:
      "Belleayre is a family-friendly mountain, located in the heart of the Catskill Mountains, where you can find something for the entire family , long cruising trails, bumps, glades, parks, steeps, and a whole bunch of fun.",
  },
  {
    name: "Windham Mountain",
    link: "https://images.unsplash.com/photo-1486684338211-1a7ced564b0d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Located in New York's Northern Catskills, approximately 150 miles north of New York City and 50 miles south of Albany, Windham Mountain resort is known as a family-friendly resort offering an authentic ski experience and spectacular views in the Northeast region.",
  },
  {
    name: "Greek Peak",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8YP0-OGd3ZPDEj33w_-zhOAJOUapQRmyswewI-Agms7a0Mt1wyttEeWvZb__eP2yXfU&usqp=CAU",
    description:
      "Greek Peak Mountain Resort was founded in 1958 and has remained at the leading edge of the ski industry with forty-four ski trails and eleven glades, six chair lifts, two surface lifts, a tubing conveyor lift, a beginners' slope, and new and improved terrain parks.",
  },
  {
    name: "Peek'n Peak Resort",
    link: "https://images.unsplash.com/photo-1606928374026-e1c367b17fb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGVmYWNlJTIwbW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    description:
      "Peek'n Peak Resort is a versatile destination located in southwestern New York, offering activities year-round",
  },
  {
    name: "HoliMont",
    link: "https://images.unsplash.com/photo-1610479201125-a5c7f17370a8?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Located in Western New York, Holimont is the largest private ski resort in the US. With 700' of wall-to-wall snowmaking and state-of-the-art grooming, you're guaranteed to always have an excellent day on the slopes",
  },
  {
    name: "Holiday Mountain",
    link: "https://images.unsplash.com/photo-1705205148375-a845e74dbe4b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Holiday Mountain Ski and Fun Park is a family-friendly destination in the Southern Catskills of New York that offers skiing, snowboarding, tubing, and a fun park",
  },
];

const cardContainer = document.querySelector(".destinations__cards");
const cardTemplate = document.querySelector("#card__template");

initialCards.forEach((cardObj) => {
  const cardElement = createCard(cardObj);
  renderCard(cardElement);
});
function createCard(cardData) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardDescription = cardElement.querySelector(".card__description");
  const cardImage = cardElement.querySelector(".card__image");
  cardTitle.textContent = cardData.name;
  cardDescription.textContent = cardData.description;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  return cardElement;
}
function renderCard(cardElement) {
  cardContainer.prepend(cardElement);
}
