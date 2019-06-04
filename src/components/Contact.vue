<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <section id="contact">
  
  <h1 class="section-header">CONTACT</h1>
  <p> </p>
  
  <div class="contact-wrapper">
    
      <!-- CONTACT PAGE LEFT --> 
    
  <form class="form-horizontal" role="form" method="post" action="contact.php">
      
    <div class="form-group">
      <div class="col-sm-16">
        <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="">
      </div>
    </div>
    <br>
    <div class="form-group">
      <div class="col-sm-16">
        <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="">
      </div>
    </div>
    <br>
    <textarea id="textarea" rows="10" cols="32" placeholder="MESSAGE" name="message"></textarea>
    
    <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
      <div class="button">
        <i class="fa fa-paper-plane" id="plane"></i><span class="send-text">SEND</span>
      </div>
    </button>
    
  </form>
    
      <!-- CONTACT PAGE RIGHT --> 
      <div class="direct-contact-container">

      <ul class="contact-list">
        <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">New Delhi | IND</span></i></li>
        
        <li class="list-item"><i class="fa fa-user-circle-o fa-2x"><span class="contact-text phone"><a href="mailto:sanket@pydata.org" title="Organiser">sanket@pydata.org </a></span></i></li>
        
        <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:Delhi@pydata.org" title="Send me an email">Delhi@pydata.org</a></span></i></li>
      </ul>

      <hr>
      <ul class="social-media-list">
        <li><a href="https://github.com/pydatadelhi" target="_blank" class="contact-icon">
          <i class="fa fa-github" aria-hidden="true"></i></a>
        </li>
        <li><a href="https://twitter.com/PyDataDelhi" target="_blank" class="contact-icon">
          <i class="fa fa-twitter" aria-hidden="true"></i></a>
        </li>
        <li><a href="https://instagram.com/pydatadelhi?igshid=qe7lft8thwl7" target="_blank" class="contact-icon">
          <i class="fa fa-instagram" aria-hidden="true"></i></a>
        </li>
        <li><a href="https://www.meetup.com/pro/pydata/" target="_blank" class="contact-icon">
          <i class="fa fa-meetup" aria-hidden="true"></i></a>
        </li>
        <li><a href="https://www.facebook.com/pydatadelhi" target="_blank" class="contact-icon">
          <i class="fa fa-facebook" aria-hidden="true"></i></a>
        </li>
        <li><a href="https://www.youtube.com/channel/UCz_xSLNdtnkDsVTuYuLprMg" target="_blank" class="contact-icon">
          <i class="fa fa-youtube" aria-hidden="true"></i></a>
        </li>
        <li><a href="https://bit.do/joinpydd" target="_blank" class="contact-icon">
          <i class="fa fa-telegram" aria-hidden="true"></i></a>
        </li>
      </ul>
      <hr>

     <div class="copyright">&copy; PyData Delhi 2019</div>

     </div>
    </div>
  </section> 

  </div>
</template>

