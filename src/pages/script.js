const initialCards = [
  {
    name: "Whiteface Mountain",
    link: "https://images.pexels.com/photos/4061996/pexels-photo-4061996.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Whiteface has the greatest vertical east of the Rockies. More vertical equals longer runs, less time on lifts, no crowds, and endless fun. Whiteface is big, with a diversity of terrain for every level, offering a significant degree of steeps, with access to the slides off the Summit Quad.",
  },
  {
    name: "Gore Mountain",
    link: "https://images.pexels.com/photos/3714137/pexels-photo-3714137.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Gore offers scenic skyrides and fun adventure activities during the summer and fall! Our cross-country trail network features snowmaking, grooming, and lights- snowshoers welcome on sides of trails too. Join us day or night at the historic North Creek Ski Bowl!",
  },
  {
    name: "Hunter Mountain",
    link: "https://images.pexels.com/photos/8627419/pexels-photo-8627419.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "with a summit that climbs to 3,200 ft. Hunter Mountain maintains renowned terrain across three separate mountains, with high-efficiency, state-of-the-art snowmaking that covers 100 percent of its trails, hence its 'snowmaking capital of the world' reputation.",
  },
  {
    name: "Belleayre Mountain",
    link: "https://images.pexels.com/photos/6699199/pexels-photo-6699199.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Belleayre is a family-friendly mountain, located in the heart of the Catskill Mountains, where you can find something for the entire family , long cruising trails, bumps, glades, parks, steeps, and a whole bunch of fun.",
  },
  {
    name: "Windham Mountain",
    link: "https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Located in New York's Northern Catskills, approximately 150 miles north of New York City and 50 miles south of Albany, Windham Mountain resort is known as a family-friendly resort offering an authentic ski experience and spectacular views in the Northeast region.",
  },
  {
    name: "Greek Peak",
    link: "https://images.pexels.com/photos/11485837/pexels-photo-11485837.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Greek Peak Mountain Resort was founded in 1958 and has remained at the leading edge of the ski industry with forty-four ski trails and eleven glades, six chair lifts, two surface lifts, a tubing conveyor lift, a beginners' slope, and new and improved terrain parks.",
  },
  {
    name: "Peek'n Peak Resort",
    link: "https://images.pexels.com/photos/848682/pexels-photo-848682.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Peek'n Peak Resort is a versatile destination located in southwestern New York, offering activities year-round",
  },
  {
    name: "Holiday Valley",
    link: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Located in Western New York, Holiday Valley ski resort is a year-round outdoor playground, providing varied terrain for skiers and boarders as well as golfing, an adventure park, ziplines, spa services and more. The resort is designed to be appropriate for visitors of all ages and is a go-to for families.",
  },
  {
    name: "Beartown Ski Area",
    link: "https://images.pexels.com/photos/3193846/pexels-photo-3193846.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "The ski resort Beartown is located in The Adirondacks (USA, New York). For skiing and snowboarding, there are 0.8 km of slopes available. 2 lifts transport the guests. The winter sports area is situated between the elevations of 263 and 304 m.",
  },
];

const cardContainer = document.querySelector(".destinations__cards");
const popupPreviewImage = document.querySelector(".popup_preview-image");
const previewImage = document.querySelector(".popup__image");
const previewDescription = document.querySelector(".popup__caption");
const closeButton = document.querySelector(".popup__close");
const horizontalCardTemplate = document.querySelector(".horizontal-card");

initialCards.forEach((cardObj) => {
  const horizontalCardElement = horizontalCard(cardObj);
  renderCard(horizontalCardElement);
});
function openModal(modal) {
  modal.classList.add("popup_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

function horizontalCard(cardData) {
  const horizontalElement = horizontalCardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardTitle = horizontalElement.querySelector(".card__title");
  const cardImage = horizontalElement.querySelector(".card__image");
  const cardDescription = horizontalElement.querySelector(".card__description");
  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardDescription.textContent = cardData.description;
  cardImage.addEventListener("click", () => {
    handlePreviewImage(cardData);
  });
  return horizontalElement;
}

function handlePreviewImage(data) {
  previewImage.src = data.link;
  previewImage.alt = data.name;
  openModal(popupPreviewImage);
}

closeButton.addEventListener("click", () => {
  closeModal(popupPreviewImage);
});
function renderCard(cardElement) {
  cardContainer.prepend(cardElement);
}
