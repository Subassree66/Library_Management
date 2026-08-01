import frappe


def on_todo_validate(doc, method):
	frappe.msgprint("Hook executed!") 