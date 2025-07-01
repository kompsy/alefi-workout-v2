const trainingPlans = {
  ashWorkout: {
    name: "Ash's Workout Routine",
    description: "En balanceret træningsrutine, der fokuserer på forskellige muskelgrupper hver dag.",
    workouts: {
      "Dag 1 - Bryst og Ryg": [
        { name: "Bryst: dumbbell bench press eller floor press", sets: "3 sæt af 6-8 gentagelser" },
        { name: "Ryg: dumbbell bent-over rows", sets: "3 sæt af 6-8 gentagelser" },
        { name: "Bryst: dumbbell fly", sets: "3 sæt af 8-10 gentagelser" },
        { name: "Ryg: one-arm dumbbell rows", sets: "3 sæt af 6-8 gentagelser" },
        { name: "Bryst: pushups", sets: "3 sæt af 10-12 gentagelser" },
        { name: "Ryg/Bryst: dumbbell pullover", sets: "3 sæt af 10-12 gentagelser" }
      ],
      "Dag 2 - Arme og Mave": [
        { name: "Biceps: alternating biceps curls", sets: "3 sæt af 8-10 gentagelser pr. arm" },
        { name: "Triceps: overhead triceps extensions", sets: "3 sæt af 8-10 gentagelser" },
        { name: "Biceps: seated dumbbell curls", sets: "2 sæt af 10-12 gentagelser pr. arm" },
        { name: "Triceps: bench dips", sets: "2 sæt af 10-12 gentagelser" },
        { name: "Biceps: concentration curls", sets: "3 sæt af 10-12 gentagelser pr. arm" },
        { name: "Triceps: dumbbell kickbacks", sets: "3 sæt af 8-10 gentagelser pr. arm" },
        { name: "Mave: planks", sets: "3 sæt af 30 sekunders holds" }
      ],
      "Dag 3 - Ben, Skuldre og Mave": [
        { name: "Ben: dumbbell squats", sets: "3 sæt af 6-8 gentagelser" },
        { name: "Skuldre: standing shoulder press", sets: "3 sæt af 6-8 gentagelser" },
        { name: "Ben: dumbbell lunge", sets: "2 sæt af 8-10 gentagelser pr. ben" },
        { name: "Skuldre: dumbbell upright rows", sets: "2 sæt af 8-10 gentagelser" },
        { name: "Hamstrings: Romanian dumbbell deadlift", sets: "2 sæt af 6-8 gentagelser" },
        { name: "Skuldre: lateral raises", sets: "3 sæt af 8-10 gentagelser" },
        { name: "Læg: seated calf raises", sets: "4 sæt af 10-12 gentagelser" },
        { name: "Mave: crunches with legs elevated", sets: "3 sæt af 10-12 gentagelser" }
      ]
    }
  },
  fullBodyWorkout: {
    name: "Full Body Workout",
    description: "En omfattende helkropstræningsrutine, der targetter alle store muskelgrupper.",
    workouts: {
      "Dag 1 - Helkrop": [
        { name: "Ben: barbell back squats", sets: "3 sæt af 5 gentagelser" },
        { name: "Bryst: flat barbell bench press", sets: "3 sæt af 5 gentagelser" },
        { name: "Ryg: seated cable rows", sets: "3 sæt af 6-8 gentagelser" },
        { name: "Skuldre: seated dumbbell shoulder press", sets: "3 sæt af 6-8 gentagelser" },
        { name: "Triceps: cable rope triceps pushdowns", sets: "3 sæt af 8-10 gentagelser" },
        { name: "Skuldre: lateral raises", sets: "3 sæt af 10-12 gentagelser" },
        { name: "Læg: seated calf raises", sets: "3 sæt af 10-12 gentagelser" },
        { name: "Mave: planks", sets: "3 sæt af 30 sekunders holds" }
      ],
      "Dag 2 - Helkrop": [
        { name: "Ryg/Hamstrings: barbell eller trap bar deadlifts", sets: "3 sæt af 5 gentagelser" },
        { name: "Ryg: pullups eller lat pulldowns", sets: "3 sæt af 6-8 gentagelser" },
        { name: "Bryst: barbell eller dumbbell incline press", sets: "3 sæt af 6-8 gentagelser" },
        { name: "Skuldre: machine shoulder press", sets: "3 sæt af 6-8 gentagelser" },
        { name: "Biceps: barbell eller dumbbell biceps curls", sets: "3 sæt af 8-10 gentagelser" },
        { name: "Skuldre: reverse machine fly", sets: "3 sæt af 10-12 gentagelser" },
        { name: "Læg: standing calf raises", sets: "3 sæt af 10-12 gentagelser" }
      ],
      "Dag 3 - Helkrop": [
        { name: "Ben: leg press", sets: "3 sæt af 5 gentagelser" },
        { name: "Ryg: T-bar rows", sets: "3 sæt af 6-8 gentagelser" },
        { name: "Bryst: machine eller dumbbell chest fly", sets: "3 sæt af 6-8 gentagelser" },
        { name: "Skuldre: one-arm dumbbell shoulder press", sets: "3 sæt af 6-8 gentagelser" },
        { name: "Triceps: dumbbell eller machine triceps extensions", sets: "3 sæt af 8-10 gentagelser" },
        { name: "Skuldre: cable eller dumbbell front raises", sets: "3 sæt af 10-12 gentagelser" },
        { name: "Læg: seated calf raises", sets: "3 sæt af 10-12 gentagelser" },
        { name: "Mave: decline crunches", sets: "3 sæt af 10-12 gentagelser" }
      ]
    }
  }
};

