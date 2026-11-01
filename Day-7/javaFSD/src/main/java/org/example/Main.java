package org.example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class Main {
    public static void main(String[] args) throws Exception {
        // 1. Fixed typo: "Driver" instead of "Drive"
        Class.forName("com.mysql.cj.jdbc.Driver");

        // 2. Use "root" unless you created a custom user named "Host"
        String username = "root";
        String password = "@Ashok2004";

        // 3. Fixed URL format: added "//" and specified your database name ("my_first_db")
        String url = "jdbc:mysql://localhost:3306/my_first_db";

        Connection con = DriverManager.getConnection(url, username, password);
        Statement p = con.createStatement();

        // 4. Run the query to create the table
        p.execute("CREATE TABLE IF NOT EXISTS empDetails (id INT, name VARCHAR(20), phone VARCHAR(10))");

        System.out.println("Table Created Successfully!");
        con.close();
    }
}