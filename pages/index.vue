<template>
  <div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
    <nav class="navbar has-shadow">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="../">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Lalriin logogogogogogo">
          </a>
          <div class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item has-dropdown">
              <a class="navbar-link">Menu</a>
              <div class="navbar-dropdown">
                <a class="navbar-item">Dashboard</a>
                <a class="navbar-item">Profile</a>
                <hr class="navbar-divider">
                <div class="navbar-item">Log out</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="blogs-page">
      <div class="main-content">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-8 is-offset-2">
              <div class="section">
                <div class="title">
                  <h1>Шинэ мэдээ</h1>
                  <hr>
                </div>
                <div class="post">
                  <a class="post-header post-header-link clickable">
                    <h4 class="title is-4">Гарчиг</h4>
                    <h5 class="subtitle is-5">Дэд гарчиг</h5>
                  </a>
                  <div class="post-content">
                    by Elbegsaikhan, 4th , Jun, 2021
                  </div>
                </div>
                <div class="post">
                  <a class="post-header post-header-link clickable">
                    <h4 class="title is-4">Гарчиг</h4>
                    <h5 class="subtitle is-5">Дэд гарчиг</h5>
                  </a>
                  <div class="post-content">
                    by Elbegsaikhan, 4th , Jun, 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
  .post-content{
    font-style: italic;
  }
  .post {
    margin-bottom: 20px;
    padding: 5px;
    border-bottom: 2px solid transparent;
  }
  .post:hover{
    border-bottom: 2px solid #e8e8e8;
  }

</style>
