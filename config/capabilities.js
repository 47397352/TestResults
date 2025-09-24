module.exports= [
   {
	"browserName": "Chrome",
	"browserVersion":"140.0",
	"LT:Options": {
        'build': 'Playwright Build',
        'name': 'Playwright test for windows chrome',
        'user': process.env.LT_USERNAME,
        'accessKey': process.env.LT_ACCESS_KEY, 
		'network': true, 
		"video": true,
		"platform": "Windows 10",
		"console": true
    } 
},
{
	"browserName": "MicrosoftEdge",
	"browserVersion": "140.0",
	"LT:Options": {
         'build': 'Playwright Build',
        'name': 'Playwright test for mac Os edge',
        'user': process.env.LT_USERNAME,
        'accessKey': process.env.LT_ACCESS_KEY, 
		"video": true,
		"platform": "macOS Sonoma",
		"console": true
	}
}
]