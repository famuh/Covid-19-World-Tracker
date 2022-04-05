
window.setTimeout("waktu()", 1000);
 
	function waktu() {
		var waktu = new Date();
		setTimeout("waktu()", 1000);
        var menit = ""
        if (waktu.getMinutes()<10){
            menit = `0${waktu.getMinutes()}`
        }
        else{
            menit = waktu.getMinutes()
        }
		document.getElementById("jam").innerHTML = waktu.getHours();
		document.getElementById("menit").innerHTML = menit;
		// document.getElementById("detik").innerHTML = waktu.getSeconds();
	}

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 var myDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 var date = new Date();
 var day = date.getDate();
 var month = date.getMonth();
 var thisDay = date.getDay(),
     thisDay = myDays[thisDay];
 var yy = date.getYear();
 var year = (yy < 1000) ? yy + 1900 : yy;
 document.getElementById("hari").innerHTML = `${thisDay},`
 document.getElementById("bulan").innerHTML = months[month]
 document.getElementById("tgl").innerHTML = day
 document.getElementById("tahun").innerHTML = year
 