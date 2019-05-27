<template>
   <div>
      <!--this section contains info about Sponsors-->
      <section>
        <br>
        <h2>HOW SPONSORING PYDATA IS BENEFICIAL?</h2>
        <p class="text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum suscipit interdum. Pellentesque sed dui quis orci posuere venenatis. Sed sit amet nunc id ipsum tempor bibendum. In tincidunt sapien urna, a blandit sem cursus at. Donec augue nisi, maximus in aliquam eget, maximus quis diam. Integer erat turpis, elementum at nunc et, bibendum ornare lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum suscipit interdum. Pellentesque sed dui quis orci posuere venenatis. Sed sit amet nunc id ipsum tempor bibendum. In tincidunt sapien urna, a blandit sem cursus at. Donec augue nisi, maximus in aliquam eget, maximus quis.
         <br><br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum suscipit interdum. Pellentesque sed dui quis orci posuere venenatis. Sed sit amet nunc id ipsum tempor bibendum. In tincidunt sapien urna, a blandit sem cursus at. Donec augue nisi, maximus in aliquam eget, maximus quis diam. Integer erat turpis, elementum at nunc et, bibendum ornare lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum suscipit interdum. Pellentesque sed dui quis orci posuere venenatis. Sed sit amet nunc id ipsum tempor bibendum. In tincidunt sapien urna, a blandit sem cursus at. Donec augue nisi, maximus in aliquam eget, maximus quis.
        </p>
        <h2>WAYS TO SPONSOR</h2>
        <h3>PREVIOUS ARCHIVE</h3>
         <div class="cards-list">
            <div class="card">
               <div class="card_image"> 
                <a href="#"><img src="https://images.unsplash.com/photo-1537968990071-e569894be163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80"/></a> 
              </div>  
               <div class="card_title title-white">
                  <p class="year">MONETARY</p>
               </div>
            </div>
            <div class="card">
               <div class="card_image">
                  <a href="#"><img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /></a>
               </div>
               <div class="card_title title-white">
                  <p class="year">VENUE</p>
               </div>
            </div>
            <div class="card">
               <div class="card_image">
                  <a href="#"><img src="https://images.unsplash.com/photo-1505826759037-406b40feb4cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"/></a>
               </div>
               <div class="card_title title-white">
                  <p class="year">FOOD/SWAG</p>
               </div>
            </div>
            <div class="card">
               <div class="card_image">
                  <a href="#"><img src="https://images.unsplash.com/photo-1536174648837-9e030b3075f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/></a>
               </div>
               <div class="card_title title-white">
                  <p class="year">VIEW MORE</p>
               </div>
            </div>

         </div>
          <div class="distributed-bottom-buttons">
            <div class="distributed-buttons">
              <h2>WAYS TO CONNECT</h2>
              <button><span>CONNECT VIA FORM</span></button>
              <button><span>CONNECT VIA EMAIL</span></button>
            </div>
          </div>
      </section>  
      
   </div>
</template>


<style scoped>


.distributed-bottom-buttons  
 { 
    width: 100%;
    height: 400px;
    position: relative;
    color: #ffffff;
    background-image: url("https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: row; 
    place-content: center; 
    align-items: center;
}

button
{
  background-color: #FBC02D;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  width: 100%;
  
}


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
  margin-top: -50px;
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

h3
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