import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import styles from "../dashboard/dashboard.module.css"; 
import Sidebar from "../../components/sidebar/Sidebar";

const Dashboard: React.FC = () => {
  return (
    <Box className={styles.dashboardContainer}>
      <Typography variant="h4" className={styles.dashboardTitle} gutterBottom>
        Painel de indicadores
      </Typography>
      <div className={styles.sidebarWrapper}>
        <Sidebar />
      </div>
      <Box className={styles.dashboardGrid}>
        {/* Card 1 */}
        <Paper elevation={3} className={styles.dashboardCard}>
          <Typography variant="h6" className={styles.cardTitle}>
            Demandas de Hoje
          </Typography>
          <Typography variant="body2" className={styles.cardText}>
            (Quantidade de demandas - API)
          </Typography>
        </Paper>

        {/* Card 2 */}
        <Paper elevation={3} className={styles.dashboardCard}>
          <Typography variant="h6" className={styles.cardTitle}>
            Demandas este Mês
          </Typography>
          <Typography variant="body2" className={styles.cardText}>
            (Quantidade de demandas - API)
          </Typography>
        </Paper>

        {/* Card 3 */}
        <Paper elevation={3} className={styles.dashboardCard}>
          <Typography variant="h6" className={styles.cardTitle}>
            Respondida (concluída)
          </Typography>
          <Typography variant="body2" className={styles.cardText}>
            (Quantidade de demandas - API)
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
