$("#sendMail").on("click", function(){
    var email=$("#email").val().trim();
    var name=$("#name").val().trim();
    var phone=$("#phone").val().trim();
    var message=$("#message").val().trim();
    
    if(email==""){
        $("#errorMessage").text("Enter email");
        return false;
    } else if(name==""){
        $("#errorMessage").text("Enter name");
        return false;
    } else if(phone==""){
        $("#errorMessage").text("Enter phone");
        return false;
    } else if(message.length<5){
        $("#errorMessage").text("Enter message more than 5 symbols");
        return false;
    }

    $("#errorMessage").text("");

    $.ajax({
        url:'ajax/mail.php',
        type:'POST',
        cache:false,
        data:{'email':email, 'name':name, 'phone':phone, 'message':message},
        dataType:'html',
        beforeSend:function(){
            $("#sendMail").prop("disabled",true);
        },
        success: function(data){
            if(!data)
                alert("mistakes occured");
            else
                $("#mailForm").trigger("reset");
            $("#sendMail").prop("disabled",false);
        }

    })
});