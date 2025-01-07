import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import styles from '../dashboard/dashboard.module.css'; // Importando o módulo de CSS

const Dashboard: React.FC = () => {
  return (
    <Box className={styles.dashboardContainer}>
      <Typography variant="h4" className={styles.dashboardTitle} gutterBottom>
        Dashboard Test Page
      </Typography>

      <Box className={styles.dashboardGrid}>
        {/* Card 1 */}
        <Paper elevation={3} className={styles.dashboardCard}>
          <Typography variant="h6" className={styles.cardTitle}>Card 1</Typography>
          <Typography variant="body2" className={styles.cardText}>
            This is the first card in the dashboard.
          </Typography>
          <Button className={styles.button} variant="contained" color="primary">
            Action
          </Button>
        </Paper>

        {/* Card 2 */}
        <Paper elevation={3} className={styles.dashboardCard}>
          <Typography variant="h6" className={styles.cardTitle}>Card 2</Typography>
          <Typography variant="body2" className={styles.cardText}>
            This is the second card in the dashboard.
          </Typography>
          <Button className={`${styles.button} ${styles.buttonSecondary}`} variant="contained" color="secondary">
            Action
          </Button>
        </Paper>

        {/* Card 3 */}
        <Paper elevation={3} className={styles.dashboardCard}>
          <Typography variant="h6" className={styles.cardTitle}>Card 3</Typography>
          <Typography variant="body2" className={styles.cardText}>
            This is the third card in the dashboard.
          </Typography>
          <Button className={styles.button} variant="outlined" color="primary">
            Action
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