<style scoped>
    body {
      margin: 0;
      padding: 0;
      
    }

    #contact {
      width: 100%;
      height: 200vh;
      background-color: #111;
      overflow: hidden;
      padding-bottom: 200px;
    }

    .section-header {
      text-align: center;
      margin: 0 auto;
      padding-top: 50px;
      margin-bottom: 50px;
      font: 300 60px 'Oswald', sans-serif;
      letter-spacing: 6px;
      color: #fff;
      margin-bottom: 25px;
    }

    .contact-wrapper {
      margin: 0 auto;
      padding-top: 20px;
      position: relative;
      max-width: 800px;
    }

    /*Left Contact Page */
    .form-horizontal {
      float: left;
      max-width: 400px;
      font-family: 'Lato';
      font-weight: 400;
    }

    .form-control {
      max-width: 400px;
      height: 40px;
      background-color: #111;
      color: #fff;
      letter-spacing: 3px;
      line-height: 10px;  
    }

    #textarea {
      max-width: 400px;
      background-color: #111;
      color: #fff;
      letter-spacing: 3px;
    }

    .send-button {
      margin-top: 30px;
      height: 35px;
      width: 375px;
      background-color: #ff3300;
      overflow: hidden;
      transition: all .2s ease-in-out;
    }

    .button {
      margin-top: 5px;
      width: 400px;
      height: 37px;
      transition: all .2s ease-in-out;
    }

    .send-text {
      display: block;
      margin-top: 10px;
      font: 700 20px 'Lato', sans-serif;
      letter-spacing: 2px;
    }

    .button:hover {
      transform: translate3d(0px, -29px, 0px);
    }

    /* Right Contact Page */
    .direct-contact-container {
      max-width: 400px;
      float: right;
      margin-top: 5px;
    }

    /* Location, Phone, Email Section */
    .contact-list {
      list-style-type: none;
      margin-left: -30px;
      padding-right: 20px;
    }

    .list-item {
      line-height: 4;
      color: #aaa;
    }

    .contact-text {
      font: 300 18px 'Lato', sans-serif;
      letter-spacing: 1.9px;
      color: #bbb;
    }

    .place {
      margin-left: 62px;
    }

    .phone {
      margin-left: 56px;
    }

    .gmail {
      margin-left: 53px;
    }

    .contact-text a {
      color: #bbb;
      text-decoration: none;
      transition-duration: 0.2s;
    }

    .contact-text a:hover {
      color: #fff;
      text-decoration: none;
    }


    /* Social Media Icons */
    .social-media-list {
      position: relative;
      font-size: 2.3rem;
      text-align: center;
      width: 100%;
    }

    .social-media-list li a {
      color: #fff;
    }

    .social-media-list li {
      position: relative; 
      top: 0;
      left: -20px;
      display: inline-block;
      height: 70px;
      width: 70px;
      margin: 10px auto;
      line-height: 70px;
      border-radius: 50%;
      color: #fff;
      background-color: rgb(27,27,27);
      cursor: pointer; 
      transition: all .2s ease-in-out;
    }

    .social-media-list li:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 70px;
      height: 70px;
      line-height: 70px;
      border-radius: 50%;
      opacity: 0;
      box-shadow: 0 0 0 1px #fff;
      transition: all .2s ease-in-out;
    }

    .social-media-list li:hover {
      background-color: #00FFFF; 
    }

    .social-media-list li:hover:after {
      opacity: 1;  
      transform: scale(1.12);
      transition-timing-function: cubic-bezier(0.37,0.74,0.15,1.65);
    }

    .social-media-list li:hover a {
      color: #111;
    }

    .copyright {
      font: 200 14px 'Oswald', sans-serif;
      color: #555;
      letter-spacing: 1px;
      text-align: center;
    }

    hr {
      border-color: rgba(255,255,255,.8); ;
    }

    /*Media Queries for making page responsive*/
    @media screen and (max-width: 760px) {
        #contact {
            height: 1000px;
        }
      .section-header {
        font-size: 65px;
      }
      .direct-contact-container, .form-horizontal {
        float: none;
        margin: 10px auto;
      }  
      .direct-contact-container {
        margin-top: 60px;
        max-width: 300px;
      }    
      .social-media-list li {
        height: 60px;
        width: 60px;
        line-height: 60px;
      }
      .social-media-list li:after {
        width: 60px;
        height: 60px;
        line-height: 60px;
      }
    }

    @media screen and (max-width: 569px) {
      #contact {
        height: 1200px;
        }
      .section-header{
        font-size: 50px;
      }
      .direct-contact-container, .form-wrapper {
        float: none;
        margin: 0 auto;
      }  
      .form-control, textarea {
        max-width: 340px;
        margin: 0 auto;
      }
      
      .name, .email, textarea {
        width: 280px;
      } 
      .direct-contact-container {
        margin-top: 60px;
        max-width: 280px;
      }  
      .social-media-list {
        left: 0;
      }
      .social-media-list li {
        height: 55px;
        width: 55px;
        line-height: 55px;
        font-size: 2rem;
      }
      .social-media-list li:after {
        width: 55px;
        height: 55px;
        line-height: 55px;
      }
      
    }

    @media screen and (max-width: 410px) {
      .send-button {
        width: 99%;
      }
    }

</style>

<script>
</script>