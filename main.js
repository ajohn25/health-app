
class Customer
{
    constructor(income, status, fam, cost)
    {
        this.tax = 0.04;
        this.income = income;
        this.status = status;
        this.fam = fam;
        this.cost = cost;
        this.deduction = this.calcDeduction();
   }

    calcDeduction() 
    {
        if (this.status == 2 && this.fam > 3) return 29000;
        else return 0;
    }

    calcNewCost()
    {
        var temp_cost = Math.round( (this.income - this.deduction) * this.tax );
        if (temp_cost < 0) temp_cost = 0;
        return temp_cost;
    }

    calcSavings() {return ( this.cost - this.calcNewCost() );}
}

function hideSubmit()
{
    //hiding
    document.getElementById("income_input").style.display = "none";
    document.getElementById("status_select").style.display = "none";
    document.getElementById("insurance_input").style.display = "none";
    document.getElementById("plan_input").style.display = "none";
    document.getElementById("fam_input").style.display = "none";
    document.getElementById("cost_input").style.display = "none";
    document.getElementById("clear").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("advanced_button").style.display = "none";
    //showing
    document.getElementById("results_headline").style.display = "inline-block";    
    document.getElementById("restart_button").style.display = "inline-block";    
    document.getElementById("results_headline").style.display = "inline-block";    
    document.getElementById("plan1_title").style.display = "inline-block";    
    document.getElementById("plan2_title").style.display = "inline-block";  
    document.getElementById("cost_title").style.display = "inline-block";  
    document.getElementById("old_cost").style.display = "inline-block";  
    document.getElementById("new_cost").style.display = "inline-block";  
    results_headline.style.display = "inline";
    newPage();
}

function newPage() //Go to 2nd page
{
    var income = document.getElementById("income_text").value;
    var status = document.getElementById("status_select").value;
    var fam = document.getElementById("fam_text").value;
    var cost = document.getElementById("cost_text").value;
    
    let User = new Customer(income, status, fam, cost); 

    var plan_name = "Medicare for All"
    var display_savings = User.calcSavings();

    if (User.calcSavings() < 0) //Adjust text forp lan name if needed
    { 
        plan_name = "Your plan"; 
        display_savings = -(display_savings);
        document.getElementById("savings_wrap").style.color = "purple";
    }
    //Writing text to document
    document.getElementById("savings_line").innerHTML = (plan_name + " saves you: $" + display_savings + " more");    
    document.getElementById("old_cost_line").innerHTML = ("$" + User.cost );    
    document.getElementById("new_cost_line").innerHTML = ("$" + User.calcNewCost() );
}

function hideRestart() //Go back to 1st Page
{
    //showing
    document.getElementById("income_input").style.display = "inline-block";
    document.getElementById("status_select").style.display = "inline-block";
    document.getElementById("fam_input").style.display = "inline-block";
    document.getElementById("cost_input").style.display = "inline-block";
    document.getElementById("clear").style.display = "inline-block";
    document.getElementById("submit").style.display = "inline-block";
    document.getElementById("advanced_button").style.display = "inline-block";
    //hiding
    document.getElementById("results_headline").style.display = "none";    
    document.getElementById("restart_button").style.display =  "none"; 
    document.getElementById("results_headline").style.display = "none";    
    document.getElementById("plan1_title").style.display = "none";
    document.getElementById("plan2_title").style.display = "none";
    document.getElementById("cost_title").style.display = "none";
    document.getElementById("old_cost").style.display = "none";
    document.getElementById("new_cost").style.display = "none";
    results_headline.style.display = "none";
}

function toggleAdvanced() 
{
    var inCheck1 = document.getElementById("plan_input");
    var inCheck2 = document.getElementById("insurance_input");
    if (inCheck1.style.display == "inline-block") { inCheck1.style.display = "none"; inCheck2.style.display = "none"; }
    else {inCheck1.style.display = "inline-block"; inCheck2.style.display = "inline-block";}
}

function clearInputs()
{
    document.getElementById("income_text").value = "";
    document.getElementById("status_select").value = "";
    document.getElementById("fam_text").value = "";
    document.getElementById("cost_text").value = "";

    //document.getElementById("provs").value = "";
    //document.getElementById("plans").value = "";    
}



