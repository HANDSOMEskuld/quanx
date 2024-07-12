var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
bilibili fan drama open 1080P+

From https://github.com/Sunert/Scripts/blob/master/Script/Bilibili/BiliHD.js

QX:
https:\/\/ap(p|i)\.bilibili\.com\/((pgc\/player\/api\/playurl)|(x\/v2\/account\/myinfo\?)|(x\/v2\/account/mine\?)) url script-response-body BiliHD.js

QX MITM = api.bilibili.com
*/

var body = $response.body;
var url = $request.url;

const path1 = '/pgc/player/api/playurl';
const path2 = "/x/v2/account/myinfo?";
const path3 = "/x/v2/account/mine\?";
if (url.indexOf(path1) != -1) {
    let obj = JSON.parse(body);   
    obj["has_paid"] = true;
	obj["quality"] = obj["accept_quality"][0];
	obj.vip_type = 2;
	obj.vip_status = 1;
 	body = JSON.stringify(obj);  
 };
if (url.indexOf(path2) != -1){
  let obj = JSON.parse(body);
    obj["data"]["vip"]["type"] = 2;
    obj["data"]["vip"]["status"] = 1;
    obj["data"]["vip"]["vip_pay_type"] = 1;
    obj["data"]["vip"]["due_date"] = 1669824160;

   body=JSON.stringify(obj);
 };
   
if (url.indexOf(path3) != -1){
  let obj = JSON.parse(body);
     obj["data"]["vip_type"] = 2;
     obj["data"]["vip"]["type"] = 2;
     obj["data"]["vip"]["status"] = 1;
     obj["data"]["vip"]["vip_pay_type"] = 1;
     obj["data"]["vip"]["due_date"] = 1669824160;
   body=JSON.stringify(obj);
};
   
 $done({body});
 


}
