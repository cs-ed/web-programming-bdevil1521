window.onload = function() {
  /* Put random quote at top of page.
  alert("Welcome to MCHS Grizzlies Flag Football Home");
*/
}

const quotes = [
  "She believed she could, so she did – on the field and beyond.",
  "Strength doesn’t come from what you can do. It comes from overcoming what you once thought you couldn’t.",
  "Girls who play football don’t wait for permission to be powerful.",
  "Toughness is in the soul and spirit, not in gender.",
  "Play like a girl? You wish you could.",
  "I’m not just here to play. I’m here to win.",
  "The field doesn’t care if you’re a girl — only if you can play.",
  "Confidence is the best gear a girl can wear on the field.",
  "Fearless isn’t a trait — it’s a decision we make every time we suit up.",
  "Strong girls build strong teams.",
  "We don’t follow the game. We change it.",
  "Passion has no gender. Neither does hustle.",
  "Our hearts beat in rhythm with the snap count.",
  "Being underestimated is my greatest advantage.",
  "I’m not breaking barriers — I’m proving they never should’ve existed.",
  "When girls play football, they play with fire, focus, and fierce determination.",
  "Every down is a chance to prove we belong here.",
  "Girls tackle stereotypes with every sprint, pass, and play.",
  "Don’t wait for opportunity. Create the lane and run it yourself.",
  "We aren’t asking for a spot. We’re earning it — every yard, every game.",
  "Some girls play football. Some girls *are* football.",
  "Tackling limits, dodging doubts, and running for greatness.",
  "Real queens wear cleats.",
  "Strong girls, loud huddles, proud teams.",
  "When we play, we don’t just change the score — we change the story."
];


window.addEventListener('DOMContentLoaded', () => {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote-box').innerHTML = quotes[randomQuote];
});
