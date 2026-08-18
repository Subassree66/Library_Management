import frappe


def before_commit():
    frappe.log_error(
        "BEFORE COMMIT CALLBACK EXECUTED",
        "Database Transaction Test"
    )


def after_commit():
    frappe.log_error(
        "AFTER COMMIT CALLBACK EXECUTED",
        "Database Transaction Test"
    )


def before_rollback():
    frappe.log_error(
        "BEFORE ROLLBACK CALLBACK EXECUTED",
        "Database Transaction Test"
    )


def after_rollback():
    frappe.log_error(
        "AFTER ROLLBACK CALLBACK EXECUTED",
        "Database Transaction Test"
    )