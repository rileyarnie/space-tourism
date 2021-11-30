export const destinations = [
  {
    id: 1,
    name: "Moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400",
    image: "/static/assets/destination/image-moon.webp",

    travelTime: "3 Days",
  },
  {
    id: 2,
    name: "Mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL.",
    image: "/static/assets/destination/image-mars.webp",

    travelTime: "9 Months",
  },
  {
    id: 3,
    name: "Europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL",
    image: "/static/assets/destination/image-europa.webp",

    travelTime: "3 Years",
  },
  {
    id: 4,
    name: "Titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL.",
    image: "/static/assets/destination/image-titan.webp",

    travelTime: "7 Years",
  },
];

export const getDestination = (name) => {
  //filter to return array of one element and pick the first element
  return destinations.filter(
    (destination) => destination.name.toLowerCase() === name
  )[0];
};

export const crew = [
  {
    id: 1,
    name: "Douglas Hurley",
    role: "Commander",
    profile:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: "/static/assets/crew/image-douglas-hurley.webp",
  },
  {
    id: 2,
    name: "Mark Shuttleworth",
    role: "Mission Specialist ",
    profile:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: "/static/assets/crew/image-mark-shuttleworth.webp",
  },
  {
    id: 3,
    name: "Victor Glover",
    role: "Pilot",
    profile:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    image: "/static/assets/crew/image-victor-glover.webp",
  },
  {
    id: 4,
    name: "Anousheh Ansari",
    role: "Commander",
    profile:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: "/static/assets/crew/image-anousheh-ansari.webp",
  },
];
