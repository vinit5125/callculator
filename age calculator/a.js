function cal() {

    const dobInput = document.getElementById('date1').value;
    const currentDateInput = document.getElementById('date2').value;

  

    const dob = new Date(dobInput);
    const currentDate = new Date(currentDateInput);


    let age = currentDate.getFullYear() - dob.getFullYear();


    

    document.getElementById('ca').textContent = `Your age is ${age} years.`;
}


    