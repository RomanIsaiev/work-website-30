(() => {
  const DEFAULT_MINUTES = 3;
  const pad2 = (n) => String(n).padStart(2, "0");

  function startCountdown(timerEl) {
    const minutesFromAttr = Number(timerEl.dataset.minutes);
    const durationMs =
      (Number.isFinite(minutesFromAttr) ? minutesFromAttr : DEFAULT_MINUTES) *
      60 *
      1000;

    const minEl = timerEl.querySelector(".minutes");
    const secEl = timerEl.querySelector(".seconds");
    const msEl = timerEl.querySelector(".milliseconds");

    if (!minEl || !secEl || !msEl) return;

    const endTime = Date.now() + durationMs;

    function render() {
      let diff = endTime - Date.now();
      if (diff < 0) diff = 0;

      const totalSec = Math.floor(diff / 1000);
      const mm = Math.floor(totalSec / 60);
      const ss = totalSec % 60;
      const ms = Math.floor((diff % 1000) / 10); // сотые: 00..99

      minEl.textContent = pad2(mm);
      secEl.textContent = pad2(ss);
      msEl.textContent = pad2(ms);

      if (diff === 0) clearInterval(intervalId);
    }

    render();
    const intervalId = setInterval(render, 10); // для сотых секунды
  }

  document.querySelectorAll(".countdown").forEach(startCountdown);
})();
