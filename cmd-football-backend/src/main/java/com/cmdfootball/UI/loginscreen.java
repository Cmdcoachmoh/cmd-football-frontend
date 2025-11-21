package com.cmdfootball.ui;

import com.cmdfootball.ui.DashboardUI;

import javax.swing.*;
import java.awt.*;

public class loginscreen extends JFrame {

    private JTextField usernameField;
    private JPasswordField passwordField;
    private JLabel statusLabel;

    public loginscreen() {
        setTitle("CMD Football Login");
        setSize(400, 250);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new GridBagLayout());

        GridBagConstraints gbc = new GridBagConstraints();
        gbc.insets = new Insets(10, 10, 10, 10);
        gbc.fill = GridBagConstraints.HORIZONTAL;

        // Username Label + Field
        gbc.gridx = 0; gbc.gridy = 0;
        add(new JLabel("Username:"), gbc);

        gbc.gridx = 1;
        usernameField = new JTextField(20);
        add(usernameField, gbc);

        // Password Label + Field
        gbc.gridx = 0; gbc.gridy = 1;
        add(new JLabel("Password:"), gbc);

        gbc.gridx = 1;
        passwordField = new JPasswordField(20);
        add(passwordField, gbc);

        // Status Label
        gbc.gridx = 0; gbc.gridy = 2; gbc.gridwidth = 2;
        statusLabel = new JLabel(" ");
        statusLabel.setForeground(Color.RED);
        add(statusLabel, gbc);

        // Login Button
        gbc.gridy = 3;
        JButton loginButton = new JButton("Login");
        loginButton.setFont(new Font("SansSerif", Font.BOLD, 14));
        loginButton.addActionListener(e -> handleLogin());
        add(loginButton, gbc);

        setVisible(true);
    }

    private void handleLogin() {
        String username = usernameField.getText().trim();
        String password = new String(passwordField.getPassword()).trim();

        if (username.isEmpty() || password.isEmpty()) {
            statusLabel.setText("⚠️ Please enter both username and password.");
            return;
        }

        boolean success = LoginManager.authenticate(username, password);
        if (success) {
            statusLabel.setForeground(Color.GREEN);
            statusLabel.setText("✅ Login successful. Welcome, " + username + "!");
            dispose();
            new DashboardUI(username);
        } else {
            statusLabel.setForeground(Color.RED);
            statusLabel.setText("❌ Invalid credentials. Please try again.");
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(loginscreen::new);
    }
}