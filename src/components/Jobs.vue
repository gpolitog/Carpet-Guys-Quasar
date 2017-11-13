<template>
  <div class="main">
    <div class="jobBox">
      <div class="location"></div>
      <div class="beforePictures"></div>
      <form class="afterPictures" method="POST" action="getdata.php" enctype="multipart/form-data">
        <input type="file" name="myimage">
        <input type="submit" name="submit_image" value="Upload">
      </form>
      <div class="details"></div>
    </div>

    <div class="jobBox">
      <div class="location"></div>
      <div class="beforePictures"></div>
      <form method="POST" action="getdata.php" enctype="multipart/form-data">
        <input type="file" name="myimage">
        <input type="submit" name="submit_image" value="Upload">
      </form>
      <div class="details"></div>
    </div>

    <div class="jobBox">
      <div class="location"></div>
      <div class="beforePictures"></div>
      <form method="POST" action="getdata.php" enctype="multipart/form-data">
        <input type="file" name="myimage">
        <input type="submit" name="submit_image" value="Upload">
      </form>
      <div class="details"></div>
    </div>

    <div class="jobBox">
      <div class="location"></div>
      <div class="beforePictures"></div>
      <form method="POST" action="getdata.php" enctype="multipart/form-data">
        <input type="file" name="myimage">
        <input type="submit" name="submit_image" value="Upload">
      </form>
      <div class="details"></div>
    </div
    >
    <div class="jobBox">
      <div class="location"></div>
      <div class="beforePictures"></div>
      <form method="POST" action="getdata.php" enctype="multipart/form-data">
        <input type="file" name="myimage">
        <input type="submit" name="submit_image" value="Upload">
      </form>
      <div class="details"></div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
.main {

}
.jobBox {

}
.location {

}
.beforePictures {

}
.afterPictures {

}
.details {

}
</style>
