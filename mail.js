$(document).on("click", ".mail", function(e) {
    bootbox.confirm("Are you sure you want to send an email?", function(result) {
        if (result) {
            bootbox.dialog({
                message: "Web mail or client",
                buttons: {
                    success: {
                        label: "Default Mail Client",
                        className: "btn-success",
                        callback: function() {
                            var email = 'ess.chin@gmail.com';
                            var mailto_link = 'mailto//:' + email;
                            win = window.open(mailto_link, 'emailWindow');
                            if (win && win.open && !win.closed) win.close();
                        }
                    },
                    danger: {
                        label: "Web Mail Form",
                        className: "btn-danger",
                        callback: function() {

                            bootbox.dialog({
                                title: "You are sending a message to Stanley.",
                                message: '<div class="row">  ' +
                                '<div class="col-md-12"> ' +
                                '<form name ="gform" id="gform" enctype="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSf4hSYBd3o3MCEIA-jq1jl4RWqMULQQbwvVLqXR3wYWmHimow/formResponse" target="hidden_iframe" onsubmit="submitted=true" class="form-horizontal"> ' +
                                '<div class="form-group"> ' +
                                '<label class="col-md-4 control-label" for="name">Name</label> ' +
                                '<div class="col-md-4"> ' +
                                '<input id="entry.1378387711" name="entry.1378387711" type="text" placeholder="Your name" class="form-control input-md"> </div>' +
                                '</div> ' +
                                '<div class="form-group"> ' +
                                '<label class="col-md-4 control-label" for="name">Email</label> ' +
                                '<div class="col-md-4"> ' +
                                '<input id="entry.1870177209" name="entry.1870177209" type="text" placeholder="Email" class="form-control input-md"> </div>' +
                                '</div> ' +
                                '<div class="form-group"> ' +
                                '<label class="col-md-4 control-label" for="name">Subject</label> ' +
                                '<div class="col-md-4"> ' +
                                '<input id="entry.1070703679" name="entry.1070703679" type="text" placeholder="Subject" class="form-control input-md"> </div>' +
                                '</div> ' +
                                '<div class="form-group"> ' +
                                '<label class="col-md-4 control-label" for="name">Body</label> ' +
                                '<div class="col-md-4"> ' +
                                '<textarea id="entry.1921527425" rows="5" name="entry.1921527425" type="text" placeholder="Body" class="form-control input-md"></textarea> </div>' +
                                '</div> ' +
                                '</form> </div>  </div>' + 
                                '<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) {}"></iframe>',
                                https://docs.google.com/forms/d/e/1FAIpQLSf4hSYBd3o3MCEIA-jq1jl4RWqMULQQbwvVLqXR3wYWmHimow/viewform?entry.1378387711=ab&entry.1870177209=cd&entry.1070703679=ef&entry.1921527425=gh
                                buttons: {
                                    success: {
                                        label: "Send",
                                        className: "btn-success",
                                        callback: function() {
                                            $('#gform').submit();
                                            $('#gform').on('submit', function(e) {
                                                $('#gform *').fadeOut(2000);
                                                $('#gform').prepend('Your submission has been processed...');
                                            });
                                        }
                                    }
                                }
                            });                        
                        }
                    }
                }
            });

        }
        else {
            return;
        }
    });
});
