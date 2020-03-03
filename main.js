
function clearInputs()
{
    document.getElementById("text_income_input").value = "Enter Your Income (in $)"
    document.getElementById("statii").value = "Select Your Tax Status"
    document.getElementById("provs").value = "Select Your Insurance Provider"
    document.getElementById("plans").value = "Select Your Insurance Plan"
    document.getElementById("text_fam_input").value = "How many family members do you have?"
    
}

function hideSubmit()
{
    document.getElementById("text_income_input").style.display = "none";
    document.getElementById("status_select").style.display = "none";
    document.getElementById("providers_select").style.display = "none";
    document.getElementById("plans_select").style.display = "none";
    document.getElementById("text_fam_input").style.display = "none";
    document.getElementById("placeholder").style.display = "none";
    document.getElementById("clear").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("advanced").style.display = "none";
    document.getElementById("results_headline").style.display = "inline-block";    
    results_headline.style.display = "inline";
}

function toggleAdvanced() {
    var inCheck = document.getElementById("advanced1_input");
    if (inCheck.style.display === "inline-block") inCheck.style.display = "none";
    else inCheck.style.display = "inline-block";
}

function SelectAll(id)
{
    document.getElementById(id).focus();
    document.getElementById(id).select();
}


