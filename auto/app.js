const rows = document.querySelectorAll("tbody tr");

  // تحميل القيم من Local Storage عند بداية الصفحة
  window.addEventListener("DOMContentLoaded", () => {
    rows.forEach((row, index) => {
      ["td", "tp", "exam"].forEach(type => {
        const input = row.querySelector("." + type);
        if (input) {
          const savedValue = localStorage.getItem(`row${index}-${type}`);
          if (savedValue !== null) {
            input.value = savedValue;
          }
        }
      });
      calculateRowAverage(row);
    });
  });

  // إضافة مستمعات الأحداث
  rows.forEach((row, index) => {
    ["td", "tp", "exam"].forEach(type => {
      const input = row.querySelector("." + type);
      if (input) {
        input.addEventListener("input", () => {
          localStorage.setItem(`row${index}-${type}`, input.value);
          calculateRowAverage(row);
        });
      }
    });
  });

  // حساب معدل المادة
  function calculateRowAverage(row) {
    const tdInput = row.querySelector(".td");
    const tpInput = row.querySelector(".tp");
    const examInput = row.querySelector(".exam");

    const td = tdInput ? parseFloat(tdInput.value) : NaN;
    const tp = tpInput ? parseFloat(tpInput.value) : NaN;
    const exam = examInput ? parseFloat(examInput.value) : NaN;

    let average = null;

    const hasTD = !isNaN(td);
    const hasTP = !isNaN(tp);
    const hasExam = !isNaN(exam);

    if (hasTD && hasTP && hasExam) {
      average = td * 0.2 + tp * 0.2 + exam * 0.6;
    } else if (!hasTD && hasTP && hasExam) {
      average = tp * 0.4 + exam * 0.6;
    } else if (!hasTD && !hasTP && hasExam) {
      average = exam;
    }

    const avgCell = row.querySelector(".avg");
    if (average !== null) {
      avgCell.textContent = average.toFixed(2);

      // لون المعدل حسب القيمة
      if (average >= 10) {
        avgCell.style.color = "green";
      } else {
        avgCell.style.color = "red";
      }
    } else {
      avgCell.textContent = "";
      avgCell.style.color = "";
    }

    calculateGPA();
  }

  // حساب المعدل الفصلي العام
  function calculateGPA() {
    let total = 0;
    let totalCoeff = 0;

    rows.forEach(row => {
      const coeff = parseFloat(row.cells[1].textContent);
      const avgText = row.querySelector(".avg").textContent.trim();
      const avg = parseFloat(avgText);

      if (!isNaN(avg)) {
        total += avg * coeff;
        totalCoeff += coeff;
      }
    });

    const gpa = totalCoeff > 0 ? (total / totalCoeff).toFixed(2) : "";
    const gpaEl = document.getElementById("semester-gpa");

    gpaEl.textContent = gpa;
    if (gpa) {
      gpaEl.style.color = gpa >= 10 ? "green" : "red";
    } else {
      gpaEl.style.color = "";
    }
  }
