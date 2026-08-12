import frappe


def before_tests():
	frappe.set_user("Administrator")

	author_name = frappe.db.exists("Author", {"author_name": "Test Author"})
	if not author_name:
		author = frappe.get_doc({
			"doctype": "Author",
			"author_name": "Test Author",
			"email": "test.author@example.com",
		}).insert(ignore_permissions=True)
		author_name = author.name

	if not frappe.db.exists("Book", {"book_title": "Test Book 1"}):
		frappe.get_doc({
			"doctype": "Book",
			"book_title": "Test Book 1",
			"author": author_name,
			"status": "Available",
		}).insert(ignore_permissions=True)

	if not frappe.db.exists("Member", {"member_name": "Test Member 1"}):
		frappe.get_doc({
			"doctype": "Member",
			"member_name": "Test Member 1",
			"email": "test.member@example.com",
			"join_date": frappe.utils.nowdate(),
		}).insert(ignore_permissions=True)

	frappe.db.commit()