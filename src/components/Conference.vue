<template>
   <div>
      <h1>conference</h1>
      <!--this section contains info about pydata conferences-->
      <section>
        <p class="text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum suscipit interdum. Pellentesque sed dui quis orci posuere venenatis. Sed sit amet nunc id ipsum tempor bibendum. In tincidunt sapien urna, a blandit sem cursus at. Donec augue nisi, maximus in aliquam eget, maximus quis diam. Integer erat turpis, elementum at nunc et, bibendum ornare lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum suscipit interdum. Pellentesque sed dui quis orci posuere venenatis. Sed sit amet nunc id ipsum tempor bibendum. In tincidunt sapien urna, a blandit sem cursus at. Donec augue nisi, maximus in aliquam eget, maximus quis.
         <br><br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum suscipit interdum. Pellentesque sed dui quis orci posuere venenatis. Sed sit amet nunc id ipsum tempor bibendum. In tincidunt sapien urna, a blandit sem cursus at. Donec augue nisi, maximus in aliquam eget, maximus quis diam. Integer erat turpis, elementum at nunc et, bibendum ornare lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum suscipit interdum. Pellentesque sed dui quis orci posuere venenatis. Sed sit amet nunc id ipsum tempor bibendum. In tincidunt sapien urna, a blandit sem cursus at. Donec augue nisi, maximus in aliquam eget, maximus quis.
        </p>
        <h2>CONFERENCES</h2>
         <div class="cards-list">
            <div class="card 2019">
               <div class="card_image"> 
                <a href="https://pydata.org/delhi2019/"><img src="https://pbs.twimg.com/media/D7ElBz1UYAElQde?format=jpg&name=small"/></a> 
              </div>  
               <div class="card_title title-white">
                  <p class="year">2019</p>
               </div>
            </div>
            <div class="card 2018">
               <div class="card_image">
                  <a href="https://pydata.org/delhi2018/"><img src="https://live.staticflickr.com/1868/44118460322_b55473148f_k.jpg" /></a>
               </div>
               <div class="card_title title-white">
                  <p class="year">2018</p>
               </div>
            </div>
            <div class="card 2017">
               <div class="card_image">
                  <a href="https://pydata.org/delhi2017/"><img src="https://pbs.twimg.com/media/DIz7UXNVAAAR8UD?format=jpg&name=medium"/></a>
               </div>
               <div class="card_title title-white">
                  <p class="year">2017</p>
               </div>
            </div>

         </div>
      </section>
   </div>
</template>


<style scoped>

section
{
  position: relative;
  background-color: #ffffff;
}

.text
{
    text-align: justify;
    padding: 55px 55px;
}

.cards-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.card {
  margin: 30px auto;
  width: 300px;
  height: 400px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s;
  border: 1px solid black;
}

.card .card_image {
  width: inherit;
  height: inherit;
  border-radius: 20px;
}

.card .card_image a {
  width: inherit;
  height: inherit;
  border-radius: 20px;
}

.card .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 20px;
  object-fit: cover;
}

.card .card_title {
  text-align: center;
  font-family: sans-serif;
  margin-top: -70px;
  height: 50px;
}

.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
    -5px -5px 30px 15px rgba(0,0,0,0.22);
}

.title-white {
  color: white;
}

.year
{
  font-size: 30px;
}

h2
{
  text-align: center;
}

@media all and (max-width: 100px) {
  .card-list {
    flex-direction: column;
  }
}

</style>

<script>
</script>