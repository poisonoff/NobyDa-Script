/*
Gyroscope unlock pro (Script author: @Maasea )
Surge:
http-response ^https:\/\/api\.gyrosco\.pe\/v1\/account\/$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/poisonoff/Script/master/Mine/Gyroscope%20unlock%20pro.js

QuantumultX:
^https:\/\/api\.gyrosco\.pe\/v1\/account\/$ url script-response-body https://raw.githubusercontent.com/poisonoff/Script/master/Mine/Gyroscope%20unlock%20pro.js

QX & Surge MITM = api.gyrosco.pe
*/

let obj = JSON.parse($response.body);
obj.user["active_until_time"] = "2099-10-04T00:41:36Z";
obj.user["x_active_until_time"]="2099-10-04T00:41:36Z"
$done({body: JSON.stringify(obj)});
