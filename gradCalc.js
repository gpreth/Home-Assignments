function gradCalc(studentScore) {

    switch (true) {

        case (studentScore >= 90):
            console.log("Grade A");
            break;

        case (studentScore >= 80):
            console.log("Grade B");
            break;

        case (studentScore >= 70):
            console.log("Grade C");
            break;

        default:
            console.log("Fail");
            break;
    }
}

gradCalc(16);