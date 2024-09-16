// random search strings for start
const searchStrings = [
  "Honey Singh",
  "Ed Sheeran",
  "Ariana Grande",
  "Taylor Swift",
  "ReactJS",
  "JavaScript",
  "Python",
  "Bollywood Hits",
  "Acciojob",
  "Shawn Mendes",
  "Indian Startup Ecosystem",
  "marvel",
  "tony stark doctor doom",
  "Machine Learning",
  "Code with Harry",
  "Coldplay",
  "JavaScript Tutorials",
  "DevOps",
  "Indian Programming Channels",
  "Doja Cat",
  "Web Development Trends",
  "AI",
  "Full Stack Development",
  "Virat Kohli",
  "Captain America",
  "Top Indian Tech Innovators",
  "Billie Eilish",
  "Artificial Intelligence",
];

export function getRandomSearchString() {
  const randomIndex = Math.floor(Math.random() * searchStrings.length);
  return searchStrings[randomIndex];
}
