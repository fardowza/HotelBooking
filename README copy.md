
---

# 🏨 Hotel Booking System

**Created by Fabricio Braga**  
**Last Updated: March 12, 2025**

---

Welcome to the **Hotel Booking System** project! This is a **base project** where you will build a **hotel booking registration system**.

The goal is to **extend** this basic implementation by adding new **fields**, implementing **validations**, and improving the **user experience**.

---

## 🚀 Features in the Base Project

✅ A **basic booking form** with one input: `Customer Name`.  
✅ A **list section** to display registered bookings.  
✅ **Basic styling** and **separate files** for HTML, CSS, and JavaScript.  
✅ **JavaScript logic** that adds bookings to the list dynamically.  

---

## 🎯 Your Tasks: Improve the Project!  

Your mission is to **expand** and **enhance** the project by adding the following features:

### 1️⃣ **Add More Fields**
Extend the form to include these additional **booking fields**:
- **Last Name** (`text`) - Customer's last name.
- **Number of Guests** (`number`) - How many people will be staying.
- **Check-in Date** (`date`) - Date when the guest arrives.
- **Check-out Date** (`date`) - Date when the guest leaves.
- **Phone Number** (`tel`) - Contact number.
- **Special Needs** (`textarea`, optional) - Any special requests or accommodations.

---

### 2️⃣ **Implement Validations**
Ensure that:
- The **Customer Name & Last Name** fields are **required**.
- The **Number of Guests** field is **required** and must be **a positive number**.
- The **Check-in Date** is **required** and must be **today or later**.
- The **Check-out Date** is **required** and must be **after the check-in date**.
- The **Phone Number** field must follow a **valid phone format**.
- The **form submission button must be disabled** if the form is **not valid**.

---

### 3️⃣ **Improve User Experience**
- ❌ **No more `alert()` popups!**  
  ✅ Use a **modal lightbox** to show validation errors or success messages.  
  ✅ Example libraries: [SweetAlert2](https://sweetalert2.github.io/) or [Bootstrap Modal](https://getbootstrap.com/docs/5.0/components/modal/).  

- ✅ **Improve styling** to make the page more attractive.  

---

## 🛠 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/hackthegap/course-3-hotel-booking.git
   cd course-3-hotel-booking
   ```

2. Open the `index.html` file in a browser.

3. Modify the **HTML**, **CSS**, and **JavaScript** files to add new features!

---

## 🌟 Bonus Challenges (Optional)
Want to go the extra mile? Try these enhancements:
- 💾 **Save the booking list to `localStorage`**, so it persists after a page reload.
- 📅 **Prevent overlapping bookings for the same date range**.
- 🎨 **Add animations and transitions** for a better UI experience.

---

## 📜 Contribution Guidelines
1. **Fork** this repository.
2. Create a **new branch** for your features:
   ```bash
   git checkout -b feature-yourname
   ```
3. **Commit your changes** with a clear message:
   ```bash
   git commit -m "Added check-in and check-out date fields"
   ```
4. **Push to your fork** and submit a **Pull Request**.

---

## 🤝 Need Help?
If you have any questions, **open an issue** in the repository or discuss with your peers!

Happy coding! 🚀🎉
