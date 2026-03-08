# Deployment Guide: MGD Autodealer to cPanel

This guide will walk you through the steps to move your car dealer website to cPanel with a live MySQL database.

## 1. Create the MySQL Database
1. Log in to your **cPanel**.
2. Go to **MySQL® Databases**.
3. Create a new database named `mgd_autodealer` (Note: cPanel might prefix it, e.g., `user_mgd_autodealer`).
4. Create a new **Database User** and **Password**.
5. Add the User to the Database with **All Privileges**.

## 2. Import the Database Schema
1. Go to **phpMyAdmin** in cPanel.
2. Select your new database.
3. Click the **Import** tab.
4. Upload the `database.sql` file from your project root and click **Go**.

## 3. Update API Credentials
1. In your local files, open `api/db.php`.
2. Update the `$db_name`, `$username`, and `$password` with your cPanel database details:
   ```php
   $host = 'localhost';
   $db_name = 'user_mgd_autodealer';
   $username = 'user_admin';
   $password = 'your_password';
   ```

## 4. Build the Frontend
1. On your local machine, run:
   ```bash
   npm run build
   ```
2. This will create a `dist` folder.

## 5. Upload Files to cPanel
1. Open **File Manager** in cPanel.
2. Navigate to `public_html`.
3. Upload all contents of the `dist` folder directly to `public_html`.
4. Upload the entire `api` folder to `public_html`.
5. Upload the `.htaccess` file (see below) to `public_html`.

## 6. Access Your Site
Visit your domain to see the live site. The admin panel will be at `yourdomain.com/admin`.
- **Username**: admin
- **Password**: password
