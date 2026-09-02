document.addEventListener("DOMContentLoaded", function () {

  let balance = 1000;

  const balanceElement = document.getElementById("balance");

  function updateBalance() {
    if (balanceElement) {
      balanceElement.textContent = balance.toLocaleString();
    }
  }

  window.claimBonus = function () {
    balance += 250;
    updateBalance();

    const button = document.getElementById("bonusBtn");

    if (button) {
      button.textContent = "✓ Bonus Claimed";
      button.disabled = true;
    }
  };

  window.scrollToGames = function () {
    const games = document.getElementById("games");

    if (games) {
      games.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  window.openLogin = function () {
    const modal = document.getElementById("loginModal");

    if (modal) {
      modal.classList.add("show");
    }
  };

  window.closeLogin = function () {
    const modal = document.getElementById("loginModal");

    if (modal) {
      modal.classList.remove("show");
    }
  };

  window.demoLogin = function () {
    const message = document.getElementById("loginMessage");

    if (message) {
      message.textContent = "✓ Demo login successful!";
    }
  };

  updateBalance();

})