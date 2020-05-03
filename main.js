var savings = 0;
function clearInputs()
{
    document.getElementById("income_text").value = "";
    document.getElementById("status_select").value = "";
    document.getElementById("fam_text").value = "";
    document.getElementById("cost_text").value = "";

    //document.getElementById("provs").value = "";
    //document.getElementById("plans").value = "";    
}

function hideSubmit()
{
    document.getElementById("income_input").style.display = "none";
    document.getElementById("status_select").style.display = "none";
    document.getElementById("providers_select").style.display = "none";
    document.getElementById("plans_select").style.display = "none";
    document.getElementById("fam_input").style.display = "none";
    document.getElementById("cost_input").style.display = "none";
    document.getElementById("clear").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("advanced_button").style.display = "none";
    document.getElementById("results_headline").style.display = "inline-block";    
    document.getElementById("restart_button").style.display = "inline-block";    
    document.getElementById("results_headline").style.display = "inline-block";    
    document.getElementById("plan1_title").style.display = "inline-block";    
   // document.getElementById("plan2_title").style.display = "inline-block";    
    document.getElementById("plan3_title").style.display = "inline-block";    
  //  document.getElementById("plan4_title").style.display = "inline-block";    
    results_headline.style.display = "inline";

    var income = document.getElementById("income_text").value;
    var status = document.getElementById("status_select").value;
    var fam = document.getElementById("fam_text").value;
    var cost = document.getElementById("cost_text").value;
    
    var savings = calculate(income, status, fam, cost);
    var verb_cost = "saves"
    if (savings < 0) { verb_cost = "costs"; savings = -(savings);}
    document.getElementById("savings_line").innerHTML = ("Medicare for All " + verb_cost + " you: $" + savings + " more");    

}

function calculate(income, status, fam, cost)
{
    var reduce = 0;
    if (status == 2 && fam > 3) reduce = 29000;
    var new_cost = (income - reduce) * 0.04;
    if(new_cost < 0) new_cost = 0;
    var savings = Math.round( cost - new_cost);
    return savings;
}

function hideRestart()
{
    document.getElementById("income_input").style.display = "inline-block";
    document.getElementById("status_select").style.display = "inline-block";
    document.getElementById("fam_input").style.display = "inline-block";
    document.getElementById("cost_input").style.display = "inline-block";
    document.getElementById("clear").style.display = "inline-block";
    document.getElementById("submit").style.display = "inline-block";
    document.getElementById("advanced_button").style.display = "inline-block";
    document.getElementById("results_headline").style.display = "none";    
    document.getElementById("restart_button").style.display =  "none"; 
    document.getElementById("results_headline").style.display = "none";    
    document.getElementById("plan1_title").style.display = "none";
  //  document.getElementById("plan2_title").style.display = "none";
    document.getElementById("plan3_title").style.display = "none";
 //   document.getElementById("plan4_title").style.display = "none";
    results_headline.style.display = "none";
}

function toggleAdvanced() 
{
    var inCheck1 = document.getElementById("plan_input");
    var inCheck2 = document.getElementById("insurance_input");
    if (inCheck1.style.display == "inline-block") { inCheck1.style.display = "none"; inCheck2.style.display = "none"; }
    else {inCheck1.style.display = "inline-block"; inCheck2.style.display = "inline-block";}
}




