const generateBtn = document.getElementById("generateBtn");

const result = document.getElementById("result");



generateBtn.onclick = function(){


    let hours = document.getElementById("hours").value;

    let subject = document.getElementById("subject").value;



    if(hours === ""){

        alert("Please enter study hours");

        return;

    }




    let plan = "";



    if(hours <= 1){

        plan = `
        📌 Short Study Plan

        • 30 minutes - Learn concepts
        • 20 minutes - Practice questions
        • 10 minutes - Quick revision

        Tip: Focus on one important topic.
        `;

    }


    else if(hours <= 3){


        plan = `

        📚 Balanced Study Plan

        • 1 hour - Learn ${subject} concepts
        • 1 hour - Practice and solve problems
        • 30 minutes - Revise notes
        • 30 minutes - Complete pending tasks

        Tip: Take a 5-minute break after every 45 minutes.

        `;


    }


    else{


        plan = `

        🚀 Intensive Study Plan

        • 2 hours - Deep learning of ${subject}
        • 1 hour - Practice exercises
        • 1 hour - Work on projects
        • 30 minutes - Revision
        • 30 minutes - Plan tomorrow's tasks

        Tip: Stay hydrated and avoid distractions.

        `;


    }




    result.innerHTML = plan;


};