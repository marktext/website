<template>
  <div class="features">
    <h2>Editor</h2>
    <div class="intro">
      Mark Text supports both the CommonMark Spec and the GitHub Flavored Markdown Spec. Because Mark Text is a realtime preview editor, text styles and formatting update as you type.
    </div>
    <ul class="feature-intro">
      <li>
        <h3>GitHub Flavored Markdown</h3>
        <img src="../assets/images/table.jpg" alt="">
        <div>List, Table, Link, Emoji etc</div>
      </li>
      <li>
        <h3>Auto-Completion</h3>
        <img src="../assets/images/emoji.jpg" alt="">
        <div>Emoji and code fence language</div>
      </li>
      <li>
        <h3>Code Fence</h3>
        <img src="../assets/images/code-block.jpg" alt="">
        <div>Support for all the popular languages</div>
      </li>
    </ul>
  </div>
</template>

<script>

</script>

<style scoped>
  .features {
    max-width: 1000px;
    margin: 100px auto;
  }
  h2 {
    text-align: center;
    font-size: 2rem;
    color: #333;
  }
  .intro {
    color: #333;
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.2rem;
    line-height: 1.6;
  }
  ul {
    display: flex;
    align-content: space-between;
    margin-top: 80px;
  }
  li {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    overflow: hidden;
  }
  li:last-of-type {
    margin-right: 0;
  }
  li img {
    width: 100%;
    border-radius: 5px;
  }
  li h3 {
    color: #333;
    text-align: center;
  }
  li div {
    text-align: center;
    font-size: 14px;
    color: #666;
    margin-top: 10px;
  }
  @media screen and (max-width: 850px) {
    ul.feature-intro {
      flex-direction: column;
    }
    ul.feature-intro li {
      margin-right: 40px;
    }
  }
</style>
