import frappe
from frappe.utils import add_days


def set_due_date(doc, method=None):
	if doc.issue_date and not doc.return_date:
		doc.return_date = add_days(doc.issue_date, 14)


def mark_book_unavailable(doc, method=None):
	if doc.book:
		frappe.db.set_value("Book", doc.book, "status", "Issued")


def mark_book_available(doc, method=None):
	if doc.book:
		frappe.db.set_value("Book", doc.book, "status", "Available")
