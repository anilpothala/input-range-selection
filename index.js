<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Range element manipulation</title>

<style>
    input {
    margin: 0px;
    position: absolute;
    left: 0px;
}

label {
    display: inline-block;
    margin-top: 100px;
}

#a {
    z-index: 2;
}

#b {
    z-index: 1;
}

</style>

</head>
<body>


   
    <input id='a' type='range' value="0"/>
    <input id='b' type='range' value="100"/>
    <label role='info'></label>
<!--
<input type="range" id="cowbell" name="cowbell" 
         min="10" max="300" value="10,200" step="10" multiple>
-->

<script type="text/javascript">


var a = document.getElementById('a');
    var b = document.getElementById('b');

    a.onmousemove = function(e) {
        MouseMove.call(a, e);
    };
    b.onmousemove = function(e) {
        MouseMove.call(b, e);
    };

    var MouseMove = function(eventArg) 
    {
        /* percentage position X of cursor  */
        var x100 = eventArg.clientX * 100 / 160;

        /* absolute distance from respective slider values */
        var da = Math.abs(a.value - x100);
        var db = Math.abs(b.value - x100);
        
        // Making the two sliders appear above one another only when no mouse button is pressed, this oondition may be removed at will
        if (!eventArg.buttons) 
        {
            if (da < db) 
            {
                a.style.zIndex = 2;
                b.style.zIndex = 1;
            } 
            else 
            {
                b.style.zIndex = 2;
                a.style.zIndex = 1;
            }
        }
        document.querySelector('label').innerHTML = 'Red: ' + a.value + ', Green: ' + b.value + ', X: ' + eventArg.clientX;
    }

</script>

</body>
</html>
