import frappe

def modify_context(context):
    # Pass variables directly to your HTML template
    context.custom_title = "Welcome to Library Portal"
    context.custom_message = "Search and borrow books easily."