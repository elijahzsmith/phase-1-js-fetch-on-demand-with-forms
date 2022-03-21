const init = () => {
    const inputForm = document.querySelector('form'); // select form
    inputForm.addEventListener('submit', (event) => { // add submit event listener to our form 
        event.preventDefault(); // prevent page from refreshing on submit event
        
        const input = document.querySelector("input#searchByID"); // selecting input section
        console.log(input); // logging input to see if it's working
        fetch(`http://localhost:3000/movies/${input.value}`) // request data from this server
        .then(response => response.json()) // take response and turn into js object
        .then(data => {
            console.log(data); // log the data
            const title = document.querySelector("section#movieDetails h4"); // select the h4 with title placeholder
            const summary = document.querySelector("section#movieDetails p"); // select the p with summary placeholder

            title.innerText = data.title;
            summary.innerText = data.summary;
        });
    });
  
}

document.addEventListener('DOMContentLoaded', init); // event listener added to the whole document to wait to load js until DOM content has loaded


/* 
1. Add event listeners to capture form data and override a form's default behavior
2. Fetch data based on what the user types into that form
3. Display that data on the page
*/