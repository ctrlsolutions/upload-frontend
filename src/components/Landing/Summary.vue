<template>
  <div class="container">LANDING Summary</div>
</template>
<script></script>
<style lang="scss">
<<<<<<< Updated upstream
body {
  height: 100vh;
}
.container {
  height: 100vh;
=======
.report-summary {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;

  .title {
    font-size: 3rem;
    font-weight: 900;
    color: maroon;
    margin-bottom: 5px;
  }

  .date {
    font-size: 1.2rem;
    font-weight: bold;
    color: black;
    margin-top: -10px;
  }

  .report-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
    margin-top: 20px;
  }

  .pie-chart-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    .total-reports {
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
      color: black;
    }

    .pie-chart {
      width: 300px;
      height: auto;
    }
  }

    .report-number {
    font-weight: 600; 
    margin-bottom: 0;
  }

  .report-label {
    font-weight: 800; 
    margin-top: 0;
  }

  .legend {
    ul {
      list-style: none;
      padding: 0;

      li {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        margin-bottom: 8px;

        .color-box {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 10px;
        }
      }
    }
  }
>>>>>>> Stashed changes
}
</style>
