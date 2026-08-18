import frappe


def execute():
    frappe.db.set_value(
        "Book",
        "BOOK-001",
        "status",
        "Issued"
    )

    frappe.log_error(
        "PATCH EXECUTE SUCCESSFULLY",
        "PATCH TEST"
    )   