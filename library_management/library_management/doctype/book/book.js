// Copyright (c) 2026, Faris Ansari and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Book", {
// 	refresh(frm) {

// 	},
// });
// frappe.ui.form.on('Book', {
//     refresh(frm) {
//         frm.add_custom_button('Mark as Available', function() {
//             frm.set_value('status', 'Available');

//             frappe.msgprint({
//                 title: 'Book Status',
//                 message: 'Book marked as Available!',
//                 indicator: 'green'
//             });

//             frm.save();
//         });
//     }
// });
// frappe.ui.form.on('Book Review', {
//     rating(frm, cdt, cdn) {
//         let row = frappe.get_doc(cdt, cdn);

//         frappe.msgprint(
//             'Rating entered: ' + row.rating
//         );
//     }
// });
// frappe.ui.form.on('Book', {
//     refresh(frm) {
//         if (frappe.user_roles.includes('Administrator')) {
//             frm.enable_save();
//         } else {
//             frm.disable_save();
//         }
//     }
// });
// frappe.ui.form.on('Book', {
//     refresh(frm) {
//         frm.add_custom_button('Send Email', () => {
//             frm.email_doc('Hello, this is regarding your book.');
//         });
//         frm.change_custom_button_type(
//             'Send Email',
//             null,
//             'danger'
//         );
//     }
// });
// frappe.ui.form.on('Book', {
//     refresh(frm) {
//         frappe.show_alert('Refresh event called');

//         frm.add_custom_button('Reload', () => {
//             frappe.show_alert('Reload button clicked');
//             frm.reload_doc();
//         });
//     }
// });
// frappe.ui.form.on('Book', {
//     refresh(frm) {
//         frm.add_custom_button('Change Status', () => {

//             frm.doc.status = 'Issued';

//             frm.refresh_field('status');

//         });
//     }
// });
// frappe.ui.form.on('Book', {
//     refresh(frm) {
//         frm.add_custom_button('Check Changes', () => {
//             if (frm.is_dirty()) {
//                 frappe.show_alert('Please save the form');
//             } else {
//                 frappe.show_alert('No unsaved changes');
//             }
//         });
//     }
// });
// frappe.ui.form.on('Book', {
//     refresh(frm) {
//         frm.add_custom_button('Mark Dirty', () => {

//             frm.doc.status = 'Issued';

//             frm.dirty();

//             frappe.show_alert('Form marked as dirty');
//         });
//     }
// });
// frappe.ui.form.on('Book', {
//     refresh(frm) {

//         if (frm.is_new()) {
//             frappe.show_alert('This is a new Book');
//         } else {
//             frappe.show_alert('This Book is already saved');
//         }

//     }
// });
// frappe.ui.form.on('Book', {
//     refresh(frm) {

//         frm.set_intro(
//             'Please check the Book details before saving.',
//             'blue'
//         );

//     }
// });
// frappe.ui.form.on('Book', {
//     refresh(frm) {
//         frappe.msgprint('Book Form Loaded!');
//     }
// });
// frappe.ui.form.on('Book', {
//     refresh(frm) {
//         frm.add_custom_button('Check Selected', function() {
//             let selected = frm.get_selected();

//             if (selected.reviews && selected.reviews.length) {
//                 frappe.msgprint(selected.reviews.join("<br>"));
//             } else {
//                 frappe.msgprint("No rows selected");
//             }
//         });
//     }
// });
// frappe.ui.form.on("Book", {
//     onload(frm) {
//         frm.ignore_doctypes_on_cancel_all = ["Book Issue"];
//     }
// });
// frappe.ui.form.on("Book", {
//     refresh(frm) {

//         if (frm.is_new()) {
//             frm.add_custom_button("My Button", function() {
//                 frappe.msgprint("This is a new Book!");
//             });
//         }

//     }
// });
// frappe.ui.form.on("Book", {
//     refresh(frm) {

//         let wrapper = $('<div style="margin: 20px 0; padding: 50px;"></div>');
//         frm.$wrapper.append(wrapper);

//         frappe.ui.form.make_control({
//             parent: wrapper,
//             df: {
//                 label: "Due Date",
//                 fieldname: "due_date",
//                 fieldtype: "Date"
//             },
//             render_input: true
//         });

//     }
// });
// frappe.ui.form.on("Book", {
//     refresh(frm) {
//         frm.set_df_property("author", "formatter", function(value) {
//             if (value) {
//                 return "📚 " + value;
//             }

//             return value;
//         });
//     }
// });

// let d = new frappe.ui.Dialog({
//     title: "Book Details",
//     fields: [
//         {
//             label: "Book Name",
//             fieldname: "book_name",
//             fieldtype: "Data"
//         },
//         {
//             label: "Author",
//             fieldname: "author",
//             fieldtype: "Data"
//         }
//     ],
//     size: 'large',
//     primary_action_label: "Save",
//     primary_action(values) {
//         console.log(values);
//         frappe.msgprint(`Book Name: ${values.book_name}, Author: ${values.author}`);

//         d.hide();
//     }
// });

// d.show();
// frappe.ui.form.on("Book", {
//     refresh(frm) {

//         frm.add_custom_button("Test Message", () => {

//             frappe.msgprint("Hello from Book!");

//         });

