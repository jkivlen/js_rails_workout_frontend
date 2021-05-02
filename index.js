const endPoint = "http://localhost:3000/api/v1/workouts"

document.addEventListener('DOMContentLoaded', () => {
   getWorkouts()

   const createWorkoutForm = document.querySelector("#create-workout-form")

   createWorkoutForm.addEventListener("submit", (e) => createFormHandler(e))

})

function getWorkouts() {
    fetch(endPoint)
    .then(response => response.json())
    .then(workouts => {
        workouts.data.forEach(workout => {
            const workoutMarkup = `
            <div data-id=${workout.id}>
                <h3>${workout.attributes.title}</h3>
                <p>${workout.attributes.category.name}</p>
                <button data-id=${workout.id}>edit</button>
                </div>
                <br><br>`;

                document.querySelector('#workout-container').innerHTML += workoutMarkup
        })
    })
}


function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const descriptionInput = document.querySelector('#input-description').value
    const categoryId = parseInt(document.querySelector('#categories').value)
    postFetch(titleInput, descriptionInput, categoryId)
}

function postFetch(title, description, category_id) {
    console.log(title, description, category_id)
}