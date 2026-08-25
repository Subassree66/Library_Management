// Copyright (c) 2026, Faris Ansari and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Member", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Member', {
    onload: function(frm) {
        frappe.realtime.on('book_available', (data) => {
            frappe.msgprint(`📚 The book "${data.book}" is now available!`);
        });
    }
});