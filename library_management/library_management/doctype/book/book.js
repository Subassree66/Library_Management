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

//         let wrapper = $('<div style="margin: 20px 0; padding: 30px;"></div>');
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
frappe.ui.form.on("Book", {
    refresh(frm) {
        frm.set_df_property("author", "formatter", function(value) {
            if (value) {
                return "📚 " + value;
            }

            return value;
        });
    }
});