import frappe

from library_management.db_events import (
    before_commit,
    after_commit,
    before_rollback,
    after_rollback,
)


def register_transaction_hooks():
    frappe.db.before_commit.add(before_commit)
    frappe.db.after_commit.add(after_commit)
    frappe.db.before_rollback.add(before_rollback)
    frappe.db.after_rollback.add(after_rollback)