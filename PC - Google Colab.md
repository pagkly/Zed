---
alias: [install jupyter]
tag: [install jupyter]
---

#### how to add to the PATH variable
<details markdown='1'><summary>how to add to the PATH variable</summary>
```
setx /M PATH "$env:PATH;C:\\Users\\user\\AppData\\Local\\Packages\\PythonSoftwareFoundation.Python.3.9\_qbz5n2kfra8p0\\LocalCache\\local-packages\\Python39\\Scripts"
```
    !choco install -y dotnet-5.0-sdk
    !choco install -y markdownpad2
setx /M PATH "%PATH%;C:\\Users\\user\\AppData\\Local\\Packages\\PythonSoftwareFoundation.Python.3.9\_qbz5n2kfra8p0\\LocalCache\\local-packages\\Python39\\Scripts"

[Install colab local PC](https://research.google.com/colaboratory/local-runtimes.html "Install Jupyter")
<details markdown='1'><summary>Start Jupyter</summary>
jupyter notebook  --NotebookApp.allow\_origin='https://colab.research.google.com'   --port=8888 --NotebookApp.port\_retries=0

<div class="iframe-container"> 
<!--iframe link is the link to the jsfiddle--> 
<iframe src="https://research.google.com/colaboratory/local-runtimes.html" width="800" height="640" frameborder="0" scrolling="auto" class="frame-area">
</iframe> 
</div> 
<style> .iframe-container { text-align:center; width:100%; } </style>