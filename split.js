// Step 1: Store the Name
let empName = "Preethi";

// Step 2: Split the String
let splitName = empName.split("");

console.log(splitName);

// Step 3: Reverse Using i--
for (let i = splitName.length - 1; i >= 0; i--) {

    // Step 4: Print value
    console.log(splitName[i]);
}