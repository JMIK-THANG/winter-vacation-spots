const initialCards = [
  {
    name: "Whiteface Mountain",
    link: "https://www.travelandleisure.com/thmb/q0mkYtl8P3mLFD3UrjXtwMf_S0E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/header-lookout-lake-placid-LAKEPLACID1221-cc49aacd832545fdbeb9a349732a2fa5.jpg",
    description:
      "Whiteface has the greatest vertical east of the Rockies. More vertical equals longer runs, less time on lifts, no crowds, and endless fun. Whiteface is big, with a diversity of terrain for every level, offering a significant degree of steeps, with access to the slides off the Summit Quad.",
  },
  {
    name: "Gore Mountain",
    link: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/328014507.jpg?k=5ec6b77a7344d3080167b8399cf6bf36e259596b6efd78b15e3ddc2d36c06b07&o=&hp=1",
    description:
      "Gore offers scenic skyrides and fun adventure activities during the summer and fall! Our cross-country trail network features snowmaking, grooming, and lights- snowshoers welcome on sides of trails too. Join us day or night at the historic North Creek Ski Bowl!",
  },
  {
    name: "Hunter Mountain",
    link: "https://nyskiblog.com/wp-content/uploads/2018/02/hunter-mountain.jpg",
    description:
      "with a summit that climbs to 3,200 ft. Hunter Mountain maintains renowned terrain across three separate mountains, with high-efficiency, state-of-the-art snowmaking that covers 100 percent of its trails, hence its 'snowmaking capital of the world' reputation.",
  },
  {
    name: "Belleayre Mountain",
    link: "https://snowbrains.com/wp-content/uploads/2023/01/Belleayre-Mountain.jpeg",
    description:
      "Belleayre is a family-friendly mountain, located in the heart of the Catskill Mountains, where you can find something for the entire family , long cruising trails, bumps, glades, parks, steeps, and a whole bunch of fun.",
  },
  {
    name: "Windham Mountain",
    link: "https://www.greatnortherncatskills.com/sites/default/files/styles/720x450/public/2018-10/Windham%20Mountain%20Ski%202.JPG?itok=0Kt0jCLW",
    description:
      "Located in New York's Northern Catskills, approximately 150 miles north of New York City and 50 miles south of Albany, Windham Mountain resort is known as a family-friendly resort offering an authentic ski experience and spectacular views in the Northeast region.",
  },
  {
    name: "Greek Peak",
    link: "https://assets.simpleviewinc.com/simpleview/image/upload/crm/newyorkstate/111102_HLL_012_v4-w-moon_5C582500-14BC-4E49-983675BF6F6A057E_8237bcfc-a07e-4055-97ba572715904018.jpg",
    description:
      "Greek Peak Mountain Resort was founded in 1958 and has remained at the leading edge of the ski industry with forty-four ski trails and eleven glades, six chair lifts, two surface lifts, a tubing conveyor lift, a beginners' slope, and new and improved terrain parks.",
  },
  {
    name: "Peek'n Peak Resort",
    link: "https://media-api.xogrp.com/images/ae4ff56a-f8ac-4bf6-8cf9-0e2df0e16de8~sc_675.375?quality=90",
    description:
      "Peek'n Peak Resort is a versatile destination located in southwestern New York, offering activities year-round",
  },
  {
    name: "Bear Town Ski Area",
    link: "https://res.cloudinary.com/simpleview/image/upload/v1545342328/clients/newyorkstate/27703271579_1c70af2fa0_o_03c59090-aeca-452a-8594-1d1bb7039c13.jpg",
    description:
      "Located in Western New York, Holimont is the largest private ski resort in the US. With 700' of wall-to-wall snowmaking and state-of-the-art grooming, you're guaranteed to always have an excellent day on the slopes",
  },
  {
    name: "Holiday Mountain",
    link: "https://images.unsplash.com/photo-1606928374026-e1c367b17fb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGVmYWNlJTIwbW91bnRhaW58ZW58MHx8MHx8fDA%3D",
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
