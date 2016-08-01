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
                                '<form class="form-horizontal"> ' +
                                '<div class="form-group"> ' +
                                '<label class="col-md-4 control-label" for="name">Name</label> ' +
                                '<div class="col-md-4"> ' +
                                '<input id="name" name="name" type="text" placeholder="Your name" class="form-control input-md"> </div>' +
                                '</div> ' +
                                '<div class="form-group"> ' +
                                '<label class="col-md-4 control-label" for="name">Subject</label> ' +
                                '<div class="col-md-4"> ' +
                                '<input id="subject" name="subject" type="text" placeholder="Subject" class="form-control input-md"> </div>' +
                                '</div> ' +
                                '<div class="form-group"> ' +
                                '<label class="col-md-4 control-label" for="name">Body</label> ' +
                                '<div class="col-md-4"> ' +
                                '<textarea id="body" rows="5" name="body" type="text" placeholder="Body" class="form-control input-md"></textarea> </div>' +
                                '</div> ' +
                                '</form> </div>  </div>',
                                buttons: {
                                    success: {
                                        label: "Send",
                                        className: "btn-success",
                                        callback: function () {
                                            var email = 'ess.chin@gmail.com';
                                            var name = $('#name').val();
                                            var subject = $('#subject').val();
                                            var body_message = $('#body').val();
                                            var mailto_link = 'mailto://' + email + '?subject=' + subject + '&body=' + body_message;
                                            win = window.open(mailto_link, 'emailWindow');
                                            if (win && win.open && !win.closed) win.close();

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