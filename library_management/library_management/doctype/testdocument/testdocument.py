# Copyright (c) 2026, Faris Ansari and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class TestDocument(Document):
	from typing import TYPE_CHECKING
	if TYPE_CHECKING:
		from frappe.types import DF
		description: DF.Text | None
	def before_save(self):
		if not self.description:
			self.description= "Default Description"
