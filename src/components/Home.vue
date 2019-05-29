<template>
  <div>
    <!-- Landing page goes here -->
    <div class = "home_first">
        <Object class='bg-left-top' data="images/bg-left-top.svg" type="image/svg+xml"></object>
        <Object class='bg-left-bottom' data="images/bg-left-bottom.svg" type="image/svg+xml"></object>
        <Object class='bg-right-top' data="images/bg-right-top.svg" type="image/svg+xml"></object>
        <Object class='bg-right-bottom' data="images/bg-right-bottom.svg" type="image/svg+xml"></object>
        <div class = "home_first_block">
            <h1 class = "home_heading">PyData <span>Delhi</span></h1>
            <h2 class = "home_subheading">
                A community of users and developers of the Python Scientific Stack in Delhi.
            </h2>
            <!-- <button class = "home_meetup_button">join the meetup</button> -->
        </div>
    </div>


    <!-- Pydata page goes here -->
    <div class = "home_pydata">
        <div class = "home_pydata_hr_wrap">
            <div class = "home_pydata_hr"></div>
            <br>
            <h1 class = "home_pydata_heading"> PyData </h1>
            <br>
            <br>
            <br>
            <div class="home_pydata_left">
                <p class = "home_pydata_left_para">
                    PyData is an educational program of NumFOCUS, a 501(c)3 non-profit organization in the United States. PyData provides a forum for the international community of users and developers of data analysis tools to share ideas and learn from each other.
                    <br> <br>
                    The global PyData network promotes discussion of best practices, new approaches, and emerging technologies for data management, processing, analytics, and visualization. PyData communities approach data science using many languages, including (but not limited to) Python, Julia, and R.
                    <br>
                    <br>
                    For more information about the PyData, visit the website
                </p>
                <br>
                <br>
                <br>
                <a href="https://pydata.org">
                    <button class = "home_pydata_left_button">Website</button>
                </a>
                <br>

            </div>
            <div class="home_pydata_right">
                <div >
                    <svg class="svg_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 239" fill="#f77c18">
                    <path class="blob-shape" d="M1.53561257,0 L458.12641,0 C461.773868,71.7384575 420.478337,183.060211 311.475162,224.585557 C194.808755,269.032251 89.8950627,199.485285 47.8554028,150.197559 C11.1268941,107.139844 -2.14235785,50.799793 1.53561316,-8.15533587e-06 L1.53561257,0 Z" transform="translate(-968.000000, -3455.000000) translate(968.000000, 3455.000000)"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>



<!-- Pydata Delhi page goes here -->
<div class = "home_pydata_delhi">
    <div class="home_pydata_delhi_left">
        <h1 class = "home_pydata_delhi_heading">PyData <span>Delhi</span> </h1>
        <br>
        <br>
        <br>
        <p class = "home_pydata_delhi_left_p">
        <b>PyData Delhi</b> bring together users, data science enthusiasts and developers of data analysis tools to share ideas and learn from each other. The PyData community gathers to discuss how best to apply Python tools, as well as tools using R and Julia, to meet evolving challenges in data management, processing, analytics, and visualization. 
            <br><br>
            We are currently the biggest PyData community in India with over 6000 members. Meetups are organized once every two weeks at different venues across Delhi. Join our meetup to support and become a part of the growing community of data engineers, data scientists and pythonistas in Delhi! 
            <br><br>
            Our annual conference, <b>PyData Delhi 2019</b> is scheduled for 3rd and 4th August, visit the website for more details.
            
        </p> 
        <br>
        <br>
            <a href="https://pydata.org/delhi2019">
                <button class = "home_pydata_delhi_left_button1" id = "home_pydata_delhi_left_button">Conference</button>
            </a>
            <a href="https://www.meetup.com/pydatadelhi">
                <button class = "home_pydata_delhi_left_button2" id = "home_pydata_delhi_left_button">Meetup</button>
            </a>
        <br>
        <br>
        <br>
        <br>
    </div>
</div>



