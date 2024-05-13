let timerInterval;
  let startTime;
  let elapsedTime = 0;
  let running = false;

  const timerDisplay = document.getElementById("timer");
  const startButton = document.getElementById("startButton");
  const pauseButton = document.getElementById("pauseButton");
  const stopButton = document.getElementById("stopButton");

  startButton.addEventListener("click", startTimer);
  pauseButton.addEventListener("click", pauseTimer);
  stopButton.addEventListener("click", stopTimer);

  function startTimer() {
    if (!running) {
      running = true;
      startButton.disabled = true;
      pauseButton.disabled = false;
      stopButton.disabled = false;
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(updateTimer, 1000);
    }
  }

  function pauseTimer() {
    if (running) {
      running = false;
      clearInterval(timerInterval);
      pauseButton.textContent = "Continue";
    } else {
      running = true;
      pauseButton.textContent = "Pause";
      startTimer();
    }
  }

  function stopTimer() {
    clearInterval(timerInterval);
    running = false;
    startButton.disabled = false;
    pauseButton.disabled = true;
    stopButton.disabled = true;
    elapsedTime = 0;
    timerDisplay.textContent = "00:00:00";
  }

  function updateTimer() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    timerDisplay.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
  }

  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }