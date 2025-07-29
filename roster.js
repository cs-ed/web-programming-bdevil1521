document.addEventListener('DOMContentLoaded', () => {
  const playerForm = document.getElementById('playerForm');
  const rosterTableBody = document.querySelector('#rosterTable tbody');

  const players = [];

  // Add player
  playerForm.addEventListener('submit', 