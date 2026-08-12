import frappe

@frappe.whitelist(allow_guest=True)
def library_signup(full_name, email_address, phone_number=None, membership_type=None):
    doc = frappe.new_doc("Library Signup Request")
    doc.full_name = full_name
    doc.email_address = email_address
    doc.phone_number = phone_number
    doc.membership_type = membership_type

    doc.insert(ignore_permissions=True)
    frappe.db.commit()

    return "Signup Request Submitted Successfully!"