<!-- CFP part goes here -->
<div class="home_pydata_cfp">
    <h1 class = "home_pydata_cfp_heading">Want to speak at a PyData Delhi event?</h1>
    <hr>
    <br>
    <br>
    <br>
    <div class = "home_pydata_cfp_list">
        <div class = "home_pydata_cfp_list_div">
            <br>
            <br>
            <img src="tmp_desing/other/speaker.png" class = "home_pydata_cfp_image"/>
            <br>
            <br>
            <h3 class = "">Submit a talk.</h3>
            <br>
            <p class = "">
            Want to speak at PyData Delhi meetup? Send in your talk proposals below!</p>
        </div>
        <div class = "home_pydata_cfp_list_div">
            <br>
            <br>
            <img src="tmp_desing/other/workshop.png" class = "home_pydata_cfp_image"/>
            <br>
            <br>
            <h3 class = "">Suggest a topic.</h3>
            <br>
            <p class = "">
            Have a Topic you want to see a talk or workshop on? Feel free to 
            suggest it to us below!
            </p>
        </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <div >
       <a href="https://github.com/pydatadelhi/talks/issues" style="color: white">
           <button class='home_pydata_cfp_btn'>
               Submit an issue here
           </button>
       </a>
    </div>
    <br>
    <br>
    <br>
    <br>
</div>




<!-- Past Conference part goes here -->
<div class="home_pydata_past_conf">
    <h1 class = "home_pydata_past_conf_heading">Past <span>Conferences</span> </h1>
    <div class = "home_pydata_past_conf_hr"></div>
    <br>

    <div class = "past_conf_list">
        <div class='past_conf_item'>
            <br>
            <br>
            <br>
            <br>
            <h3>PyData Delhi 2018</h3>
            <br>
            <br>
            <p>
                The second edition of the conference had 4 keynotes along with 28 talks and 6 workshops. This time around we have over 350 attendees from six countries 
            </p>
            <br>
            <a href="https://pydata.org/delhi2018">Conference website</a>
        </div>
        <div class='past_conf_item'>
            <br>
            <br>
            <br>
            <br>
            <h3>PyData Delhi 2017</h3>
            <br>
            <br>
            <p>
                Our inaugural conference, Pydata 2017 was held on 2nd and 3rd September.
                We hosted 270 attendees from five countries and 29 cities all over India. Over the course of two days, we had 4 keynotes, 30 talks, 6 workshops along with a great panel discussion.
            </p>
            <br>
            <a href="https://pydata.org/delhi2017">Conference website</a>
        </div>
            
    </div>
</div>


<!-- Past Meetup part goes here -->
<div class="home_pydata_past_conf" id="home_pydata_past_meetup">
    <h1 class = "home_pydata_past_conf_heading">Past <span>Meetups</span> </h1>
    <div class = "home_pydata_past_meetup_hr"></div>
    <br>

    <div class = "past_conf_list">
        <div class='past_conf_item'>
            <br>
            <br>
            <br>
            <br>
            <h3>PyData Delhi Meetup #31</h3>
            <br>
            <p>
            Saturday, May 11, 2019<br>
            UiPath Academy, Gurgaon, New Delhi
            </p>
            <br>
            <a href="https://www.meetup.com/PyDataDelhi/events/261057427/">More Details</a>
        </div>
        <div class='past_conf_item'>
            <br>
            <br>
            <br>
            <br>
            <h3>PyData Delhi Meetup #30</h3>
            <br>
            <p>
            Sunday, April 7, 2019<br>
            Investopad, Hauz Khas, New Delhi 
            </p>
            <br>
            <a href="https://www.meetup.com/PyDataDelhi/events/260146982/">More Details</a>
        </div>
            
    </div>
    <br>
    <div class = "past_conf_list">
        <div class='past_conf_item'>
            <br>
            <br>
            <br>
            <br>
            <h3>PyData Delhi Meetup #29</h3>
            <br>
            <p>
            Sunday, March 17, 2019<br>
            Aspiring Minds, Gurgaon, New Delhi
            </p>
            <br>
            <a href="https://www.meetup.com/PyDataDelhi/events/259625888/">More Details</a>
        </div>
        <div class='past_conf_item'>
            <br>
            <br>
            <br>
            <br>
            <h3>PyData Delhi Meetup #28</h3>
            <br>
            <p>
            Saturday, January 19, 2019<br>
            SocialCops, Saket, New Delhi 
            </p>
            <br>
            <a href="https://www.meetup.com/PyDataDelhi/events/257994541/">More Details</a>
        </div>
            
    </div>
</div>

</div>
</template>

<style scope>
</style>

<script>
</script>
