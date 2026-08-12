import frappe


@frappe.whitelist(allow_guest=True)
def library_signup(name, email, phone, membership_type):

    doc = frappe.get_doc({
        "doctype": "Library Signup Request",
        "full_name": name,
        "email_address": email,
        "phone_number": phone,
        "membership_type": membership_type,
        "status": "Pending"
    })

    doc.insert(ignore_permissions=True)

    return {
        "message": "Signup request created successfully",
        "name": doc.name
    }
import frappe

@frappe.whitelist()
def test_mail():
    print("Function called")

    frappe.sendmail(
        recipients=["yourmail@gmail.com"],
        subject="Test Email",
        message="This is a test email."
    )

    print("Mail queued")