### Text overlays Text
<span class="normal">Hello World</span>
<span class="hovered">Wow</span>

<br>

### Button Reveal
<button>
    <span class="replies">5 Replies</span>
    <span class="comment">Reply!</span>
</button>

<br>


### Blur Reveal
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title></title>
<style>
.spoiler {
    display:none;
    width:100%;
    height:50px;
    background-color:red;
    margin-bottom:10px;
}
.contentBoxFooter{position:absolute;bottom:10px;}
</style>
</head>
<body>
    <div id="a1" class="spoiler">Content</div> 
    <div id="a2" class="spoiler">Content</div>
    <div id="a3" class="spoiler">Content</div>
    <div id="a4" class="spoiler">Content</div>
    <div class="contentBoxFooter">
        <a href="a1" class = "spoilerButton">Show/Hide</a>
        <a href="a2" class = "spoilerButton">Show/Hide</a>
        <a href="a3" class = "spoilerButton">Show/Hide</a>
        <a href="a4" class = "spoilerButton">Show/Hide</a>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript">
    $(document).ready(function(){
        $(".spoilerButton").click(function (e) { 
            e.preventDefault()
            var foo=$(this).attr('href')
            $('#'+foo).slideToggle(1000); 
        });
    });
    </script>
</body>
</html>


<main>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	 <script type="text/javascript">
			function toggleSpoiler() { document.getElementById("spoilies").style.backgroundColor = document.getElementById("spoilies").style.backgroundColor == "black" ? "lightgray" : "black"
			}
	</script>
  <div class="centered">
    <h1>Unselectable Spoiler Tag</h1>
    <p class="content">
      Click on the black rectangle to reveal/hide spoiler content.<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur id sint doloremque atque, perspiciatis vitae possimus magnam a aut soluta deserunt veniam excepturi cumque amet. <span id="spoilies" onclick="toggleSpoiler()">Odio veritatis fuga debitis?</span>
    </p>
    <p class="note">
    Note: Works for multiple lines and it's able to be toggled (via JS). To make sure the text can't be copied use every "user-select" line I've put, including the ones with prefixes.
    </p>
	  
  </div>
	
</main>




<html>
<head>
<meta charset="utf-8">
<title></title>
<style>
.spoiler {
    display:none;
    width:100%;
    height:50px;
    background-color:red;
    margin-bottom:10px;
}
.contentBoxFooter{position:absolute;bottom:10px;}
</style>
</head>
<body>
    <p class="content">
      Click on the black rectangle to reveal/hide spoiler content.<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur id sint doloremque atque, perspiciatis vitae possimus magnam a aut soluta deserunt veniam excepturi cumque amet. <span id="spoilies" onclick="toggleSpoiler()">Odio veritatis fuga debitis?</span>
    </p>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript">
		function toggleSpoiler() { document.getElementById("spoilies").style.backgroundColor = document.getElementById("spoilies").style.backgroundColor == "black" ? "lightgray" : "black"
				}
    </script>
</body>
</html>



#### Table Reveal

<table class="table table-bordered table-hover table-condensed">
<thead><tr><th title="Field #1">Q</th>
<th title="Field #2">A</th>
</tr></thead>
<tbody><tr>
<td>What are PC components typically thought of as?</td>
<td><span class="spoilhover">packaged or add-on parts</span></td>
</tr>
<tr>
<td>Media drives, memory, hard drives, processors, and power supply are examples of what?</td>
	<td><span class="spoilhover">vital electronic components</span></td>
</tr>
<tr>
<td>What are vital electronic components that are necessary in every PC?</td>
<td><span class="spoilhover">media drives, memory, hard drives, processors, and the power supply</span></td>
</tr>
<tr>
<td>What is a thin plate on which chips are placed?</td>
<td><span class="spoilhover">Printed circuit board</span></td>
</tr>
<tr>
<td>What are examples of a PCB?</td>
<td><span class="spoilhover">motherboard and various expansion adapters</span></td>
</tr>
<tr>
<td>What is a CD-ROM drive?</td>
<td><span class="spoilhover">optical drive</span></td>
</tr>
<tr>
<td>What is the &quot;brain&quot; of a computer called?</td>
<td><span class="spoilhover">Central processing unit</span></td>
</tr>
<tr>
<td>What can read and write to floppy disks?</td>
<td><span class="spoilhover">Floppy disk drive</span></td>
</tr>
<tr>
<td>What is the primary storage device in a computer?</td>
<td><span class="spoilhover">Hard disk drive</span></td>
</tr>
<tr>
<td>What is a hard disk in a computer?</td>
<td><span class="spoilhover">primary storage device</span></td>
</tr>
</tbody></table>
