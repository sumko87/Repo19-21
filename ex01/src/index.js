
function num1 (){
    var text = document.getElementById("txtArea").value;
	var key = 1;
	document.getElementById("txtArea").value = text + key;
}

function num2 (){
    var text = document.getElementById("txtArea").value;
	var key = 2;
	document.getElementById("txtArea").value = text + key;
}

function num3 (){
    var text = document.getElementById("txtArea").value;
	var key = 3;
	document.getElementById("txtArea").value = text + key;
}

function num4 (){
    var text = document.getElementById("txtArea").value;
	var key = 4;
	document.getElementById("txtArea").value = text + key;
}

function num5 (){
    var text = document.getElementById("txtArea").value;
	var key = 5;
	document.getElementById("txtArea").value = text + key;
}

function num6 (){
    var text = document.getElementById("txtArea").value;
	var key = 6;
	document.getElementById("txtArea").value = text + key;
}


function num7 (){
    var text = document.getElementById("txtArea").value;
	var key = 7;
	document.getElementById("txtArea").value = text + key;
}


function num8 (){
    var text = document.getElementById("txtArea").value;
	var key = 8;
	document.getElementById("txtArea").value = text + key;
}

function num9 (){
    var text = document.getElementById("txtArea").value;
	var key = 9;
	document.getElementById("txtArea").value = text + key;
}


function num0 (){
    var text = document.getElementById("txtArea").value;
	var key = 0;
	document.getElementById("txtArea").value = text + key;
}







function backspace (){
    var text = document.getElementById("txtArea").value;
	document.getElementById("txtArea").value = text.substring(0,text.length-1);
}



//new line when enter is pressed
function enter (){
    var text = document.getElementById("txtArea").value;
	var key = "\n";
	document.getElementById("txtArea").value = text + key;
}

//space
function space (){
    var text = document.getElementById("txtArea").value;
	var key = " ";
	document.getElementById("txtArea").value = text + key;
}

//minus
function minus (){
    var text = document.getElementById("txtArea").value;
	var key = "-";
	document.getElementById("txtArea").value = text + key;
}

//underscore
function underscore (){
    var text = document.getElementById("txtArea").value;
	var key = "_";
	document.getElementById("txtArea").value = text + key;
}


//Alert when ok button is pressed
function submit (){
    var text = document.getElementById("txtArea").value;
    alert(text);
}



//capsLock
caps =0;
function capsLock(){
    if (caps==0) {
        caps=1;
       document.getElementById("caps").value = 1;
    } else {
    caps=0;
    document.getElementById("caps").value = 0;}
    return caps
}


//shift
shift =0;
function shiftFun(){
    if (shift==0) {
        shift=1;
       document.getElementById("shift").value = 1;
    } else {
    shift=0;
    document.getElementById("shift").value = 0;}
    return shift
}





//slova
function q (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="Q";
    } else if(caps==0 && shift==1) {
        var key="Q";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="Q";
            shift=0;
        }
    else {var key="q";}
	document.getElementById("txtArea").value = text + key;
}


function w (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="W";
    } else if(caps==0 && shift==1) {
        var key="W";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="W";
            shift=0;
        }
    else {var key="w";}
	document.getElementById("txtArea").value = text + key;
}


function e (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="E";
    } else if(caps==0 && shift==1) {
        var key="E";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="E";
            shift=0;
        }
    else {var key="e";}
	document.getElementById("txtArea").value = text + key;
}


function r (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="R";
    } else if(caps==0 && shift==1) {
        var key="R";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="R";
            shift=0;
        }
    else {var key="r";}
	document.getElementById("txtArea").value = text + key;
}


function t (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="T";
    } else if(caps==0 && shift==1) {
        var key="T";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="T";
            shift=0;
        }
    else {var key="t";}
	document.getElementById("txtArea").value = text + key;
}


function y (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="Y";
    } else if(caps==0 && shift==1) {
        var key="Y";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="Y";
            shift=0;
        }
    else {var key="y";}
	document.getElementById("txtArea").value = text + key;
}



