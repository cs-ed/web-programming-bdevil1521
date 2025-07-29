document.addEventListener('DOMContentLoaded', () => {
  const playerForm = document.getElementById('playerForm');
  const rosterTableBody = document.querySelector('#rosterTable tbody');

  const players = [];

  // Add player
  playerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('playerName').value.trim();
    const number = document.getElementById('playerNumber').value.trim();
    const playerClass = document.getElementById('playerClass').value.trim();

    if (name && number && playerClass) {
      players.push({ name, number, playerClass });
      updateRosterDisplay();
      playerForm.reset();
    }
  });

  function updateRosterDisplay() {
    rosterTableBody.innerHTML = '';
    players.forEach(player => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${player.name}</td>
        <td>${player.number}</td>
        <td>${player.playerClass}</td>
      `;
      rosterTableBody.appendChild(row);
    });
  }
});
