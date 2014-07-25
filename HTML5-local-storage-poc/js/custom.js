$(document).ready(function(){
    var $j = jQuery.noConflict();
    // declaring an object emp to store the data for localStorage
    var Emp = {
        name: "",
        occupation: ""
    };

    // save data in the localStorage object
    function savedata(){
        var localStorageCount = localStorage.length; // get the length of the local storage data.
        Emp.name = $j(".inputFields")[0].value;
        Emp.occupation = $j(".inputFields")[1].value;
        // now setting up the data into local storage after converting it into JSON
        localStorage.setItem("Emp_"+localStorageCount, JSON.stringify(Emp));

    }

    // Load data into the table and display it on browser
    function loaddata(){
        var dataCount = localStorage.length; // get the length of the local storage data.
        var count = 1;
        if(dataCount>0){
            for(var i=0; i<dataCount; i++){
                var empData = JSON.parse(localStorage.getItem(localStorage.key(i)));
                $j('.tableCustom').append('<tr><td>'+ count +'</td><td>'+ empData.name +'</td><td>'+ empData.occupation+ '</td></tr>');
                count++;
            }
        }
    }

    // on submit of form validating for empty filed else calling the save data function
    $j("#userForm").submit(function(){
        if($j('#name').val()=="" || $j('#designation').val()==""){
            alert("Please fill both fields!");
            return false;
        }else {
            savedata();
        }
    });

    // on window load calling the load data function to load the previous records
    window.onload = function(){
        if(typeof(localStorage) !== 'undefined'){
          loaddata();
        }else {
            alert("Sorry! No web storage support.");
        }
    }

    // this function will clear the local storage.
    $j("#clearData").on("click",function(){
        localStorage.clear();
        window.location.reload();
    });
});