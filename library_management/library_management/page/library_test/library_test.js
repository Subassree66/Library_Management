frappe.pages["library-test"].on_page_load = function (wrapper) {

    let page = frappe.ui.make_app_page({
        parent: wrapper,
        title: "Library Test",
        single_column: true
    });

	// page.set_title('My Page')


	// page.set_title_sub('Subtitle')

	page.set_indicator('Pending', 'orange')

	page.clear_indicator()

	page.set_primary_action("New Book", () => {
    frappe.msgprint("New Book clicked");
	});

	page.set_primary_action("New Book1", () => {
    frappe.msgprint("New Book1 clicked");
	});

	//page.clear_primary_action()

	page.set_secondary_action("Refresh", () => {
    frappe.msgprint("Refreshing books...");
	});

	page.set_secondary_action("Refresh2", () => {
    frappe.msgprint("Refreshing books...");
	});

	//page.clear_secondary_action()

    page.add_menu_item("Book Report", function () {
        frappe.msgprint("Book Report clicked");
    });

    page.add_menu_item("Member Report", function () {
        frappe.msgprint("Member Report clicked");
    });

    //page.clear_menu();

	page.add_action_item("Delete", () => {
        frappe.msgprint("Delete clicked");
    });
	page.add_action_item("Export", () => {
    frappe.msgprint("Export clicked");
	});

	//page.clear_actions_menu();

	page.add_inner_button("Update Books", () => {
        frappe.msgprint("Update Books clicked");
    });

	page.add_inner_button("Update Books2", () => {
        frappe.msgprint("Update Books2 clicked");
    });

	//page.change_inner_button_type('Update Books', null, 'warning');

	page.add_inner_button("New Book", () => {
        frappe.msgprint("New Book clicked");
    }, "Library");

    page.add_inner_button("New Member", () => {
        frappe.msgprint("New Member clicked");
    }, "Library");

	//page.change_inner_button_type('New Member', 'Library', 'danger');
};

// frappe.pages["library-test"].on_page_load = function (wrapper) {

//     let page = frappe.ui.make_app_page({
//         parent: wrapper,
//         title: "Library Test",
//         single_column: true
//     });

//     page.set_title_sub("Subtitle");

// };