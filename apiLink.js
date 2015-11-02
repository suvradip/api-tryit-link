var fs = require("fs-extra");

var file = JSON.parse(fs.readFileSync('api-modification.json', 'utf-8'));

var obj = file.classes.FusionCharts.events;
for(var key in obj)
{
	var id  = [];

	try {
	var des =  obj[key].description.match(/.*/i);
	id = obj[key].description.match(/http.*fusioncharts\/(.*)\//i);
	des = des + "\r\r >[__Try it in jsfiddle!__](" + id[0] + "){:target='_blank'}{:rel='nofollow'}";
	des = des + "&nbsp;&nbsp;&nbsp;&nbsp; [__Try it in our Editor !__]({{ site.baseurl }}resources/tryItEditor/" + id[1] + ".html){:class='tryItEditor'} \r\r";
	obj[key].description = des;
	}
	catch(e){ console.log('error HERE');}

}

file.classes.FusionCharts.events= obj;

fs.writeFileSync('new.json', JSON.stringify(file, null, 4));

console.log('Finish !!');	

