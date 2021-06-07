<template>
  <div>
    <navbar></navbar>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">

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
                <post-item></post-item>
                <post-item></post-item>
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
