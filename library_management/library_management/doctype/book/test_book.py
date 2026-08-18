import frappe
from frappe.tests import IntegrationTestCase


class IntegrationTestBook(IntegrationTestCase):

    def test_successful_transaction(self):
        frappe.db.set_value(
            "Book",
            "BOOK-001",
            "status",
            "Issued"
        )

        status = frappe.db.get_value(
            "Book",
            "BOOK-001",
            "status"
        )

        print("STATUS INSIDE TEST:", status)

        self.assertEqual(status, "Issued")


    def test_failed_transaction(self):
        frappe.db.set_value(
            "Book",
            "BOOK-001",
            "status",
            "Issued"
        )

        status = frappe.db.get_value(
            "Book",
            "BOOK-001",
            "status"
        )

        print("STATUS BEFORE FAILURE:", status)

        raise Exception("Testing transaction rollback")