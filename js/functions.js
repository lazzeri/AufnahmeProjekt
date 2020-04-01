function test()
{

	document.getElementById("errorMsg").innerHTML = "";

	if(validateEmail(document.getElementById("email").value))
	{
		console.log("Passed through");
		succesfullReg();
        document.getElementById("inputForm").reset();
	}
	else
	{
		document.getElementById("errorMsg").innerHTML = "Wrong email input!";
		document.getElementById("inputForm").reset();
	}

}

function succesfullReg()
{

var email = document.getElementById("email").value;
var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var gender;

//Could also do an "or" here and use its name
if(document.getElementById('male').checked) 
{
    gender = "male";
}
else if(document.getElementById('female').checked)
{
  gender = "female";
}
else if(document.getElementById('other').checked)
{
  gender = "other";
}
else
    gender = "";

var output = '{ "sheet1": {"emails":"' + email + '", "firstNames":"' + fname +'", "lastNames":"' + lname +'", "genders":"' + gender +'"}}';


$.ajax({
    type: "POST",
    url: "https://cors-anywhere.herokuapp.com/https://v2-api.sheety.co/6c7b0324ad2225e4125c76a632e4ebdd/aufnahmeProjekt/sheet1",
    data: output,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data){console.log("Success:" + JSON.stringify(data));},
    failure: function(errMsg) {
        console.log("Error: " + errMsg);
    }
});

}



function validateEmail(email) 
{
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}





