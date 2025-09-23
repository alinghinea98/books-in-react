import React from "react";
import { useTheme } from "../contexts/ThemeContext.tsx";
import { Card, Switch } from "antd";

function SettingsPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Card title="Settings" style={{ minWidth: 400 }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span>Dark Mode</span>
        <Switch checked={theme === "dark"} onChange={toggleTheme} />
      </div>
    </Card>
  );
}

export default SettingsPage;
