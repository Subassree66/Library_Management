import frappe
from frappe.utils import now


@frappe.whitelist()
def get_recent_todos_with_owner_email():
    
    # 1. Secure Fetching - frappe.get_list() respects user permissions
    todos = frappe.get_list(
        "ToDo",
        fields=["name", "description", "owner", "creation"],
        order_by="creation desc",
        limit_page_length=5,
    )

    # 2. Optimization - use frappe.db.get_value() for a single-field lookup
    for todo in todos:
        owner_email = frappe.db.get_value("User", todo.owner, "email")
        todo["owner_email"] = owner_email

    # 3. Context-aware server time
    timestamp = now()

    # 4. Response
    return {
        "timestamp": timestamp,
        "records": todos,
    }