package com.cmdfootball.ui;

import com.cmdfootball.model.Player;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.util.List;

public class RegistryViewer extends JFrame {

    private JTable playerTable;
    private DefaultTableModel tableModel;

    public RegistryViewer(List<Player> players) {
        setTitle("Player Registry");
        setSize(800, 400);
        setDefaultCloseOperation(DISPOSE_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout());

        // Table setup
        String[] columns = {"ID", "Name", "Position", "Age", "Effort Score", "Badges"};
        tableModel = new DefaultTableModel(columns, 0);
        playerTable = new JTable(tableModel);
        playerTable.setFillsViewportHeight(true);

        JScrollPane scrollPane = new JScrollPane(playerTable);
        add(scrollPane, BorderLayout.CENTER);

        // Load data
        if (players != null) {
            loadPlayers(players);
        }

        setVisible(true);
    }

    private void loadPlayers(List<Player> players) {
        for (Player p : players) {
            tableModel.addRow(new Object[]{
                p.getId(),
                p.getName(),
                p.getPosition(),
                p.getAge(),
                String.format("%.2f", p.getEffortScore()),
                String.join(" | ", p.getBadges())
            });
        }
    }

    public static void main(String[] args) {
        // Mock data for testing
        List<Player> mockPlayers = List.of(
            new Player(1L, "Amir Salah", "Midfielder", 14, 72.5, List.of("Pro")),
            new Player(2L, "Lina K.", "Defender", 13, 85.0, List.of("Elite", "Captain")),
            new Player(3L, "Jayden M.", "Forward", 12, 60.0, List.of("Rising"))
        );

        SwingUtilities.invokeLater(() -> new RegistryViewer(mockPlayers));
    }
}