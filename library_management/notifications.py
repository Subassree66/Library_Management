import frappe

def get_notification_config():
    return {
        "for_doctype": {
            "Book": {"status": "Lost"}
        }
    }
