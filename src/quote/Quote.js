import React from "react";
import './Quote.css';
import Tilt from 'react-tilt';
import Logo from './logo.jpg';
import $ from 'jquery';
function randomQuote() {
$.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#random_quote").html("<p id='random_quote' className='lead text-center'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
        $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
      }
  });
}
$(document).ready(function(){
  $("button").click(function(){
  randomQuote();
});
});

class Quote extends React.Component{

render(){

	return(
		
		<div>
      
<nav className="dt w-100 border-box pa3 ph5-ns">
  <a className="dtc v-mid mid-gray link dim w-25"  title="Home">

    <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3">
    <img style={{paddingTop: '5px'}} src={Logo} className=" br-100" alt="Logo"/>
    <h3 className="f1" >iMot</h3>
        </div>
      </Tilt>


  </a>
  <div className="dtc v-mid w-75 tr">
    <a className="link dim moon-gray f6 f5-ns dib mr3 mr4-ns" title="About">Made with ❤️</a>
    <a className="link dim moon-gray f6 f5-ns dib" href="https://www.instagram.com/vivekanand_bangar/" title="Contact">Follow Me</a>
  </div>
</nav>

  <article className="h-100 center mw5 mw6-ns br3 bw3 bg-black hidden ba b--white-70 mv4">
      <Tilt className="Tilt br2 shadow-2" >

      <h1 className="f4 bg-silver br3 br--top black-60 mv0 pv2 ph3">Quote</h1>
      <div className="pa3 bt b--black-10 ">

        <p className="f6 f5-ns lh-copy measure near-white"  id='random_quote'>Click the button to get motivated..</p>
      </div>
        </Tilt>
  </article>


<section className="mw5 mw7-ns center pa3 ph5-ns">
  <p className="lh-copy measure">
    <button className="grow ml7 dim br-pill ph3 pv2 mb2 dib bg-near-white pointer">Get Quote</button>
  </p>
</section>

          
  
    
</div>

  
		
		);
	}



}
export default Quote;

