document.addEventListener("DOMContentLoaded", () => {
  const habitText = document.getElementById("habitText");
  const addHabit = document.getElementById("addHabit");
  const habitList = document.getElementById("habitList");

  let habits = JSON.parse(localStorage.getItem("habits")) || [];

  function saveHabit() {
    localStorage.setItem("habits", JSON.stringify(habits));
  }

  function renderHabits() {
    habitList.innerHTML = "";
    habits.forEach(renderHabit);
  }

  function renderHabit(habit) {
    const li = document.createElement("li");
    li.classList.add("habit");
    li.setAttribute("data-id", habit.id);
    if (habit.completed) li.classList.add("done");

    li.innerHTML = `
      <div class="info">
        <span>${habit.name}</span>
        <small class="streak">Streak: ${habit.streak} days</small>
      </div>
      <div>
        <button class="completeBtn" onclick="toggleHabit(${habit.id})" style="color: ${habit.completed ? 'green' : '#333'}">✔</button>
        <button class="deleteBtn" onclick="deleteHabit(${habit.id})">✖</button>
      </div>
    `;

    habitList.appendChild(li);
  }

  addHabit.addEventListener("click", () => {
    const value = habitText.value.trim();
    if (!value) return;

    const newHabit = {
      id: Date.now(),
      name: value,
      completed: false,
      streak: 0,
      lastCompleted: null,
    };

    habits.push(newHabit);
    saveHabit();
    renderHabits();
    habitText.value = "";
  });

  window.toggleHabit = function (id) {
    const today = new Date().toDateString();

    habits = habits.map(habit => {
      if (habit.id === id) {
        if (habit.lastCompleted === today) {
          alert("Already marked today!");
        } else {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);

          if (habit.lastCompleted === yesterday.toDateString()) {
            habit.streak += 1;
          } else {
            habit.streak = 1;
          }

          habit.completed = true;
          habit.lastCompleted = today;
        }
      }
      return habit;
    });

    saveHabit();
    renderHabits();
  };

  window.deleteHabit = function (id) {
    habits = habits.filter(habit => habit.id !== id);
    saveHabit();
    renderHabits();
  };

  renderHabits();
});
