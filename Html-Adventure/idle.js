// set initial variables
var points = 0;
var clickValue = 1;
var upgrade1Cost = 10;
var upgrade1Multiplier = 1;
var upgrade2Cost = 25;
var upgrade2Multiplier = 2;
var upgrade3Cost = 50;
var upgrade3Multiplier = 3;
var passiveUpgrade1Cost = 50;
var passiveUpgrade1Multiplier = 1;
var passiveUpgrade1Amount = 1;
var passiveUpgrade2Cost = 100;
var passiveUpgrade2Multiplier = 2;
var passiveUpgrade2Amount = 5;
var passiveUpgrade1Interval;
var passiveUpgrade2Interval;


// function to handle upgrade 1 button click
function upgrade1() {
  if (points >= upgrade1Cost) {
    clickValue += upgrade1Multiplier;
    points -= upgrade1Cost;
    upgrade1Cost *= 2;
    updatePointsDisplay();
    updateUpgradeButtons();
  }
}

// function to handle upgrade 2 button click
function upgrade2() {
  if (points >= upgrade2Cost) {
    clickValue += upgrade2Multiplier;
    points -= upgrade2Cost;
    upgrade2Cost *= 2;
    updatePointsDisplay();
    updateUpgradeButtons();
  }
}

// function to handle upgrade 3 button click
function upgrade3() {
  if (points >= upgrade3Cost) {
    clickValue += upgrade3Multiplier;
    points -= upgrade3Cost;
    upgrade3Cost *= 2;
    updatePointsDisplay();
    updateUpgradeButtons();
  }
}

// function to handle passive upgrade 1 button click
function buyPassiveUpgrade1() {
  if (points >= passiveUpgrade1Cost) {
    passiveUpgrade1Amount++;
    points -= passiveUpgrade1Cost;
    passiveUpgrade1Cost *= 2;
    clearInterval(passiveUpgrade1Interval);
    passiveUpgrade1Interval = setInterval(function() {
      points += passiveUpgrade1Multiplier * passiveUpgrade1Amount;
      updatePointsDisplay();
    }, 1000);
    updatePointsDisplay();
    updatePassiveUpgradeButtons();
  }
}

function buyPassiveUpgrade2() {
  if (points >= passiveUpgrade2Cost) {
    passiveUpgrade2Amount++;
    points -= passiveUpgrade2Cost;
    passiveUpgrade2Cost *= 2;
    clearInterval(passiveUpgrade2Interval);
    passiveUpgrade2Interval = setInterval(function() {
      points += passiveUpgrade2Multiplier * passiveUpgrade2Amount;
      updatePointsDisplay();
    }, 500); // corrected interval time
    updatePointsDisplay();
    updatePassiveUpgradeButtons();
  }
}





// get elements from HTML
var clickButton = document.getElementById("clickButton");
var pointsDisplay = document.getElementById("pointsDisplay");
var upgrade1Button = document.getElementById("upgrade1Button");
var upgrade2Button = document.getElementById("upgrade2Button");
var upgrade3Button = document.getElementById("upgrade3Button");
var passiveUpgrade1Button = document.getElementById("passiveUpgrade1Button");
var passiveUpgrade2Button = document.getElementById("passiveUpgrade2Button");

// add click event listener to click button
clickButton.addEventListener("click", function() {
  points += clickValue;
  updatePointsDisplay();
});

// add click event listeners to upgrade buttons
upgrade1Button.addEventListener("click", function() {
  if (points >= upgrade1Cost) {
    points -= upgrade1Cost;
    clickValue *= upgrade1Multiplier;
    upgrade1Cost *= upgrade1Multiplier;
    updatePointsDisplay();
    updateUpgradeButtons();
  }
});

upgrade2Button.addEventListener("click", function() {
  if (points >= upgrade2Cost) {
    points -= upgrade2Cost;
    clickValue *= upgrade2Multiplier;
    upgrade2Cost *= upgrade2Multiplier;
    updatePointsDisplay();
    updateUpgradeButtons();
  }
});

upgrade3Button.addEventListener("click", function() {
  if (points >= upgrade3Cost) {
    points -= upgrade3Cost;
    clickValue *= upgrade3Multiplier;
    upgrade3Cost *= upgrade3Multiplier;
    updatePointsDisplay();
    updateUpgradeButtons();
  }
});

// add click event listeners to passive upgrade buttons
passiveUpgrade1Button.addEventListener("click", function() {
  if (points >= passiveUpgrade1Cost) {
    points -= passiveUpgrade1Cost;
    if (passiveUpgrade1Interval) {
      clearInterval(passiveUpgrade1Interval);
    }
    passiveUpgrade1Interval = setInterval(function() {
      points += passiveUpgrade1Amount;
      updatePointsDisplay();
    }, 1000);
    passiveUpgrade1Cost *= passiveUpgrade1Multiplier;
    updatePointsDisplay();
    updatePassiveUpgradeButtons();
  }
});

passiveUpgrade2Button.addEventListener("click", function() {
  if (points >= passiveUpgrade2Cost) {
    points -= passiveUpgrade2Cost;
    if (passiveUpgrade2Interval) {
      clearInterval(passiveUpgrade2Interval);
    }
    passiveUpgrade2Interval = setInterval(function() {
      points += passiveUpgrade2Amount;
      updatePointsDisplay();
    }, 1000);
    passiveUpgrade2Cost *= passiveUpgrade2Multiplier;
    updatePointsDisplay();
    updatePassiveUpgradeButtons();
  }
});

// function to update points display
function updatePointsDisplay() {
  pointsDisplay.innerHTML = points;
}

// function to update upgrade buttons
function updateUpgradeButtons() {
  upgrade1Button.innerHTML = "Upgrade 1 (" + upgrade1Cost + " points)";
  upgrade2Button.innerHTML = "Upgrade 2 (" + upgrade2Cost + " points)";
  upgrade3Button.innerHTML = "Upgrade 3 (" + upgrade3Cost + " points)";
}

// function to update passive upgrade buttons
function updatePassiveUpgradeButtons() {
passiveUpgrade1Button.innerHTML = "Passive Upgrade 1 (" + passiveUpgrade1Cost + " points)";
passiveUpgrade2Button.innerHTML = "Passive Upgrade 2 (" + passiveUpgrade2Cost + " points)";
}

// call update functions initially
updatePointsDisplay();
updateUpgradeButtons();
updatePassiveUpgradeButtons();