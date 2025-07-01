namespace Quiz {
    // space for the code -> structure of the quiz


    quizRun();

    function quizRun() {

        //quizQuestion();
        //quizCheck();
        

        let again: string = prompt("Another question, yes or no?")!;
        if (again || "y" || "yes") {
            console.log("again");
            quizRun();
        }
    }


    function quizQuestion() {
        throw new Error("Function not implemented.");
    }

    function quizCheck() {
        throw new Error("Function not implemented.");
    }



}

