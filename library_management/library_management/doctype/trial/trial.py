# Copyright (c) 2026, Faris Ansari and contributors
# For license information, please see license.txt

# import frappe
from frappe.website.website_generator import WebsiteGenerator

class Trial(WebsiteGenerator):

    @property
    def final_price(self):
        if self.price and self.gst:
            return self.price + (self.price * self.gst / 100)
        return self.price or 0
