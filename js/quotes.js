const quotes = [
  {
    quote: "No great man ever complains of want of opportunity."
  },
  {
    quote: "Do not accustom yourself to use big words for little matters."
  },
  {
    quote: "A day without laughter is a day wasted."
  },
  {
    quote: "Patterning your life around other's opinions is nothing more than slavery."
  },
  {
    quote: "Love what you have."
  },
  {
    quote: "It ain't over till it's over."
  },
  {
    quote: "Life is not fair, get used to it."
  },
  {
    quote: "Only I can change my life, No one can do it for me."
  },
  {
    quote: "The unexamined life is not worth living."
  },
  {
    quote: "Life is a tragedy when seen in close-up, but a comedy in long shot."
  },
  {
    quote: "Do not be afraid to give up the good to go for the great."
  },
  {
    quote: "Better the last smile than the first laughter."
  },
  {
    quote: "No pain no gain."
  },
  {
    quote: "Habit is second nature."
  },
  {
    quote: "We can give advice, but we cannot give conduct."
  },
  {
    quote: "Success doesn't come overnight."
  },
  {
    quote: "Better late than never."
  },
  {
    quote: "Who dares, wins."
  },
  {
    quote: "Slow and steady win the race."
  },
  {
    quote: "Rome is not built in a day."
  }
];

const quote = document.querySelector("#quote span")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
