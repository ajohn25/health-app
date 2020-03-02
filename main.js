
function clearInputs()
{
    document.getElementById("text_income_input").value = "Enter Your Income (in $)"
    document.getElementById("statii").value = "Select Your Tax Status"
    document.getElementById("provs").value = "Select Your Insurance Provider"
    document.getElementById("plans").value = "Select Your Insurance Plan"
    document.getElementById("text_fam_input").value = "How many family members do you have?"
    
}

function Advb(){
    var inCheck = document.getElementById("depi");
    if (inCheck.style.display === "inline-block") inCheck.style.display = "none";
    else inCheck.style.display = "inline-block";
}