//     }
// });


// frappe.ui.form.on("Book", {
//     refresh(frm) {

//         frm.add_custom_button("Test Message1", () => {

//             frappe.msgprint({
//                 title: "Book Notification",
//                 message: "This is a message about the Book.",
//                 indicator: "green"
//             });

//         });

//     }
// });


// frappe.ui.form.on("Book", {
//     refresh(frm) {

//         frm.add_custom_button("Test Message", () => {

//             frappe.msgprint({
//                 title: "Book Notification",
//                 message: "Do you want to proceed?",
//                 indicator: "orange",

//                 primary_action: {
//                     label: "Proceed",

//                     action() {
//                         frappe.msgprint("You clicked Proceed!");
//                     }
//                 }
//             });

//         });

//     }
// });

// my_book_action = function () {
//     frappe.msgprint("Client action executed!");
// };

// frappe.ui.form.on("Book", {
//     refresh(frm) {

//         frm.add_custom_button("Test Client Action", () => {

//             frappe.msgprint({
//                 title: "Book Notification",
//                 message: "Click Proceed",
//                 indicator: "orange",

//                 primary_action: {
//                     label: "Proceed",
//                     client_action: "my_book_action"
//                 }
//             });

//         });

//     }
// });

// frappe.ui.form.on("Book", {
//     refresh(frm) {

//         frm.add_custom_button("Test Server Action", () => {

//             frappe.msgprint({
//                 title: "Book Notification",
//                 message: "Click Proceed to call Python",
//                 indicator: "orange",

//                 primary_action: {
//                     label: "Proceed",
//                     server_action: "library_management.api.book_action"
//                 }
//             });

//         });

//     }
// });


// frappe.ui.form.on("Book", {
//     refresh(frm) {

//         frm.add_custom_button("Test Server Action", () => {

//             frappe.msgprint({
//                 title: "Server Test",
//                 message: "Click Proceed",

//                 primary_action: {
//                     label: "Proceed",
//                     server_action: "library_management.api.book_action"
//                 }
//             });

//         });

//     }
// });


// frappe.ui.form.on("Book", {
//     refresh(frm) {

//         frm.add_custom_button("Test Error", () => {

//             frappe.throw(__("This is an Error Message"));

//         });

//     }
// });


// frappe.prompt("Book Name", (values) => {
//     console.log(values.value);
// });


// frappe.prompt(
//     "Book Name",
//     (values) => {
//         frappe.msgprint("You entered: " + values.value);
//     },
//     "Enter Book Name",
//     "Save"
// );


// frappe.prompt(
//     {
//         label: "Published Date",
//         fieldname: "date",
//         fieldtype: "Date"
//     },
//     (values) => {
//         frappe.msgprint("Date: " + values.date);
//     }
// );


// frappe.prompt(
//     [
//         {
//             label: "Book Name",
//             fieldname: "book_name",
//             fieldtype: "Data"
//         },
//         {
//             label: "Author",
//             fieldname: "author",
//             fieldtype: "Data"
//         }
//     ],
//     (values) => {
//         frappe.msgprint(
//             "Book: " + values.book_name +
//             "<br>Author: " + values.author
//         );
//     }
// );  


// frappe.confirm(
//     "Are you sure you want to delete this book?",

//     () => {
//         frappe.msgprint("Book deleted!");
//     },

//     () => {
//         frappe.msgprint("Deletion cancelled.");
//     }
// );


// frappe.warn(
//     "Unsaved Changes",
//     "You have unsaved changes on this page.",
//     () => {
//         frappe.msgprint("Continuing...");
//     },
//     "Continue",
//     false
// );

// frappe.db.set_value('Book', 'BOOK-010', 'status', 'Available')
// .then(r => {
//  let doc = r;
//  console.log(doc);
// })

// frappe.db.set_value('Book', 'BOOK-010', {
//  status: 'Issued',
//  isbn: '978-3-16-148410-0'
// }).then(r => {
//  let doc = r.message;
//  console.log(doc);
// })

// frappe.db.insert({
//     doctype: "Book",
//     book_title: "Python Basics",
//     author: "AUTHOR-001",
//     category: "Programming",
//     status: "Available"
// }).then(doc => {
//     console.log(doc);
// });

// frappe.db.count("Book")
//     .then(count => {
//         console.log(count);
//     });

// frappe.db.count("Book", {
//     filters: {
//         status: "Available"
//     }
// }).then(count => {
//     console.log("Available Books:", count);
// });

// frappe.db.delete_doc('Book', 'Book-012')

// frappe.db.exists('Book', 'Book-012')
//  .then(exists => {
//  console.log(exists) // true
//  })

let d = new frappe.ui.Dialog({
    title: "Create Task",
    fields: [
        {
            label: "Task Subject",
            fieldname: "task_subject",
            fieldtype: "Data",
            reqd: 1
        }
    ],
    primary_action_label: "Create Task",

    primary_action(values) {
        frappe.call({
            method: "library_management.api.create_task",
            args: {
                task_subject: values.task_subject
            },
            callback: function(r) {
                d.hide();

                frappe.msgprint({
                    title: "Success",
                    message: `Task ${r.message} created successfully!`,
                    indicator: "green"
                });
            }
        });
    }
});

d.show();