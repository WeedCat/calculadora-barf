document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    // Obtenemos los valores del formulario
    const animalType = document.getElementById('animalType').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const age = document.getElementById('age').value;
    const activity = document.getElementById('activity').value;
    const goal = document.getElementById('goal').value;

    // Cálculos básicos de las necesidades calóricas
    const tmb = 70 * Math.pow(weight, 0.75); // Tasa Metabólica Basal

    // Cálculo de calorías según nivel de actividad
    let calories = 0;
    if (activity === 'bajo') calories = tmb * 1.2;
    if (activity === 'medio') calories = tmb * 1.5;
    if (activity === 'alto') calories = tmb * 1.8;

    // Ajuste según el objetivo (perder, mantener o ganar peso)
    if (goal === 'perder') calories -= 0.1 * calories;  // Reducir 10% para perder peso
    if (goal === 'ganar') calories += 0.1 * calories;   // Aumentar 10% para ganar peso

    // Distribución de macronutrientes según la dieta BARF
    const protein = calories * 0.75;  // 75% de proteína
    const fats = calories * 0.1;     // 10% de grasas
    const vegetables = calories * 0.05;  // 5% de vegetales

    // Convertir las calorías a gramos
    const gramsOfFood = Math.round(calories / 1.2); // Estimación total de comida en gramos (aproximadamente)

    // Mostrar resultados
    document.getElementById('calories').innerHTML = `<strong>Calorías diarias recomendadas:</strong> ${Math.round(calories)} kcal`;
    document.getElementById('totalFood').innerHTML = `<strong>Total de comida diaria recomendada:</strong> ${gramsOfFood} gramos`;
    document.getElementById('proteinAmount').innerText = Math.round(protein);
    document.getElementById('fatsAmount').innerText = Math.round(fats);
    document.getElementById('vegetablesAmount').innerText = Math.round(vegetables);

    // Mostrar los resultados
    document.getElementById('results').style.display = 'block';
});
