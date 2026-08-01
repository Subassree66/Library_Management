# Copyright (c) 2026, Faris Ansari and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import getdate
from datetime import date


class EmployeMaster(Document):
    def validate(self):
        if self.salary is not None and self.salary < 0:
            frappe.throw("Salary cannot be negative")
        if len(str(self.phone_number))!=10:
            frappe.throw("Phone number must contain 10 digits")
    def before_save(self):
        if self.joining_date:
            joining=getdate(self.joining_date)
            today_date=date.today()
            experience=today_date.year-joining.year
            self.current_experience=experience