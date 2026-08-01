// Copyright (c) 2026, Faris Ansari and contributors
// For license information, please see license.txt


frappe.query_reports["Report_Script"] = {
    "filters": [
        {
            "fieldname": "status",
            "label": __("Status"),
            "fieldtype": "Select",
            "options": "\nActive\nInactive\nExpired",
            "default": "Active"
        }
    ]
};
