import frappe


def braintree_success_page(data):
    print("Braintree payment successful!")
    print("Reference Doctype:", data.reference_doctype)
    print("Reference Docname:", data.reference_docname)

    return "/thank-you"


@frappe.whitelist()
def test_braintree_success(reference_doctype, reference_docname):
    data = frappe._dict({
        "reference_doctype": reference_doctype,
        "reference_docname": reference_docname
    })

    return braintree_success_page(data) 