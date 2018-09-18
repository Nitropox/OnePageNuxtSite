<template>
  <section class="container-onepage">
    <section id="section1" class="section-even">
      <h1>Section 1</h1>
    </section>
    <section id="section2" class="section-odd">
       <h1>Section 2</h1>
    </section>
    <section id="section3" class="section-even">
       <h1>Section 3</h1>
    </section>
    <section id="section4" class="section-odd">
       <h1>Section 4</h1>
    </section>
    <section id="section5" class="section-even">
       <h1>Section 5</h1>
    </section>
    <section id="section6" class="section-odd">
       <h1>Section 6</h1>
    </section>
  </section>
</template>

<style lang="scss">
$bgColor1: rgba(36, 123, 160, 1);
$bgColor2: rgba(178, 219, 191, 1);
.center
{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.container-onepage{
  margin-top: 60px;
  background-color: aqua;
   min-height: 100vh;
}

.section-even{
  background-color: $bgColor1;
  height: 800px;
  padding: 40px;
}
.section-odd{
  background-color: $bgColor2;
  height: 700px;
}

h1{
  margin:0;
  padding:0;
}
</style>
