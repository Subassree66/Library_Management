# def context_404(context):
#     print("========== 404 Hook Executed ==========")

#     context.custom_title = "Library Management System"
#     context.custom_message = "Oops! The page you requested doesn't exist."
# def demo_context(context):
#     print("Demo Hook Executed")
#     context.custom_message = "Hello from Hook!"
import frappe

def context_404(context):
    print("========== 404 Hook Executed ==========")

    frappe.logger().info("404 Hook Executed")

    context.custom_title = "Library Management System"

    context.custom_message = (
        "Oops! The page you requested doesn't exist."
    )

    print(context)