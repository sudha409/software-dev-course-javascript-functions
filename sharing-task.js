/*
===========================================
🤝 Collaborative Coding Challenge: Event Helpers
===========================================

🎯 Objective:
Students will work in small teams to collaboratively design and implement
reusable functions that solve specific tasks. This activity encourages:

- Teamwork
- Critical thinking
- Knowledge sharing
*/

// ============================================
// 🎉 Scenario:
// Your bootcamp is organizing an event to showcase projects.
// Your team will write reusable JavaScript functions to help manage the event.
// Each function must:
// - Use parameters
// - Use return statements
// - Follow the single responsibility principle
// ============================================


// ============================================
// 🧩 Task 1: Generate Attendee Badge
// ============================================
// Create a function that:
// - Takes a name and a role (e.g., "Alice", "speaker")
// - Returns a string in the format: "Name: Alice, Role: Speaker"

// Steps:
// 1. Define the function with two parameters.
// 2. Format the output string properly.
// 3. Capitalize the role if needed.
// 4. Return the result.

function generateBadge(name, role, email) {
    const formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    const formattedRole = role[0].toUpperCase() + role.slice(1).toLowerCase();
    let badge = `Name: ${formattedName}, Role: ${formattedRole}`;
    if (validateEmail(email)) badge += ", Email: " + email;
    return badge;
}

console.log(generateBadge("Jhon", "Student")); // Name: Jhon, Role: Student
console.log(generateBadge("jhoN", "stuDent")); // Name: Jhon, Role: Student
console.log(generateBadge("jhoN", "stuDent", "realemail@email.com")); // Name: Jhon, Role: Student, Email: realemail@email.com
console.log(generateBadge("jhoN", "stuDent", "fakeemailatemail.com")); // Name: Jhon, Role: Student





// ============================================
// 🧩 Task 2: Calculate Event Cost
// ============================================
// Create a function that:
// - Takes number of attendees and cost per attendee.
// - Applies a 10% discount if attendees exceed 100.
// - Returns the total cost.

// Steps:
// 1. Multiply attendees by cost.
// 2. Check if attendee count is over 100.
// 3. If so, apply a 10% discount.
// 4. Return the final total.

// costPerAttendee is in dollars
function calculateEventCost(numOfAttendees, costPerAttendee) {
    let totalCost = numOfAttendees * costPerAttendee;
    if (numOfAttendees > 100) totalCost *= 0.9;
    return totalCost;
}

console.log(calculateEventCost(20, 10)); // Should be 200 total
console.log(calculateEventCost(200, 10)); // Should be 1800 total


// ============================================
// 🧩 Task 3: Validate Email
// ============================================
// Create a function that:
// - Takes an email string as input.
// - Returns true if the email contains both "@" and "." characters.
// - Returns false otherwise.

// Steps:
// 1. Check if the string includes both "@" and ".".
// 2. Return true or false accordingly.

// Returns true if email exists, includes "@" and includes "."
function validateEmail(email) {
    return email && email.includes("@") && email.includes(".");
}

console.log(validateEmail("realemail@email.com")); // true
console.log(validateEmail("fakeemail@emaildotcom")); // false
console.log(validateEmail("fakeemailatemaildot.com")); // false
console.log(validateEmail("fakeemailatemaildotcom")); // false


// ============================================
// 🧠 Collaborative Steps
// ============================================

// 📌 Design Phase:
// - Brainstorm function requirements: What inputs and outputs are needed?
// - Assign roles within your team:
//   ▸ Pseudocode Writer
//   ▸ Initial Coder
//   ▸ Testers / Debuggers

// 🛠️ Implementation Phase:
// - Write and refine your three functions as a team
// - Use return statements and ensure reusability

// 🧪 Testing Phase:
// - Each member writes test cases for each function
// - Use console.log() to test different inputs and edge cases

// 🎤 Presentation Phase:
// - Share your functions with the class
// - Explain how your team approached the design and testing process

// ✅ Bonus: Can you extend any of the functions to be more flexible or reusable?