const quotes = [
  "Mestre træner, tabere klager.",
  "Den eneste dårlige træning er den, der ikke skete.",
  "Smerte er svaghed, der forlader kroppen.",
  "Udmærkelse er en vane, ikke en handling.",
  "Stærke kroppe skaber stærke sind.",
  "Dagens offer er morgendagens styrke.",
  "Disciplin giver frihed.",
  "Fremskridt, ikke perfektion.",
  "Din fremtidige selv vil takke dig.",
  "Beast mode: AKTIVERET!"
];

const achievements = [
  { id: 'first_workout', name: 'Første Skridt', description: 'Gennemfør din første træning', condition: () => appState.totalWorkouts >= 1 },
  { id: 'ten_workouts', name: 'Deca-Løfter', description: 'Gennemfør 10 træninger', condition: () => appState.totalWorkouts >= 10 },
  { id: 'weight_log', name: 'Vægt Iagttager', description: 'Log din vægt 5 gange', condition: () => appState.weightLog.length >= 5 }
];

let appState = {
  weightGoal: null,
  currentPlan: null,
  currentView: 'plans',
  completedExercises: {},
  completedTimestamps: {},
  totalWorkouts: 0,
  lastResetWeek: null,
  weightLog: [],
  personalRecords: [],
  unlockedAchievements: []
};

let progressChart = null;
let weightChart = null;

function init() {
  loadFromStorage();
  updateGoalDisplay();
  updateGreeting();
  showDailyQuote();
  updateStats();
  showWorkoutPlans();
  checkAchievements();
  initCharts();
  checkWeekReset();
  setInterval(saveToStorage, 30000);
  setInterval(checkWeekReset, 3600000); // Tjek ugentlig nulstilling hver time
  window.addEventListener('beforeunload', saveToStorage);
}

function saveToStorage() {
  localStorage.setItem('workoutAppState', JSON.stringify(appState));
}

function loadFromStorage() {
  const savedState = localStorage.getItem('workoutAppState');
  if (savedState) {
    appState = JSON.parse(savedState);
    resetExpiredCheckmarks();
    // Tjek kun ugentlig nulstilling efter indlæsning for at undgå nulstilling ved hver indlæsning
    checkWeekReset();
  } else {
    // Initialiser lastResetWeek, hvis ingen tilstand findes
    const now = new Date();
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - now.getDay());
    weekStart.setHours(0, 0, 0, 0);
    appState.lastResetWeek = weekStart.toISOString();
    saveToStorage();
  }
}

function resetExpiredCheckmarks() {
  const now = new Date();
  Object.keys(appState.completedExercises).forEach(key => {
    const timestamp = appState.completedTimestamps[key];
    if (timestamp) {
      const diffHours = (now - new Date(timestamp)) / (1000 * 60 * 60);
      if (diffHours >= 10) {
        delete appState.completedExercises[key];
        delete appState.completedTimestamps[key];
      }
    }
  });
}

function checkWeekReset() {
  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - now.getDay()); // Sæt til mandag i den aktuelle uge
  weekStart.setHours(0, 0, 0, 0);
  const weekStartStr = weekStart.toISOString();
  if (appState.lastResetWeek && appState.lastResetWeek !== weekStartStr) {
    appState.lastResetWeek = weekStartStr;
    saveToStorage();
  }
}

function updateGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting = "Velkommen tilbage";
  if (hour < 12) greeting = "God morgen";
  else if (hour < 17) greeting = "God eftermiddag";
  else greeting = "God aften";
  document.getElementById('greeting').textContent = `${greeting}, Mester!`;
}

function showDailyQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('dailyQuote').textContent = `💪 ${quote}`;
}

function updateStats() {
  document.getElementById('totalWorkouts').textContent = appState.totalWorkouts;
}

function showWorkoutPlans() {
  appState.currentView = 'plans';
  updateView();
  const plansList = document.getElementById('plansList');
  if (!plansList) {
    console.error('plansList element ikke fundet');
    return;
  }
  plansList.innerHTML = '';
  Object.keys(trainingPlans).forEach(planId => {
    const plan = trainingPlans[planId];
    const planCard = document.createElement('div');
    planCard.className = 'plan-card';
    planCard.innerHTML = `
      <div class="plan-title">${plan.name}</div>
      <div class="plan-description">${plan.description}</div>
      <button class="select-plan-btn" onclick="selectPlan('${planId}')">Vælg plan</button>
    `;
    plansList.appendChild(planCard);
  });
}

function selectPlan(planId) {
  appState.currentPlan = planId;
  showWorkoutContent();
  saveToStorage();
}

function showWorkoutContent() {
  appState.currentView = 'workouts';
  updateView();
  const workoutContent = document.getElementById('workoutContent');
  if (!workoutContent) {
    console.error('workoutContent element ikke fundet');
    return;
  }
  workoutContent.innerHTML = '';
  if (!appState.currentPlan) {
    workoutContent.innerHTML = '<p style="text-align: center;">Vælg venligst en workout først.</p>';
    return;
  }
  const plan = trainingPlans[appState.currentPlan];
  Object.keys(plan.workouts).forEach(day => {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'workout-day';
    dayDiv.innerHTML = `<div class="day-header">${day}</div><div class="exercise-list"></div>`;
    const exerciseList = dayDiv.querySelector('.exercise-list');
    plan.workouts[day].forEach((exercise, index) => {
      const key = `${appState.currentPlan}_${day}_${index}`;
      const isCompleted = appState.completedExercises[key] || false;
      const exerciseItem = document.createElement('div');
      exerciseItem.className = `exercise-item ${isCompleted ? 'completed' : ''}`;
      exerciseItem.innerHTML = `
        <input type="checkbox" class="exercise-checkbox" ${isCompleted ? 'checked' : ''} 
          onchange="toggleExercise('${appState.currentPlan}', '${day}', ${index}, this.checked)">
        <div class="exercise-name">${exercise.name}</div>
        <div class="exercise-sets">${exercise.sets}</div>
        <div class="timestamp">${isCompleted ? new Date(appState.completedTimestamps[key]).toLocaleTimeString('da-DK') : ''}</div>
      `;
      exerciseList.appendChild(exerciseItem);
    });
    workoutContent.appendChild(dayDiv);
  });
}

function toggleExercise(planId, day, index, isChecked) {
  const key = `${planId}_${day}_${index}`;
  const plan = trainingPlans[planId];
  const exercises = plan.workouts[day];
  appState.completedExercises[key] = isChecked;
  appState.completedTimestamps[key] = isChecked ? new Date().toISOString() : null;
  
  if (isChecked) {
    const allCompleted = exercises.every((_, i) => appState.completedExercises[`${planId}_${day}_${i}`]);
    if (allCompleted) {
      appState.totalWorkouts++;
      saveToStorage();
    }
  } else {
    const allCompleted = exercises.every((_, i) => appState.completedExercises[`${planId}_${day}_${i}`]);
    if (!allCompleted && appState.completedExercises[key]) {
      appState.totalWorkouts = Math.max(0, appState.totalWorkouts - 1);
      saveToStorage();
    }
  }
  updateStats();
  showWorkoutContent();
  checkAchievements();
  saveToStorage();
}

function showProgress() {
  appState.currentView = 'progress';
  updateView();
  updateProgressChart();
}

function showWeightLog() {
  appState.currentView = 'weight';
  updateView();
  const weightLogView = document.getElementById('weightLogView');
  if (!weightLogView) {
    console.error('weightLogView element ikke fundet');
    return;
  }
  weightLogView.innerHTML = `
    <h2>Vægtsporing</h2>
    <div class="weight-input">
      <input type="number" id="weightInput" placeholder="Indtast vægt (kg)" step="0.1">
      <button onclick="addWeight()">Tilføj vægt</button>
    </div>
    <div class="chart-container">
      <canvas id="weightChart" width="400" height="200"></canvas>
    </div>
    <button onclick="setWeightGoal()">Sæt vægtmål</button>
    <div id="weightGoalDisplay">${appState.weightGoal ? `Mål: ${appState.weightGoal} kg` : 'Intet mål sat'}</div>
    <div id="weightLogList"></div>
  `;
  updateWeightChart();
  updateGoalDisplay();
  renderWeightLogList();
}

