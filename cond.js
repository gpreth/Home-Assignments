//ques1
function launchBrowser (BrowserName){
    if (BrowserName="Chrome")
    {
        console.log("This is Chrome")
    }
    else if(BrowserName="firefox")
    {
        console.log("This is firefox")
    }
    else
    {
        console.log("This is new")
    }
}
launchBrowser()

//ques2
runTests("smoke")
function runTests (testType){
        switch (testType) {
            case smoke:
                console.log("This is smoke test")
                break;
            case reg:
                console.log("This is reg test")
                break;
            case sanity:
                console.log("This is sanity test")
                break;
            default:
                console.log("This is new test")
                break;
        }

}
