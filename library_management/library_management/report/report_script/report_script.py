# Copyright (c) 2026, Faris Ansari and contributors
# For license information, please see license.txt

# import frappe
from frappe import _

import frappe

def execute(filters=None):
    columns = get_columns()
    data = get_data(filters)
    return columns, data

def get_columns():
    return [
        {"label": "Member ID", "fieldname": "name", "fieldtype": "Link", "options": "Member", "width": 120},
        {"label": "Member Name", "fieldname": "member_name", "fieldtype": "Data", "width": 150},
        {"label": "Email", "fieldname": "email", "fieldtype": "Data", "width": 180},
        {"label": "Phone", "fieldname": "phone", "fieldtype": "Phone", "width": 120},
        {"label": "Membership Type", "fieldname": "membership_type", "fieldtype": "Select", "width": 130},
        {"label": "Status", "fieldname": "status", "fieldtype": "Select", "width": 100}
    ]

def get_data(filters):
    conditions = {}
    
    # Check if a status filter is selected by the user
    if filters.get("status"):
        conditions["status"] = filters.get("status")

    # Fetch records matching conditions
    data = frappe.get_all(
        "Member",
        fields=["name", "member_name", "email", "phone", "membership_type", "status"],
        filters=conditions
    )
    
    return data