function addWeight() {
  const weightInput = document.getElementById('weightInput');
  const weight = parseFloat(weightInput.value);
  if (!isNaN(weight) && weight > 0) {
    appState.weightLog.push({ date: new Date().toISOString(), weight });
    weightInput.value = '';
    updateWeightChart();
    updateGoalDisplay();
    renderWeightLogList();
    saveToStorage();
    if (appState.weightGoal) {
      const difference = Math.abs(appState.weightGoal - weight);
      if (weight <= appState.weightGoal) {
        showModal('Mål nået!', `Tillykke! Du har nået dit vægtmål på ${appState.weightGoal} kg!`);
      } else {
        showModal('Du er tæt på!', `Kun ${difference} kg tilbage for at nå dit mål på ${appState.weightGoal} kg!`);
      }
    }
  } else {
    showModal('Fejl', 'Indtast venligst en gyldig vægt.');
  }
}

function setWeightGoal() {
  const goal = prompt('Indtast dit vægtmål (kg):');
  const weightGoal = parseFloat(goal);
  if (!isNaN(weightGoal) && weightGoal > 0) {
    appState.weightGoal = weightGoal;
    document.getElementById('weightGoalDisplay').textContent = `Mål: ${weightGoal} kg`;
    saveToStorage();
    showModal('Succes', `Vægtmål sat til ${weightGoal} kg!`);
  } else {
    showModal('Fejl', 'Indtast venligst et gyldigt vægtmål.');
  }
}

function updateGoalDisplay() {
  const display = document.getElementById('weightGoalDisplay');
  if (display) {
    display.textContent = appState.weightGoal ? `Mål: ${appState.weightGoal} kg` : 'Intet mål sat';
  }
}

function renderWeightLogList() {
  const listDiv = document.getElementById('weightLogList');
  if (!listDiv) return;
  if (!appState.weightLog.length) {
    listDiv.textContent = 'Ingen vægtregistreringer endnu.';
    return;
  }
  listDiv.innerHTML = appState.weightLog.map(log => {
    const date = new Date(log.date).toLocaleDateString('da-DK');
    return `<div>${date}: ${log.weight} kg</div>`;
  }).join('');
}

function showPRs() {
  appState.currentView = 'prs';
  updateView();
  renderPRList();
}

function addPR() {
  const exerciseInput = document.getElementById('prExerciseInput');
  const weightInput = document.getElementById('prWeightInput');
  const repsInput = document.getElementById('prRepsInput');
  const exercise = exerciseInput.value.trim();
  const weight = parseFloat(weightInput.value);
  const reps = parseInt(repsInput.value);
  
  if (exercise && !isNaN(weight) && weight > 0 && !isNaN(reps) && reps > 0) {
    appState.personalRecords.push({
      exercise: exercise,
      weight: weight,
      reps: reps,
      date: new Date().toISOString()
    });
    exerciseInput.value = '';
    weightInput.value = '';
    repsInput.value = '';
    renderPRList();
    saveToStorage();
    showModal('Succes', `Personlig rekord tilføjet: ${exercise} ${weight} kg x ${reps} gentagelser`);
  } else {
    showModal('Fejl', 'Indtast venligst gyldigt øvelsesnavn, vægt og gentagelser.');
  }
}

function renderPRList() {
  const prList = document.getElementById('prList');
  if (!prList) return;
  if (!appState.personalRecords.length) {
    prList.textContent = 'Ingen personlige rekorder endnu.';
    return;
  }
  prList.innerHTML = appState.personalRecords.map(pr => {
    const date = new Date(pr.date).toLocaleDateString('da-DK');
    return `<div class="stat-card">${date}: ${pr.exercise} - ${pr.weight} kg x ${pr.reps} gentagelser</div>`;
  }).join('');
}

function showAchievements() {
  appState.currentView = 'achievements';
  updateView();
  const achievementsList = document.getElementById('achievementsList');
  achievementsList.innerHTML = '';
  achievements.forEach(achievement => {
    const isUnlocked = appState.unlockedAchievements.includes(achievement.id);
    const achievementDiv = document.createElement('div');
    achievementDiv.className = 'stat-card';
    achievementDiv.style.opacity = isUnlocked ? '1' : '0.5';
    achievementDiv.innerHTML = `
      <div class="stat-value">${achievement.name}</div>
      <div class="stat-label">${achievement.description}</div>
    `;
    achievementsList.appendChild(achievementDiv);
  });
}