function u (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="U";
    } else if(caps==0 && shift==1) {
        var key="U";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="U";
            shift=0;
        }
    else {var key="u";}
	document.getElementById("txtArea").value = text + key;
}



function i (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="I";
    } else if(caps==0 && shift==1) {
        var key="I";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="I";
            shift=0;
        }
    else {var key="i";}
	document.getElementById("txtArea").value = text + key;
}


function o (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="O";
    } else if(caps==0 && shift==1) {
        var key="O";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="O";
            shift=0;
        }
    else {var key="o";}
	document.getElementById("txtArea").value = text + key;
}



function p (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="P";
    } else if(caps==0 && shift==1) {
        var key="P";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="P";
            shift=0;
        }
    else {var key="p";}
	document.getElementById("txtArea").value = text + key;
}



function a (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="A";
    } else if(caps==0 && shift==1) {
        var key="A";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="A";
            shift=0;
        }
    else {var key="a";}
	document.getElementById("txtArea").value = text + key;
}



function s (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="S";
    } else if(caps==0 && shift==1) {
        var key="S";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="S";
            shift=0;
        }
    else {var key="s";}
	document.getElementById("txtArea").value = text + key;
}


function d (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="D";
    } else if(caps==0 && shift==1) {
        var key="D";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="D";
            shift=0;
        }
    else {var key="d";}
	document.getElementById("txtArea").value = text + key;
}


function f (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="F";
    } else if(caps==0 && shift==1) {
        var key="F";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="F";
            shift=0;
        }
    else {var key="f";}
	document.getElementById("txtArea").value = text + key;
}


function g (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="G";
    } else if(caps==0 && shift==1) {
        var key="G";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="G";
            shift=0;
        }
    else {var key="g";}
	document.getElementById("txtArea").value = text + key;
}



function h (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="H";
    } else if(caps==0 && shift==1) {
        var key="H";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="H";
            shift=0;
        }
    else {var key="h";}
	document.getElementById("txtArea").value = text + key;
}



function j (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="J";
    } else if(caps==0 && shift==1) {
        var key="J";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="J";
            shift=0;
        }
    else {var key="j";}
	document.getElementById("txtArea").value = text + key;
}


function k (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="K";
    } else if(caps==0 && shift==1) {
        var key="K";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="K";
            shift=0;
        }
    else {var key="k";}
	document.getElementById("txtArea").value = text + key;
}



function l (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="L";
    } else if(caps==0 && shift==1) {
        var key="L";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="L";
            shift=0;
        }
    else {var key="l";}
	document.getElementById("txtArea").value = text + key;
}




function z (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="Z";
    } else if(caps==0 && shift==1) {
        var key="Z";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="Z";
            shift=0;
        }
    else {var key="z";}
	document.getElementById("txtArea").value = text + key;
}


function x (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="X";
    } else if(caps==0 && shift==1) {
        var key="X";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="X";
            shift=0;
        }
    else {var key="x";}
	document.getElementById("txtArea").value = text + key;
}


function c (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="C";
    } else if(caps==0 && shift==1) {
        var key="C";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="C";
            shift=0;
        }
    else {var key="c";}
	document.getElementById("txtArea").value = text + key;
}


function v (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="V";
    } else if(caps==0 && shift==1) {
        var key="V";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="V";
            shift=0;
        }
    else {var key="v";}
	document.getElementById("txtArea").value = text + key;
}


function b (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="B";
    } else if(caps==0 && shift==1) {
        var key="B";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="B";
            shift=0;
        }
    else {var key="b";}
	document.getElementById("txtArea").value = text + key;
}


function n (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="N";
    } else if(caps==0 && shift==1) {
        var key="N";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="N";
            shift=0;
        }
    else {var key="n";}
	document.getElementById("txtArea").value = text + key;
}


function m (){
    var text = document.getElementById("txtArea").value;
	if (caps==1 && shift==0) {
        var key="M";
    } else if(caps==0 && shift==1) {
        var key="M";
        shift=0;
    }
        else if(caps==1 && shift==1) {
            var key="M";
            shift=0;
        }
    else {var key="m";}
	document.getElementById("txtArea").value = text + key;
}
