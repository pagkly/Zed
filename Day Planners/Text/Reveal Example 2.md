

<main>
  <div class="centered">
    <h1>Spoiler tag using ::before</h1>
    <p class="content">
      <span class="regular">CLICK on the black rectangle to reveal spoiler content.</span><br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur id sint doloremque atque, perspiciatis vitae possimus magnam a aut soluta deserunt veniam excepturi cumque amet. <a href="" class="spoilclick">Odio veritatis fuga debitis?</a>
    </p>
    <p class="content">
      <span class="regular">HOVER over the black rectangle to reveal spoiler content.</span><br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur id sint doloremque atque, perspiciatis vitae possimus magnam a aut soluta deserunt veniam excepturi cumque amet. <span class="spoilhover">Odio veritatis fuga debitis?</span>
    </p>
    <p class="note">
    Note 1: only works if the spoiler content is on the same line, which is not very practical but this is something that came up while doing underline animations and was not planned. <br><br>
Note 2: the first one uses :focus, so to hide the content again you have to change or lose the focus. It also uses an &lta&gt tag so once you click to reveal the content it moves the view to the top of the page.
    </p>
  </div>
</main>


<span class="spoiler" >test</span>
<p>Then when hovered over</p>
<span class="spoiler2"> other test </span>



