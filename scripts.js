function spoiler(obj)
{
	if(obj.childNodes.length>1)
		{
		for(i=0;i<obj.childNodes.length;i++)
			{
			if (obj.childNodes[i].className == 'spoil_body')
				{
				if (obj.childNodes[i].style.display == 'none')
					obj.childNodes[i].style.display = ''
				else
					obj.childNodes[i].style.display = 'none'
				}
			else if (obj.childNodes[i].className == 'spoil_title')
				{
				if (obj.childNodes[i].style.display == 'none')
					obj.childNodes[i].style.display = ''
				else
					obj.childNodes[i].style.display = 'none'
				}
			}
		}
}

window.onscroll = scroll; //	затычка на 1.0 Strict (не события onScroll)

function scroll()
{
	//if ( document.documentElement.scrollTop <= 200 )
	if ( (self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) <= 200)
		document.getElementById('arrow').style.display = "none";
	else
		document.getElementById('arrow').style.display = "block";
}

function filterClass (clsname) {
	var h='elhide';
	var f=document.getElementById('filter').value;
	var cls=document.getElementsByClassName(clsname);
	var re=new RegExp('(\\s+|^)' + h + '(\\s+|$)', 'ig')
	for(var i=0;i<cls.length; i++) {
		if (hasClass(cls[i],f)) {
			cls[i].className = cls[i].className.replace(re, ' ');
		} else if (!hasClass(cls[i],h)) {
			cls[i].className += ' ' + h;
		};
	};
}
function hasClass(obj, c) {
	var re = new RegExp('(\\s+|^)' + c + '(\\s+|$)', 'ig')
	return (re.test(obj.className))
}

function insertResSearch(clsname) {
	var cls=document.getElementsByClassName(clsname);
	document.getElementById('ressearch').innerHTML=cls.length;
}
