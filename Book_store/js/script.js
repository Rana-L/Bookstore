window.onload = () => {
  const menuBar = document.querySelector("#menu-bar");
  const menuDropdown = document.querySelector("#mobile-dropdown");

  menuBar.onclick = function () {
    menuDropdown.classList.toggle("mobile-active");
  };

  // Payment Script
  document.getElementById("b").addEventListener("click", (e) => {
    e.preventDefault();

    const c = document.getElementById("cc").value;
    const m = document.getElementById("m").value;
    const y = document.getElementById("y").value;
    const cvv = document.getElementById("cvv").value;

    // Validate credit card number
    const c_re = /^5[1-5][0-9]{14}$/;
    if (!c.match(c_re)) {
      alert("Please enter a valid credit card number");
      // location.reload();
      return 0;
    }

    // Validate Security Code
    const cvv_re = /^[0-9]{3,4}$/;
    if (!cvv.match(cvv_re)) {
      alert("Please enter a valid security code");
      // location.reload();
      return 0;
    }

    // Send data to API
    const data = {
      master_card: parseInt(c),
      exp_month: parseInt(m),
      exp_year: parseInt(y),
      cvv_code: cvv,
    };

    // Validate Expiry Date
    const currentDate = new Date();
    const currentMonth = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const currentYear = currentDate.getFullYear();

    if (
      data.exp_year < currentYear ||
      (data.exp_year == currentYear && data.exp_month < currentMonth)
    ) {
      alert("Please select a date after the current date");
      // location.reload();
      return 0;
    }

    // Extra Validation Step
    if (isNaN(data.exp_month) || isNaN(data.exp_year)) {
      alert("Please enter a expiration date");
      // location.reload();
      return 0;
    }

    const url = "https://mudfoot.doc.stu.mmu.ac.uk/node/api/creditcard";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resJ) => {
        if (resJ.status == 200) {
          return resJ.json({ message: "Thank you for your payment." });
        } else {
          throw "Payment has failed";
        }
      })
      .then((resJ) => {
        alert(resJ["message"]);
        location.href = "success.html";
      });
  });
};
