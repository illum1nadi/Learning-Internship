// Old way
function getHeadAndBody(person) {

    let headAndBody = {
        head: person.head,
        body: person.body
    }

    return headAndBody;
}

// ES6 Destructuring
function getHeadAndBody({ head, body }) {
    return { head, body }
}

// With arrow functions
let getHeadAndBody = ({ head, body }) => { head, body };

