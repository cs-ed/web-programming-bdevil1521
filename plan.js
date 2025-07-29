document.addEventListener('DOMContentLoaded', () => {
  const practiceForm = document.getElementById('practiceForm');
  const drillInput = document.getElementById('drillInput');
  const drillList = document.getElementById('drillList');
  const practicePlansContainer = document.getElementById('practicePlans');

  let currentDrills = [];

  // Add a drill to the list
  document.getElementById('addDrillBtn').addEventListener('click', () => {
    const drill = drillInput.value.trim();
    if (drill) {
      currentDrills.push(drill);
      updateDrillList();
      drillInput.value = '';
    }
  });

  // Display current drills in the UI
  function updateDrillList() {
    drillList.innerHTML = '';
    currentDrills.forEach((drill, index) => {
      const li = document.createElement('li');
      li.textContent = drill;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = '✖';
      removeBtn.onclick = () => {
        currentDrills.splice(index, 1);
        updateDrillList();
      };
      li.appendChild(removeBtn);
      drillList.appendChild(li);
    });
  }

  // Handle form submission
  practiceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('practiceName').value.trim();
    const date = document.getElementById('practiceDate').value;
    if (!name || !date || currentDrills.length === 0) return;

    const newPlan = {
      name,
      date,
      drills: [...currentDrills]
    };

    savePlan(newPlan);
    displayPlans();
    practiceForm.reset();
    currentDrills = [];
    updateDrillList();
  });

  // Save to localStorage
  function savePlan(plan) {
    const existingPlans = JSON.parse(localStorage.getItem('practicePlans')) || [];
    existingPlans.push(plan);
    localStorage.setItem('practicePlans', JSON.stringify(existingPlans));
  }

  // Display all saved plans
  function displayPlans() {
    const plans = JSON.parse(localStorage.getItem('practicePlans')) || [];
    practicePlansContainer.innerHTML = '';

    plans.forEach((plan, index) => {
      const card = document.createElement('div');
      card.className = 'plan-card';
      card.innerHTML = `
        <h4>${plan.name}</h4>
        <p><strong>Date:</strong> ${plan.date}</p>
        <ul>${plan.drills.map(d => `<li>${d}</li>`).join('')}</ul>
        <button onclick="deletePlan(${index})">Delete</button>
      `;
      practicePlansContainer.appendChild(card);
    });
  }

  // Delete a plan
  window.deletePlan = function(index) {
    const plans = JSON.parse(localStorage.getItem('practicePlans')) || [];
    plans.splice(index, 1);
    localStorage.setItem('practicePlans', JSON.stringify(plans));
    displayPlans();
  }

  // Initial display
  displayPlans();
});
