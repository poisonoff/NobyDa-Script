/******************************

脚本功能：cubox-收藏阅读+解锁VIP
下载地址：http://mtw.so/5IpOxH
软件版本：7.1.1
脚本作者：彭于晏
更新时间：2022-9-19


*******************************

[rewrite_local]

http-response https:\/\/cubox\.pro\/c\/api\/userInfo requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/poisonoff/Script/master/Mine/111.js

[mitm] 

hostname = cubox.pro

*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/userInfo';


if (url.indexOf(vip) != -1) {
    obj.data.level = 1;
    obj.data.expireTime = "2099-09-12T23:50:23+08:00";
    obj.data.nickName = "HighnDry";
    obj.data.thirdNickName = "HighnDry";
    obj.data.isExpire = false;
    obj.data.active = true;
    obj.data.payTime = 1660006006;

	body = JSON.stringify(obj);
}


$done({body});