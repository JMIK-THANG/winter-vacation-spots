const initialCards = [
  {
    name: "Whiteface Mountain",
    link: "https://image-tc.galaxy.tf/wijpeg-f3sp0ujcmj3zzmt97flvfmb86/whiteface-mountain-alpine-skiing_standard.jpg?crop=185%2C0%2C1631%2C1223",
    description:
      "Whiteface has the greatest vertical east of the Rockies. More vertical equals longer runs, less time on lifts, no crowds, and endless fun. Whiteface is big, with a diversity of terrain for every level, offering a significant degree of steeps, with access to the slides off the Summit Quad.",
  },
  {
    name: "Gore Mountain",
    link: "https://i0.wp.com/savingtimeinabottle.com/wp-content/uploads/2023/11/untitled-1-of-1-123-scaled.jpg?fit=2560%2C1707&ssl=1",
    description:
      "Gore offers scenic skyrides and fun adventure activities during the summer and fall! Our cross-country trail network features snowmaking, grooming, and lights- snowshoers welcome on sides of trails too. Join us day or night at the historic North Creek Ski Bowl!",
  },
  {
    name: "Hunter Mountain",
    link: "https://www.newyorkstatedestinations.com/catskills/hunter/images/hunter.jpg",
    description:
      "with a summit that climbs to 3,200 ft. Hunter Mountain maintains renowned terrain across three separate mountains, with high-efficiency, state-of-the-art snowmaking that covers 100 percent of its trails, hence its 'snowmaking capital of the world' reputation.",
  },
  {
    name: "Belleayre Mountain",
    link: "https://static01.nyt.com/images/2008/03/06/travel/escapes/belleayre_span.600.jpg?quality=75&auto=webp&disable=upscale",
    description:
      "Belleayre is a family-friendly mountain, located in the heart of the Catskill Mountains, where you can find something for the entire family , long cruising trails, bumps, glades, parks, steeps, and a whole bunch of fun.",
  },
  {
    name: "Windham Mountain",
    link: "https://static01.nyt.com/images/2023/12/08/nyregion/00ny-windham01/00ny-windham01-superJumbo.jpg",
    description:
      "Located in New York's Northern Catskills, approximately 150 miles north of New York City and 50 miles south of Albany, Windham Mountain resort is known as a family-friendly resort offering an authentic ski experience and spectacular views in the Northeast region.",
  },
  {
    name: "Greek Peak",
    link: "https://nyskiblog.com/wp-content/uploads/2016/06/greek-peak-ski-trail-map.jpg",
    description:
      "Greek Peak Mountain Resort was founded in 1958 and has remained at the leading edge of the ski industry with forty-four ski trails and eleven glades, six chair lifts, two surface lifts, a tubing conveyor lift, a beginners' slope, and new and improved terrain parks.",
  },
  {
    name: "Peek'n Peak Resort",
    link: "https://townsquare.media/site/10/files/2024/10/attachment-peak-n-peak.jpg?w=780&q=75",
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

function defaultCard(cardData) {
  const cardElement = defaultCardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");
  const cardDescription = cardElement.querySelector(".card__description");
  const cardImage = cardElement.querySelector(".card__image");
  const buttonDescription = cardElement.querySelector(
    ".card__description-button"
  );
  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  buttonDescription.addEventListener("click", () =>
    handlePreviewImage(cardData)
  );

  return cardElement;
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
