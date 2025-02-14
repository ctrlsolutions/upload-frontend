<template>
    <div class="container">
    <!-- Sidebar -->
      <nav class="sidebar">
        <div class="sidebar-top-group">
            <router-link to="/" class="nav-link">
                <img src="@/assets/navbar/logo.png" alt="logo" class="icon" />
            </router-link>
        </div>
        <div class="sidebar-mid-group">
            <router-link to="/" class="nav-link">
                <img src="@/assets/navbar/dashboard.png" alt="dashboard" class="icon" />
            </router-link>
            <router-link to="/" class="nav-link">
                <img src="@/assets/navbar/submit_report.png" alt="submit-report" class="icon" />
            </router-link>
            <router-link to="/" class="nav-link">
                <img src="@/assets/navbar/report_history.png" alt="report-history" class="icon" />
            </router-link>
            <router-link to="/" class="nav-link">
                <img src="@/assets/navbar/members.png" alt="members" class="icon" />
            </router-link>
            <router-link to="/" class="nav-link">
                <img src="@/assets/navbar/report_summary.png" alt="report-summary" class="icon" />
            </router-link>
        </div>
        <div class="sidebar-bottom-group">
            <router-link to="/" class="nav-link">
                <img src="@/assets/navbar/profile.png" alt="profile" class="icon" />
            </router-link>
            <router-link to="/" class="nav-link">
                <img src="@/assets/navbar/settings.png" alt="settings" class="icon" />
            </router-link>
        </div>
      </nav>
  
      <!-- Main Content -->
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .container {
    display: flex;
    height: 100vh;
  }
  
  .sidebar {
    width: 75px;
    background-color: #7B1113;
    padding: 20px;
    margin: 2vw;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
  }
  
  .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    text-decoration: none;
    color: white;
    border-radius: 5px;
  }
  
  .nav-link:hover {
    background-color: #555;
  }
  
  .icon {
    width: 30px;
    height: 30px;
  }
  </style>
  