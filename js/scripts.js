function detectViewport()
{

    
    
    theMindMap = document.getElementById("mindmap")
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    
    pageContainer = document.getElementsByClassName("pageContainer");
    intro = document.getElementById("p0")

    for (var i = 0; i < pageContainer.length; i++)
        {
            pageContainer[i].style.height = 5 + "px";
        }    
    
      
    
    if (windowWidth >= 1250 )
        {
            theMindMap.innerHTML = '<iframe width="1100" height="600" frameborder="0" src="https://www.mindmeister.com/maps/public_map_shell/1659846246/innovation-project-idea?width=1100&height=600&z=auto&presentation=1" scrolling="no" style="overflow: hidden; margin-bottom: 5px;">Your browser is not able to display frames. Please visit <a href="https://www.mindmeister.com/1659846246/innovation-project-idea" target="_blank">Innovation Project Idea</a> on MindMeister.</iframe>'
        }
    else if (windowWidth >= 900)
        {
            theMindMap.innerHTML = '<iframe width="850" height="600" frameborder="0" src="https://www.mindmeister.com/maps/public_map_shell/1659846246/innovation-project-idea?width=850&height=600&z=auto&presentation=1" scrolling="no" style="overflow: hidden; margin-bottom: 5px;">Your browser is not able to display frames. Please visit <a href="https://www.mindmeister.com/1659846246/innovation-project-idea" target="_blank">Innovation Project Idea</a> on MindMeister.</iframe>'
        }
    else if (windowWidth >= 700)
        {
            theMindMap.innerHTML = '<iframe width="600" height="500" frameborder="0" src="https://www.mindmeister.com/maps/public_map_shell/1659846246/innovation-project-idea?width=500&height=600&z=auto&presentation=1" scrolling="no" style="overflow: hidden; margin-bottom: 5px;">Your browser is not able to display frames. Please visit <a href="https://www.mindmeister.com/1659846246/innovation-project-idea" target="_blank">Innovation Project Idea</a> on MindMeister.</iframe>'
        }
    else if (windowWidth >= 400 || windowWidth < 700)
        {
            theMindMap.innerHTML = '<iframe width="400" height="500" frameborder="0" src="https://www.mindmeister.com/maps/public_map_shell/1659846246/innovation-project-idea?width=400&height=500&z=auto&presentation=1" scrolling="no" style="overflow: hidden; margin-bottom: 5px;">Your browser is not able to display frames. Please visit <a href="https://www.mindmeister.com/1659846246/innovation-project-idea" target="_blank">Innovation Project Idea</a> on MindMeister.</iframe>'
        }
    else if (windowWidth > 300 || windowWidth < 400  )
        {
            theMindMap.innerHTML = '<iframe width="300" height="400" frameborder="0" src="https://www.mindmeister.com/maps/public_map_shell/1659846246/innovation-project-idea?width=300&height=400&z=auto&presentation=1" scrolling="no" style="overflow: hidden; margin-bottom: 5px;">Your browser is not able to display frames. Please visit <a href="https://www.mindmeister.com/1659846246/innovation-project-idea" target="_blank">Innovation Project Idea</a> on MindMeister.</iframe>'
        }
    else {
        theMindMap.innerHTML = '<iframe width="200" height="300" frameborder="0" src="https://www.mindmeister.com/maps/public_map_shell/1659846246/innovation-project-idea?width=200&height=300&z=auto&presentation=1" scrolling="no" style="overflow: hidden; margin-bottom: 5px;">Your browser is not able to display frames. Please visit <a href="https://www.mindmeister.com/1659846246/innovation-project-idea" target="_blank">Innovation Project Idea</a> on MindMeister.</iframe>'
    }
      
 
}

function navigate(theButton, theState)
{
    windowWidth= $(window).width();
    windowHeight =$(window).height();
        
    pageContainer = document.getElementsByClassName("pageContainer");
    var i;
    for (i = 0; i < pageContainer.length; i++)
        {
            pageContainer[i].style.height = windowHeight-130 + "px";
        }
    
        
    
    if (theState == 0)
        {
            $("#p0").css({
                "display":"block",
                "visibility":"visible",
                "position":"relative",
                "left":"0px"
                
            })
            $("#p1,#p2,#p3,#p4").css({
                "visibility":"hidden",
                "position":"absolute",
                "left":"-9999px",
                "display":"none" 
            })
        }
    else if (theState == 1)
        {
            $("#p1").css({
                "display":"block",
                "visibility":"visible",
                "position":"relative",
                "left":"0px"
            })
            $("#p0,#p2,#p3,#p4").css({
                "display":"none",
                "visibility":"hidden",
                "position":"absolute",
                "left":"-9999px"
            })
        }
    else if (theState == 2)
        {
            $("#p2").css({
                "display":"block",
                "visibility":"visible",
                "position":"relative",
                "left":"0px"
            })
            $("#p0,#p1,#p3,#p4").css({
                "display":"none",
                "visibility":"hidden",
                "position":"absolute",
                "left":"-9999px"
            })
        }
    else if (theState == 3)
        {
            $("#p3").css({
                "display":"block",
                "visibility":"visible",
                "position":"relative",
                "left":"0px"
            })
            $("#p0,#p1,#p2,#p4").css({
                "display":"none",
                "visibility":"hidden",
                "position":"absolute",
                "left":"-9999px"
            })
        }
    else
        {
            $("#p4").css({
                "display":"block",
                "visibility":"visible",
                "position":"relative",
                "left":"0px"
            })
            $("#p0,#p1,#p2,#p3").css({
                "display":"none",
                "visibility":"hidden",
                "position":"absolute",
                "left":"-9999px"
            })

        }

}