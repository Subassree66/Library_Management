frappe.ready(function () {

    console.log("Signup JS loaded");

    $("#signup_btn").click(function(e){

        console.log("Submit clicked");

        e.preventDefault();

        frappe.call({
            method: "library_management.api.custom_logic.library_signup",
            args: {
                name: $("#full_name").val(),
                email: $("#email_address").val(),
                phone: $("#phone_number").val(),
                membership_type: $("#membership_type").val()
            },

            callback: function(r){

                console.log("API Response:", r);

                if(r.message){
                    $("#signup_message").html(
                        "Signup submitted successfully"
                    );
                }

            },

            error: function(err){
                console.log("API Error:", err);
            }
        });

    });

});