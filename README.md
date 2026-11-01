# Invoice Application

## Overview
This project is a simple HTML and JavaScript-based invoice application. Users can add items, specify quantities and unit prices, and view the total cost for each item as well as the overall invoice total. This project demonstrates basic DOM manipulation and calculations with JavaScript.

## Features

1. **Dynamic Item Management**
   - Add new items to the invoice.
   - Set quantities and unit prices for each item.
   - Automatically calculate the total for each item based on quantity and unit price.

2. **Invoice Calculation**
   - Update the total cost of the invoice automatically whenever item quantities or prices are adjusted.
   - Sum all item totals to display the final invoice amount.

## Code Structure

### `index.html`
- The HTML file includes the structure of the invoice table with columns for item name, quantity, unit price, and item total.
- The table includes:
  - A **"Total Invoice"** row at the bottom that calculates and displays the overall invoice total.
  - A **"Add Item"** button to insert new rows into the table for additional items.

### `invoice.js`
- This JavaScript file handles all interactions and calculations within the invoice:
  - **`updateItemTotal(row)`**: Calculates the total price for each row by multiplying quantity and unit price, and updates the row’s total.
  - **`updateInvoiceTotal()`**: Sums up the totals of each row to update the overall invoice total.
  - **`addNewItem()`**: Adds a new row to the table for an additional item with quantity and price fields.

## How to Use

1. **Open the Application**: Open `index.html` in a browser to load the invoice interface.
2. **Add Items**:
   - Click on the "Add Item" button to add a new item row.
   - Each row has fields to specify quantity and unit price.
3. **Calculate Totals**:
   - Enter a quantity and unit price, and the total for each item will be calculated.
   - The overall invoice total is updated as quantities or unit prices are changed.

## Possible Extensions
- **Delete Button**: Add a delete option for each item row to remove items from the invoice.
- **Validation**: Implement form validation for quantity and price inputs to prevent negative or invalid values.
- **Styling**: Enhance the appearance with additional styling to make the invoice look more professional.

