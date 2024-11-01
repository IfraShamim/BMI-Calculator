const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const result = document.querySelector("#result");

  if (height === "" && weight === "") {
    result.innerHTML = `Please enter a value to calculate BMI.`;
  } else if (height === "" || height <= 0) {
    result.innerHTML = `Please enter a valid height.`;
  } else if (weight === "" || weight <= 0) {
    result.innerHTML = `Please enter a valid weight.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
      result.innerHTML = `Your calculated BMI is ${bmi}, and you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.innerHTML = `Your calculated BMI is ${bmi}, and you are of normal weight.`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      result.innerHTML = `Your calculated BMI is ${bmi}, and you are overweight.`;
    } else {
      result.innerHTML = `Your calculated BMI is ${bmi}, and you are obese.`;
    }

    document.querySelector("#height").value = "";
    document.querySelector("#weight").value = "";
  }
});
