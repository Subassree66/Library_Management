# Copyright (c) 2026, Faris Ansari and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class BookIssue(Document):
	pass
import frappe
from frappe.model.document import Document

class BookIssue(Document):
    def on_update(self):
        if self.returned:
            frappe.publish_realtime(
                event='book_available',
                message={
                    'book': self.book,
                    'member': self.member
                }
                # no 'user' key = broadcasts to everyone currently connected
            )
