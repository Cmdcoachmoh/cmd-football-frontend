package com.cmdfootball.ui;



import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionListener;


public class DashboardUI extends JFrame {

    public DashboardUI(String coachName) {
        setTitle("CMD Football Dashboard");
        setSize(600, 400);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout());

        // Header
        JLabel header = new JLabel("Welcome, Coach " + coachName + "!", SwingConstants.CENTER);
        header.setFont(new Font("Arial", Font.BOLD, 20));
        header.setBorder(BorderFactory.createEmptyBorder(20, 0, 10, 0));
        add(header, BorderLayout.NORTH);

        // Main Buttons Panel
        JPanel buttonPanel = new JPanel(new GridLayout(2, 3, 15, 15));
        buttonPanel.setBorder(BorderFactory.createEmptyBorder(30, 30, 30, 30));

        buttonPanel.add(createButton("🧍 Players", e -> openPlayerManager()));
        buttonPanel.add(createButton("👥 Teams", e -> openTeamManager()));
        buttonPanel.add(createButton("📊 Reports", e -> openReports()));
        buttonPanel.add(createButton("🏅 Badges", e -> openBadgeTracker()));
        buttonPanel.add(createButton("⚙️ Settings", e -> openSettings()));
        buttonPanel.add(createButton("🚪 Logout", e -> confirmLogout()));

        add(buttonPanel, BorderLayout.CENTER);

        setVisible(true);
    }

    private JButton createButton(String label, ActionListener action) {
        JButton button = new JButton(label);
        button.setFont(new Font("SansSerif", Font.PLAIN, 16));
        button.addActionListener(action);
        return button;
    }

    // Navigation methods
    private void openPlayerManager() {
        JOptionPane.showMessageDialog(this, "Opening Player Manager...");
        // new PlayerManagerUI(); // Optional: launch actual UI
    }

    private void openTeamManager() {
        JOptionPane.showMessageDialog(this, "Opening Team Manager...");
        // new TeamManagerUI();
    }

    private void openReports() {
        JOptionPane.showMessageDialog(this, "Generating Reports...");
        // new ReportViewerUI();
    }

    private void openBadgeTracker() {
        JOptionPane.showMessageDialog(this, "Launching Badge Tracker...");
        // new BadgeTrackerUI();
    }

    private void openSettings() {
        JOptionPane.showMessageDialog(this, "Opening Settings...");
        // new SettingsUI();
    }

    private void confirmLogout() {
        int choice = JOptionPane.showConfirmDialog(
            this,
            "Are you sure you want to logout?",
            "Confirm Logout",
            JOptionPane.YES_NO_OPTION
        );

        if (choice == JOptionPane.YES_OPTION) {
            dispose();
            new loginscreen(); // ✅ Make sure LoginScreen.java exists and is imported
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new DashboardUI("Mohamad"));
    }
}