function checkAchievements() {
  achievements.forEach(achievement => {
    if (achievement.condition() && !appState.unlockedAchievements.includes(achievement.id)) {
      appState.unlockedAchievements.push(achievement.id);
      showModal(`Præstation låst op: ${achievement.name}`, achievement.description);
    }
  });
  saveToStorage();
}

function showSettings() {
  appState.currentView = 'settings';
  updateView();
}

function updateView() {
  const views = {
    plans: 'workoutPlansView',
    workouts: 'workoutContent',
    progress: 'progressView',
    weight: 'weightLogView',
    prs: 'prView',
    achievements: 'achievementsView',
    settings: 'settingsView'
  };
  Object.keys(views).forEach(view => {
    const element = document.getElementById(views[view]);
    if (element) {
      if (view === appState.currentView) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    }
  });
}

function resetAllData() {
  showModal('Bekræft nulstilling', 'Er du sikker på, at du vil nulstille alle data? Dette kan ikke fortrydes.', [
    { text: 'Annuller', action: closeModal },
    { text: 'Nulstil', action: () => {
      appState = {
        weightGoal: null,
        currentPlan: null,
        currentView: 'plans',
        completedExercises: {},
        completedTimestamps: {},
        totalWorkouts: 0,
        lastResetWeek: null,
        weightLog: [],
        personalRecords: [],
        unlockedAchievements: []
      };
      saveToStorage();
      updateStats();
      updateGoalDisplay();
      renderWeightLogList();
      renderPRList();
      showWorkoutPlans();
      closeModal();
      showModal('Succes', 'Alle data er blevet nulstillet!');
    }}
  ]);
}

function showModal(title, message, buttons = [{ text: 'OK', action: closeModal }]) {
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = `
    <h3>${title}</h3>
    <p>${message}</p>
    <div id="modalButtons" style="display: flex; gap: 10px; margin-top: 20px;"></div>
  `;
  const btnContainer = document.getElementById('modalButtons');
  buttons.forEach(btn => {
    const b = document.createElement('button');
    b.className = 'nav-btn';
    b.textContent = btn.text;
    b.addEventListener('click', () => {
      btn.action();
    });
    btnContainer.appendChild(b);
  });
  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', init);

function initCharts() {
  const progressCtx = document.getElementById('progressChart')?.getContext('2d');
  if (progressCtx) {
    progressChart = new Chart(progressCtx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Træning fuldført',
          data: [],
          borderColor: '#00ff88',
          backgroundColor: 'rgba(0, 255, 136, 0.2)',
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { title: { display: true, text: 'Dato' } },
          y: { title: { display: true, text: 'Træning' }, beginAtZero: true }
        }
      }
    });
  }

  const weightCtx = document.getElementById('weightChart')?.getContext('2d');
  if (weightCtx) {
    weightChart = new Chart(weightCtx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Vægt (kg)',
          data: [],
          borderColor: '#00cc99',
          backgroundColor: 'rgba(0, 204, 153, 0.2)',
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { title: { display: true, text: 'Dato' } },
          y: { title: { display: true, text: 'Vægt (kg)' }, beginAtZero: false }
        }
      }
    });
  }
}

function updateProgressChart() {
  if (!progressChart) return;
  const dates = [];
  const workouts = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    dates.push(date.toLocaleDateString('da-DK'));
    workouts.push(i === 0 ? appState.totalWorkouts : 0);
  }
  progressChart.data.labels = dates;
  progressChart.data.datasets[0].data = workouts;
  progressChart.update();
}

function updateWeightChart() {
  if (!weightChart) return;
  const labels = appState.weightLog.map(log => new Date(log.date).toLocaleDateString('da-DK'));
  const data = appState.weightLog.map(log => log.weight);
  weightChart.data.labels = labels.length ? labels : ['Ingen data endnu'];
  weightChart.data.datasets[0].data = data.length ? data : [0];
  if (appState.weightGoal) {
    weightChart.data.datasets.push({
      label: 'Mål',
      data: Array(labels.length).fill(appState.weightGoal),
      borderColor: '#ff4444',
      borderDash: [5, 5],
      fill: false
    });
  } else if (weightChart.data.datasets.length > 1) {
    weightChart.data.datasets.pop();
  }
  weightChart.update();
}