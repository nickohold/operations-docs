---
id: OnBoarding
title: Integration Spec.
sidebar_label: Onboarding Process
---

<!-- Check the [documentation](https://docusaurus.io) for how to use Docusaurus. -->

## OnBoarding
Please go through the steps below, and if you have any question, please contact your ironsource POC.
<br>The full onboarding process of a new bidder takes up to a week.
<br>
<br>
<br>

Steps | Assignee
----- | --------
<b>Preparation</b>: <br>Send your IronSource POC the following:<br>• Endpoint URL <br>• Location of your DC <br>• Your expiration time (between bid to imp) <br>• Filtering/special requirements you would like to apply to the traffic within the test period. | DSP
<b>Test:</b><br>IronSource will request you to set a test creative with 100% fill-rate. <br>We will then start sending low scale inventory (10 QPS) according to the targeting conditions applies in step 1.<br>* If the bidder does not return an ad, your IronSource POC will send you a request and ask you to check if there’s any parameter we need to change/add to receive a bid.| DSP + IronSource
<b>Compare Discrepancy</b>:<br>ironSource and the DSP will share the number of impressions and revenues counted in the first couple of days. Once numbers align on both ends, we will have a green light to scale QPS. | DSP + IronSource
<b>Scaling Traffic</b>:<br>ironSource will inquire about the full list of countries / Mobile OS’s and QPS limitations to open traffic where you require. | DSP + IronSource


## Bid Request
### 1. Request Object

 
 
Field | Type | Value | Always passed (when available) |  Description
---|---|---|---|---
id | string | - | yes | A ironSource generated id. This id must be returned in the bid response object.
imp | object | - | yes | ironSource supports one impression object per bid request. See Impression.
at | int | 1 or 2 | yes | The auction type used. ironSource supports both first and second price auctions.
app | object | - | no | The app object is used to describe game. See App.
device | object | - | yes | An object describing the device. See Device.
tmax | int | Default: 140 ms | yes | Timeout value in milliseconds (depends on each GEO).
bcat | string array | - | yes | Blocked advertiser categories using the IAB content categories. Refer to List 5.1.
badv | string array | - | no | Block list of advertisers by their domains.
regs | object | - | no | A Regs object (Section 3.2.18) that specifies any industry, legal, or governmental regulations in force for this request.
ext | object | - | yes | Placeholder for exchange-specific extensions to OpenRTB.

### 2. Impression Object


Field | Type | Value | Always passed (when available) |  Description
---|---|---|---|---
id | string | - | yes | ironSource supports a single impression object per Bid Request.
video | object | - | For video only | The object is used to describe a video impression. See video.
banner | object | - | For banner only | The object is used to describe a display impression. See banner.
instl | int | 1 | yes | All placements are Interstitials (=full screen).
secure | int | 1 | yes | ironSource requires the impression to have secure HTTPS URL creative assets and markup.
pmp | object | - | yes | |
Bidfloor | float | - | yes | Minimum bid for this impression expressed in CPM.
bidfloorcur | string | USD | yes | ironSource accepts USD only.
ext | object | - | yes | Placeholder for exchange-specific extensions to OpenRTB.



### 3. Video Object

Field | Type | Value | Always passed (when available) | Description
---|---|---|---|---
mimes | string array | [“video/mp4”] | yes | Content mime types supported.
minduration | int | 1 | yes | Minimum video ad duration in seconds.
maxduration | int | 62 | yes | Maximum video ad duration in seconds.
w | int | - | yes | Width of the video player in device independent pixels (DIPS).
h | int | - | yes | Height of the video player in device independent pixels (DIPS).
pos | int | 7 | yes | ironSource inventory is always set to Full Screen (7).
protocols | int array | 2,3,5,6 | yes | Array of supported video protocols.
placement | int | 5 | Yes | Placement type for the impression.
battr | int array | 3,6,7,8,9,10,14 | yes | Blocked creative attributes, refer to List 5.3
Skip | int | - | Yes | Indicates if the player will allow the video to be skipped.
playbackmethod | int | 5 | Yes | Playback methods that may be in use.



### 4. Banner Object

Field | Type | Value | Always passed (when available) | Description
---|---|---|---|---
w | integer | - | yes | Width in device independent pixels (DIPS).
h | integer | - | yes | Height in device independent pixels (DIPS).
pos | int | 7 | yes | ironSource inventory is always set to Full Screen.
battr | int array | 3,6,7,8,9,10,14 | yes | Blocked creative attributes, refer to List 5.3.
btype | int | - | Yes | Blocked banner ad types.


### 5. App Object

Field | Type | Value | Always passed (when available) | Description
---|---|---|---|---
id | string | - | yes | Exchange specific application id.
bundle | string | - | yes | A platform-specific application identifier intended to be unique to the app and independent of the exchange. On Android, this should be a bundle or package name (e.g., com.foo.mygame). On iOS, it is typically a numeric ID.
name | string | - | no | App name.
storeurl | string | - | no | App store URL for an installed app.
cat | string array | - | no | Array of IAB content categories of the app if requested by partner.



### 6. Device Object


Field | Type | Value | Always passed (when available) | Description
---|---|---|---|---
ifa | string | - | yes | ID sanctioned for advertiser use in the clear (i.e., not hashed).
make | string | - | yes | Device make.
model | string | - | yes | Device model.
ua | string | - | yes | Webview User Agent string.
ip | string | - | yes | Device ip address.
connectiont ype | int | - | no | Network connection type. Refer to List 5.20.
geo | object | - | yes | Location of the device assumed to be the user’s current location. See Geo Object.
devicetype | int | - | yes | The general type of device. Refer to List 5.19.
os | string | - | yes | Device operating system (e.g., “ios”, “android”).
osv | string | - | yes | Device operating system version (e.g., “3.1.2”).


### 7. Geo Object


Field | Type | Value | Always passed (when available) | Description
---|---|---|---|---
lat | float | - | yes | Latitude from -90.0 to +90.0, where negative is south.
lon | float | - | yes | Longitude from -180.0 to +180.0, where negative is west.
ip | string |  | Yes | IPv4 address closest to device.
type | int | 2 | yes | Source of location data; recommended when passing lat/lon.
country | string | - | yes | Country code using ISO-3166-1-alpha-3.
city | string | - | yes | City using United Nations Code for Trade & Transport Locations. See Appendix A for a link to the codes.
ipservice | int | 3 | yes | Service or provider used to determine geolocation from IP address.
metro | string | - | Yes | Google metro code.
zip | string | - | Yes | Zip or postal code.
region | string | - | Yes | Region code using ISO-3166-2; 2-letter state code if USA.
ext | object | - | Yes | Placeholder for exchange-specific extensions to OpenRTB.


### 8. Sample VAST Bid Request

```json
{
    "id": "1543191600023602635_ip-172-31-13-147_ffbff0e0-f110-11e8-97e4-553af9e959cb",
    "imp": [
    {
        "id": "imp_1543191600023602635_ip-172-31-13-147_ffbff0e0-f110-11e8-97e4- 553 af9e959cb ",
        " video ":
        {
            "mimes": ["video/mp4"],
            "minduration": 1,
            "maxduration": 62,
            "protocols": [2, 5, 3, 6],
            "w": 480,
            "h": 320,
            "placement": 5,
            "skip": 0,
            "playbackmethod": [5],
            "pos": 7
        },
        "bidfloor": 37.5,
        "bidfloorcur": "USD",
        "secure": 1,
        "ext":
        {
            "viewabilityvendors": ["moat.com"]
        }
    }],
    "app":
    {
        "id": "com.wb.shadowofwar",
        "name": "Middle-earth: Shadow of War",
        "bundle": "com.wb.shadowofwar",
        "storeurl": "https://play.google.com/store/apps/details?id=com.wb.shadowofwar",
        "cat": ["IAB9"],
        "publisher":
        {
            "id": "155479",
            "name": "Warner Bros."
        }
    },
    "device":
    {
        "ua": "Mozilla/5.0 (Linux; Android 9; Pixel 2 Build/PQ1A.181105.017.A1; wv) AppleWebKit / 537.36(KHTML, like Gecko) Version / 4.0 Chrome / 70.0 .3538 .80 Mobile Safari / 537.36 ",
        "geo":
        {
            "lat": 39.6349,
            "lon": -75.6993,
            "type": 2,
            "ipservice": 3,
            "country": "USA",
            "region": "DE",
            "metro": "504",
            "city": "Newark",
            "zip": "19702"
        },
        "ip": "174.200.31.209",
        "devicetype": 4,
        "make": "Google",
        "model": "Pixel 2",
        "os": "Android",
        "osv": "..0",
        "connectiontype": 3,
        "ifa": "4f6d1ace-92bc-44a8-bef1-f9008299844a"
    },
    "at": 2,
    "bcat": ["IAB11-4", "IAB25-2", "IAB25-3", "IAB25-3", "IAB25-5", "IAB26", "IAB26-1", "IAB26-3", "IAB7-39", "IAB8-18", "IAB8-5", "IAB9-9", "IAB9-7"],
    "badv": ["app.legobatman.com", "scoobydoo.com"]
}
```


### 9. Sample Banner Bid Request
```json
{
    "id": "1543191072421510197_ip-172-31-13-147_c86cb110-f10f-11e8-9624- f927672b827b",
    "imp": [
    {
        "id": "opp_100",
        "banner":
        {
            "w": 320,
            "h": 480,
            "btype": [1, 4],
            "battr": [3, 6, 7, 8, 9, 14, 10],
            "pos": 1,
            "api": [3, 5]
        },
        "instl": 1,
        "bidfloor": 6.6,
        "bidfloorcur": "USD",
        "secure": 1
    }],
    "app":
    {
        "id": "143489",
        "name": "Word Crossy - A crossword game",
        "bundle": "com.fillword.cross.wordmind.en",
        "storeurl": "https://play.google.com/store/apps/details?id=com.fillword.cross.wordmind.en",
        "cat": ["IAB9"],
        "publisher":
        {
            "id": "190949",
            "name": "HONG KONG FOTOABLE TECHNOLOGY LIMITED"
        },
        "keywords": "word crossword"
    },
    "device":
    {
        "ua": "Mozilla/5.0 (Linux; Android 8.0.0; BND-L24 Build/HONORBND-L24; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36",
        "geo":
        {
            "lat": 32.7787,
            "lon": -96.8217,
            "type": 2,
            "ipservice": 3,
            "country": "USA",
            "region": "TX",
            "metro": "623",
            "city": "Dallas",
            "zip": "75270"
        },
        "ip": "107.77.197.194",
        "make": "Generic_Android",
        "model": "BND-L24",
        "os": "Android",
        "osv": "8.0.0",
        "connectiontype": 3,
        "ifa": "25da5cfa-9743-4268-a21e-2374cae1bfa7"
    },
    "user":
    {
        "id": "25da5cfa-9743-4268-a21e-2374cae1bfa7",
        "ext":
        {}
    },
    "tmax": 140,
    "wseat": ["364"],
    "bcat": ["IAB11-4", "IAB25-2", "IAB25-3", "IAB25-3", "IAB25-5", "IAB26", "IAB26-1", "IAB26-3", "IAB7-39", "IAB8-18", "IAB8-5", "IAB9-9", "IAB9-7"],
    "badv": ["randomlogicgames.com", "MatchaSauceLLC.com"]
}
```


### 10. Sample Deal Bid Request
```json
{
    "id": "1543191000285646996_ip-172-31-13-147_9d6733f0-f10f-11e8-92b7- e1f2fd29b805_bidswitch_b",
    "imp": [
    {
        "id": "opp_100",
        "banner":
        {
            "w": 320,
            "h": 480,
            "btype": [1, 4],
            "battr": [3, 6, 7, 8, 9, 14, 10],
            "pos": 1,
            "api": [3, 5]
        },
        "pmp":
        {
            "private_auction": 1,
            "deals": [
            {
                "id": "60109d86c756e1e221b63f423994356c",
                "bidfloor": 1,
                "bidfloorcur": "USD",
                "at": 2,
                "wseat": ["178"]
            }]
        },
        "instl": 1,
        "bidfloor": 0.894,
        "bidfloorcur": "USD",
        "secure": 1
    }],
    "app":
    {
        "id": "174953",
        "name": "My Talking Tom 2",
        "bundle": "com.outfit7.mytalkingtom2",
        "storeurl": "https://play.google.com/store/apps/details?id=com.outfit7.mytalkingtom2",
        "cat": ["IAB9"],
        "publisher":
        {
            "id": "151409",
            "name": "Outfit7 Limited"
        }
    },
    "device":
    {
        "ua": "Mozilla/5.0 (Linux; Android 6.0.1; SM-G532M Build/MMB29T; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.80 Mobile Safari/537.36",
        "geo":
        {
            "lat": -15.1406,
            "lon": -54.195,
            "type": 2,
            "ipservice": 3,
            "country": "BRA",
            "region": "14",
            "metro": "0",
            "zip": "78850"
        },
        "ip": "177.91.236.3",
        "make": "Samsung",
        "model": "SM-G532M",
        "os": "Android",
        "osv": "6.0.1",
        "connectiontype": 2,
        "ifa": "9eed2a3f-2f4f-42d5-8073-f70f9e87586e"
    },
    "user":
    {
        "id": "9eed2a3f-2f4f-42d5-8073-f70f9e87586e",
        "ext":
        {}
    },
    "tmax": 140,
    "wseat": ["364"],
    "bcat": ["IAB11-4", "IAB25-2", "IAB25-3", "IAB25-3", "IAB25-5", "IAB26", "IAB26-1", "IAB26-3", "IAB7-39", "IAB8-18", "IAB8-5", "IAB9-9", "IAB9-7"],
    "badv": ["anastasiadate.com"]
}
```

## Bid Response
After your application receives the bid request to the ironSource dedicated endpoint, your application must return a bid response or indicate a no-bid.
<br>

### 1. Bid Response Object

Field | Type | Value | Requirement | Description
---|---|---|---|---
id | string | - | required | ironSource generated id passed on the bid request, passed back on the Bid Response.
cur | string | USD only | required | ironSource only supports USD, any other ISO currency code will result in the bid response being ignored.
bidid | string | - | recommended | Bidder generated response ID to assist with logging/tracking.
nbr | int | - | recommended | Reason for not bidding. Refer to List 5.22 in OpenRTB 2.3 Spec.
seatbid | object array | - | required | Multiple seatbid objects are allowed in a response, however, ironSource currently only uses one seatbid object.<br><br>The seatbid object chosen will contain:<br>bid.id = impression.id



### 2. Seat Bid Object
Field | Type | Value | Requirement | Description
---|---|---|---|---
bid | object array | - | required | ironSource expects at least ond bid.
seat | string | - | required | Buyers will receive their seat id during the onboarding process.


### 3. Bid Object

Field | Type | Value | Requirement | Description
---|---|---|---|---
id | string | - | required | Bidder generated bid ID to assist with logging/tracking.
impid | string | - | recommended | Id of the impression to which this bid applies. This value will match the impression id provided in the bid request.
price | float | >0 | required | Bid price in CPM. A value that is equal to, or less than zero will be ignored.
nurl | string | - | recommended | Impression/Win notice URL called by ironSource if the bid wins and serves (indicative of a billable ad); replace ${AUCTION_PRICE} macro to pass clear price.
burl | string | - | recommended | Billing notice URL called by the exchange when a winning bid becomes billable based on exchange- specific business policy (e.g., typically delivered, viewed, etc.).
cid | string |  | recommended | Campaign ID to assist with ad quality checking.
crid | string | - | recommended | Creative ID to assist with ad quality checking.
adm | string | - | required | Required means of conveying ad markup in case the bid wins.
adomain | string array | - | required | Advertiser domain for blacklist checking (e.g., “ford.com”). This can be an array of for the case of rotating creatives.
attr | int array | - | recommended | Set of attributes describing the creative. Refer to List 5.3.
w | int | - | required | Width of the creative in device independent pixels (DIPS).
h | int | - | required | Height of the creative in device independent pixels (DIPS).
ext | object | - | - | Placeholder for exchange-specific extensions to OpenRTB.


### 4. Sample Vast Bid Response:

```json
{
    "id": "1543190416705343377_ip-172-31-13-147_41965ed0-f10e-11e8-b7cd- fd40aa7b8b5f",
    "seatbid": [
    {
        "bid": [
        {
            "id": "opp_100",
            "impid": "opp_100",
            "price": 15,
            "adm": "<VASTversion='3.0'><Adid='1d3c1443-07d2-4043-8fc6-45aaccf72beb'><Wrapper><AdSystemversion='1.0'>DEMO</AdSystem><VASTAdTagURI><![CDATA[https://vast.extremereach.io/vast?line_item=14672907&subid1=novpaid&er_ap=0&er_ar=0&ba_cb=[474676]]]></VASTAdTagURI><Error><![CDATA[https://insight.adsrvr.org/enduser/video/?ve=error&vec=[ERRORCODE]&ast=[ASSETURI]&imp=1d3c1443-07d2-4043-8fc6-45aaccf72beb&ag=ehk4pr5&crid=aqgwb3x7&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&sv=ironsource&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&dt=Mobile&osf=iOS&os=iOS112&br=WebView&svpid=37151&rlangs=01&mlang=&did=&rcxt=InApp&tmpc=22.59&vrtd=14,15&osi=&osv=&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&dnr=0&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&npt=&dvps=Medium&mk=Apple&mdl=iPhone&atst=0&sfe=e32b790&vp=0]]></Error><Impression><![CDATA[https://use-tor.adsrvr.org/bid/feedback/ironsource?iid=1d3c1443-07d2-4043-8fc6-45aaccf72beb&crid=aqgwb3x7&wp=${AUCTION_PRICE}&aid=opp_100&wpc=USD&sfe=e32b790&puid=&tdid=&pid=40xae7z&ag=ehk4pr5&sig=LSXFVVRx4AHqO5lNjSV13qG7NrjK7UPj1dKipRdQ8ng.&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&svbttd=1&dt=Mobile&osf=iOS&os=iOS112&br=WebView&rlangs=01&mlang=&svpid=37151&did=&rcxt=InApp&lat=34.011600&lon=-118.341103&tmpc=22.59&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&vp=0&osi=&osv=&bv=1&bp=15&mk=Apple&mdl=iPhone&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&atst=0]]></Impression><Impression><![CDATA[https://tracker.samplicio.us/tracker/aba155f7-de31-4d70-8232-4cfc08f3f9da/pixel.gif?sid=1094930513&pid=6b3gxrn&crid=aqgwb3x7&device_id=b0adb942-77dc-457f-9cb9-45ec7254ca72&cachebuster=453737]]></Impression><Impression><![CDATA[https://pixel.adsafeprotected.com/?anId=923116&advId=2bhpgf0&campId=6b3gxrn&chanId=ehk4pr5&placementId=aqgwb3x7&pubId=&bidurl=1094930513&uId=null&impId=1d3c1443-07d2-4043-8fc6-45aaccf72beb&planId=ironsource&adsafe_par]]></Impression><Creatives><CreativeAdID='aqgwb3x7'><Linear><Icons><Iconprogram='AdChoices' width='77' height='15' xPosition='right' yPosition='bottom'><StaticResource creativeType='image/png'><![CDATA[https://choices.trustarc.com/get?name=admarker-full-tl.png]]></StaticResource><IconClicks><IconClickThrough><![CDATA[https://preferences-mgr.trustarc.com/?pid=tradedesk01&aid=tradedesk01&cid=6b3gxrn_ehk4pr5_aqgwb3x7&width=640&height=480]]></IconClickThrough></IconClicks><IconViewTracking><![CDATA[https://choices-or.trustarc.com/cap?pid=tradedesk01&aid=tradedesk01&cid=6b3gxrn_ehk4pr5_aqgwb3x7&w=640&h=480]]></IconViewTracking></Icon></Icons><TrackingEvents><Trackingevent='creativeView'><![CDATA[https://insight.adsrvr.org/enduser/video/?ve=creativeView&imp=1d3c1443-07d2-4043-8fc6-45aaccf72beb&ag=ehk4pr5&crid=aqgwb3x7&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&sv=ironsource&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&dt=Mobile&osf=iOS&os=iOS112&br=WebView&svpid=37151&rlangs=01&mlang=&did=&rcxt=InApp&tmpc=22.59&vrtd=14,15&osi=&osv=&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&dnr=0&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&npt=&dvps=Medium&mk=Apple&mdl=iPhone&atst=0&sfe=e32b790&vp=0]]></Tracking><Trackingevent='start'><![CDATA[https://insight.adsrvr.org/enduser/video/?ve=start&imp=1d3c1443-07d2-4043-8fc6-45aaccf72beb&ag=ehk4pr5&crid=aqgwb3x7&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&sv=ironsource&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&dt=Mobile&osf=iOS&os=iOS112&br=WebView&svpid=37151&rlangs=01&mlang=&did=&rcxt=InApp&tmpc=22.59&vrtd=14,15&osi=&osv=&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&dnr=0&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&npt=&dvps=Medium&mk=Apple&mdl=iPhone&atst=0&sfe=e32b790&vp=0&ast=[ASSETURI]]]></Tracking><Trackingevent='midpoint'><![CDATA[https://insight.adsrvr.org/enduser/video/?ve=midpoint&imp=1d3c1443-07d2-4043-8fc6-45aaccf72beb&ag=ehk4pr5&crid=aqgwb3x7&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&sv=ironsource&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&dt=Mobile&osf=iOS&os=iOS112&br=WebView&svpid=37151&rlangs=01&mlang=&did=&rcxt=InApp&tmpc=22.59&vrtd=14,15&osi=&osv=&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&dnr=0&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&npt=&dvps=Medium&mk=Apple&mdl=iPhone&atst=0&sfe=e32b790&vp=0]]></Tracking><Trackingevent='firstQuartile'><![CDATA[https://insight.adsrvr.org/enduser/video/?ve=firstQuartile&imp=1d3c1443-07d2-4043-8fc6-45aaccf72beb&ag=ehk4pr5&crid=aqgwb3x7&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&sv=ironsource&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&dt=Mobile&osf=iOS&os=iOS112&br=WebView&svpid=37151&rlangs=01&mlang=&did=&rcxt=InApp&tmpc=22.59&vrtd=14,15&osi=&osv=&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&dnr=0&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&npt=&dvps=Medium&mk=Apple&mdl=iPhone&atst=0&sfe=e32b790&vp=0]]></Tracking><Trackingevent='thirdQuartile'><![CDATA[https://insight.adsrvr.org/enduser/video/?ve=thirdQuartile&imp=1d3c1443-07d2-4043-8fc6-45aaccf72beb&ag=ehk4pr5&crid=aqgwb3x7&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&sv=ironsource&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&dt=Mobile&osf=iOS&os=iOS112&br=WebView&svpid=37151&rlangs=01&mlang=&did=&rcxt=InApp&tmpc=22.59&vrtd=14,15&osi=&osv=&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&dnr=0&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&npt=&dvps=Medium&mk=Apple&mdl=iPhone&atst=0&sfe=e32b790&vp=0]]></Tracking><Trackingevent='complete'><![CDATA[https://insight.adsrvr.org/enduser/video/?ve=complete&imp=1d3c1443-07d2-4043-8fc6-45aaccf72beb&ag=ehk4pr5&crid=aqgwb3x7&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&sv=ironsource&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&dt=Mobile&osf=iOS&os=iOS112&br=WebView&svpid=37151&rlangs=01&mlang=&did=&rcxt=InApp&tmpc=22.59&vrtd=14,15&osi=&osv=&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&dnr=0&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&npt=&dvps=Medium&mk=Apple&mdl=iPhone&atst=0&sfe=e32b790&vp=0]]></Tracking><Trackingevent='mute'><![CDATA[https://insight.adsrvr.org/enduser/video/?ve=mute&imp=1d3c1443-07d2-4043-8fc6-45aaccf72beb&ag=ehk4pr5&crid=aqgwb3x7&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&sv=ironsource&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&dt=Mobile&osf=iOS&os=iOS112&br=WebView&svpid=37151&rlangs=01&mlang=&did=&rcxt=InApp&tmpc=22.59&vrtd=14,15&osi=&osv=&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&dnr=0&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&npt=&dvps=Medium&mk=Apple&mdl=iPhone&atst=0&sfe=e32b790&vp=0]]></Tracking><Trackingevent='unmute'><![CDATA[https://insight.adsrvr.org/enduser/video/?ve=unmute&imp=1d3c1443-07d2-4043-8fc6-45aaccf72beb&ag=ehk4pr5&crid=aqgwb3x7&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&sv=ironsource&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&dt=Mobile&osf=iOS&os=iOS112&br=WebView&svpid=37151&rlangs=01&mlang=&did=&rcxt=InApp&tmpc=22.59&vrtd=14,15&osi=&osv=&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&dnr=0&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&npt=&dvps=Medium&mk=Apple&mdl=iPhone&atst=0&sfe=e32b790&vp=0]]></Tracking><Trackingevent='pause'><![CDATA[https://insight.adsrvr.org/enduser/video/?ve=pause&imp=1d3c1443-07d2-4043-8fc6-45aaccf72beb&ag=ehk4pr5&crid=aqgwb3x7&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&sv=ironsource&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&dt=Mobile&osf=iOS&os=iOS112&br=WebView&svpid=37151&rlangs=01&mlang=&did=&rcxt=InApp&tmpc=22.59&vrtd=14,15&osi=&osv=&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&dnr=0&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&npt=&dvps=Medium&mk=Apple&mdl=iPhone&atst=0&sfe=e32b790&vp=0]]></Tracking><Trackingevent='rewind'><![CDATA[https://insight.adsrvr.org/enduser/video/?ve=rewind&imp=1d3c1443-07d2-4043-8fc6-45aaccf72beb&ag=ehk4pr5&crid=aqgwb3x7&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&sv=ironsource&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&dt=Mobile&osf=iOS&os=iOS112&br=WebView&svpid=37151&rlangs=01&mlang=&did=&rcxt=InApp&tmpc=22.59&vrtd=14,15&osi=&osv=&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&dnr=0&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&npt=&dvps=Medium&mk=Apple&mdl=iPhone&atst=0&sfe=e32b790&vp=0]]></Tracking><Trackingevent='resume'><![CDATA[https://insight.adsrvr.org/enduser/video/?ve=resume&imp=1d3c1443-07d2-4043-8fc6-45aaccf72beb&ag=ehk4pr5&crid=aqgwb3x7&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&sv=ironsource&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&dt=Mobile&osf=iOS&os=iOS112&br=WebView&svpid=37151&rlangs=01&mlang=&did=&rcxt=InApp&tmpc=22.59&vrtd=14,15&osi=&osv=&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&dnr=0&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&npt=&dvps=Medium&mk=Apple&mdl=iPhone&atst=0&sfe=e32b790&vp=0]]></Tracking><Trackingevent='fullscreen'><![CDATA[https://insight.adsrvr.org/enduser/video/?ve=fullscreen&imp=1d3c1443-07d2-4043-8fc6-45aaccf72beb&ag=ehk4pr5&crid=aqgwb3x7&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&sv=ironsource&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&dt=Mobile&osf=iOS&os=iOS112&br=WebView&svpid=37151&rlangs=01&mlang=&did=&rcxt=InApp&tmpc=22.59&vrtd=14,15&osi=&osv=&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&dnr=0&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&npt=&dvps=Medium&mk=Apple&mdl=iPhone&atst=0&sfe=e32b790&vp=0]]></Tracking><Trackingevent='expand'><![CDATA[https://insight.adsrvr.org/enduser/video/?ve=expand&imp=1d3c1443-07d2-4043-8fc6-45aaccf72beb&ag=ehk4pr5&crid=aqgwb3x7&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&sv=ironsource&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&dt=Mobile&osf=iOS&os=iOS112&br=WebView&svpid=37151&rlangs=01&mlang=&did=&rcxt=InApp&tmpc=22.59&vrtd=14,15&osi=&osv=&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&dnr=0&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&npt=&dvps=Medium&mk=Apple&mdl=iPhone&atst=0&sfe=e32b790&vp=0]]></Tracking><Trackingevent='collapse'><![CDATA[https://insight.adsrvr.org/enduser/video/?ve=collapse&imp=1d3c1443-07d2-4043-8fc6-45aaccf72beb&ag=ehk4pr5&crid=aqgwb3x7&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&sv=ironsource&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&dt=Mobile&osf=iOS&os=iOS112&br=WebView&svpid=37151&rlangs=01&mlang=&did=&rcxt=InApp&tmpc=22.59&vrtd=14,15&osi=&osv=&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&dnr=0&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&npt=&dvps=Medium&mk=Apple&mdl=iPhone&atst=0&sfe=e32b790&vp=0]]></Tracking><Trackingevent='acceptInvitation'><![CDATA[https://insight.adsrvr.org/enduser/video/?ve=acceptInvitation&imp=1d3c1443-07d2-4043-8fc6-45aaccf72beb&ag=ehk4pr5&crid=aqgwb3x7&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&sv=ironsource&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&dt=Mobile&osf=iOS&os=iOS112&br=WebView&svpid=37151&rlangs=01&mlang=&did=&rcxt=InApp&tmpc=22.59&vrtd=14,15&osi=&osv=&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&dnr=0&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&npt=&dvps=Medium&mk=Apple&mdl=iPhone&atst=0&sfe=e32b790&vp=0]]></Tracking><Trackingevent='close'><![CDATA[https://insight.adsrvr.org/enduser/video/?ve=close&imp=1d3c1443-07d2-4043-8fc6-45aaccf72beb&ag=ehk4pr5&crid=aqgwb3x7&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&sv=ironsource&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&dt=Mobile&osf=iOS&os=iOS112&br=WebView&svpid=37151&rlangs=01&mlang=&did=&rcxt=InApp&tmpc=22.59&vrtd=14,15&osi=&osv=&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&dnr=0&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&npt=&dvps=Medium&mk=Apple&mdl=iPhone&atst=0&sfe=e32b790&vp=0]]></Tracking><Trackingevent='skip'><![CDATA[https://insight.adsrvr.org/enduser/video/?ve=skip&imp=1d3c1443-07d2-4043-8fc6-45aaccf72beb&ag=ehk4pr5&crid=aqgwb3x7&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&sv=ironsource&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&dt=Mobile&osf=iOS&os=iOS112&br=WebView&svpid=37151&rlangs=01&mlang=&did=&rcxt=InApp&tmpc=22.59&vrtd=14,15&osi=&osv=&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&dnr=0&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&npt=&dvps=Medium&mk=Apple&mdl=iPhone&atst=0&sfe=e32b790&vp=0]]></Tracking><Trackingevent='exitFullscreen'><![CDATA[https://insight.adsrvr.org/enduser/video/?ve=exitfullscreen&imp=1d3c1443-07d2-4043-8fc6-45aaccf72beb&ag=ehk4pr5&crid=aqgwb3x7&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&sv=ironsource&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&dt=Mobile&osf=iOS&os=iOS112&br=WebView&svpid=37151&rlangs=01&mlang=&did=&rcxt=InApp&tmpc=22.59&vrtd=14,15&osi=&osv=&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&dnr=0&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&npt=&dvps=Medium&mk=Apple&mdl=iPhone&atst=0&sfe=e32b790&vp=0]]></Tracking></TrackingEvents><VideoClicks><ClickTracking><![CDATA[https://insight.adsrvr.org/track/clk?imp=1d3c1443-07d2-4043-8fc6-45aaccf72beb&ag=ehk4pr5&sfe=e32b790&sig=LSXFVVRx4AHqO5lNjSV13qG7NrjK7UPj1dKipRdQ8ng.&crid=aqgwb3x7&cf=506427&fq=0&td_s=1094930513&rcats=app-4mg,app-qtf&mcat=&mste=&mfld=2&mssi=None&mfsi=aote4uv89d&sv=ironsource&uhow=16&agsa=&rgco=United%20States&rgre=California&rgme=803&rgci=Los%20Angeles&rgz=90003&dt=Mobile&osf=iOS&os=iOS112&br=WebView&svpid=37151&rlangs=01&mlang=&did=&rcxt=InApp&tmpc=22.59&vrtd=14,15&osi=&osv=&daid=b0adb942-77dc-457f-9cb9-45ec7254ca72&dnr=1&vpb=Undeclared&svsc=AllowEither&dur=Ch8KB3dkeGR3ZDEQrMgDIhAI1bvdXRIJYmsyMDE2b2RjCjAKDGNoYXJnZS1hbGwtMSIgCP___________wESE3R0ZF9kYXRhX2V4Y2x1c2lvbnMKOwoiY2hhcmdlLWFsbEludGVncmFsVmlkZW9CcmFuZFNhZmV0eSIVCOb__________wESCGludGVncmFsEKzIAw..&crrelr=&npt=&dvps=Medium&mk=Apple&mdl=iPhone&atst=0&r=]]></ClickTracking></VideoClicks></Linear></Creative></Creatives></Wrapper></Ad></VAST>",
            "adomain": ["orchardvalleyharvest.com"],
            "cid": "6b3gxrn",
            "crid": "aqgwb3x7"
        }],
        "seat": "2821"
    }],
    "cur": "USD"
}
```


### 7. Sample Banner Bid Response:

```json
{
    "id": "1543190412223390473_ip-172-31-13-147_3eea9fc0-f10e-11e8-9915-1beb61037050",
    "seatbid": [
    {
        "bid": [
        {
            "id": "46-45347979-4f8b-4547-8376-2cea2c3ac12a-1",
            "impid": "opp_100",
            "price": 9.9906,
            "nurl": "https://gce-sc.aaaaaa.net/win_notice/ironsrc_bid?rid=n0c1mL5Fbo89Ly9SqtCooRxa2v_acn6HQGcc1qF pUCKJ41PVtmVVbRDp53nsBtx8OuEs4gjhayBfzEPy_vTS5KxQBAecYiBCG9yUDVn_5OIPNOcjgi C9RNH_l0- DZm8iummH7wz7gRcOVrO8eeIbkv__HAuYhnIoWjLjbE5uHozn5g9qkjoeJMc1ogFwtZyEEgNV fU_8hEh3Pcpr7gZ2VdV_W4bx0494jiy5sS2Jugelr-- wxzVJqlr2Mjoc0Dr5JMkxbJc7U1X8lHz7cGkLyp0O2u6XrwLcv5zTUUHaR4j5- 70zdLZ0b6h9xHxlKkr_gsTgk5C- i6HW3oBBsX7YmbdnKeLwZSps1SR5derRFkSMYiarGGQIL63vS_QsVYMPl1ukEjBA6d9jkC3sy3 Wlfv7CCsz5HThkE6izEa5ndHDZIpD_N7Z5YTaPxirQTv2-7EBpwF4L2SFD9szFbMUq5HehKHdA9z2Afbic3WDv2VsXNUT-qOV8PRyy5uqr6oc7YZ- 1CuWCo_wiTS23NwBRp_qmV5KhhwL- vs01gxiM_a8KD5a7ETouzRlLTmNohSsnBk2pESVkjdGIkd0h85oVNTL72e4Srfzm_W7K_n0kBC KEJWaK2jQNjT23bF8IFx0U7yUkFnbU2x8XTXgwDdVHdGXNedWDrMzmtSDfVUlr8l6vJQhQn MwLPgifMweWliuuSM8nrfXvkkMCAobyzEmDMW6QqRc6g- tjClx4xufFv1y7aYAjQ0PHJWl1PhpxMA35wQ4IXsepIW0KlwV4Qn1UBgiRebsg5AupMJfxG55rv tJb0DN7d5bP3gk0pt_AEdgaPcq2WrCvNFNZaZ8vb7M5D37algOVyFDsTjTSdIlum8TRgYBjO_- HqnZ7Q5sa1KxUy-Q_QFsELQ&p=${AUCTION_PRICE}&aid=",
            "adm": "<script type='text/javascript' src='https://gce-sc.aaaaa.net/imp/${AUCTION_PRICE}/BSWhttps_A_B_Bads.us.criteo.com_Bdelivery_Br_Bajs.php_Cdid_R5bfb378becb1828f6315cbb87206dd00_Jz_R_I_WAUCTION__PRICE_X_Ju_R_U7CzFSJ2zcFmSd5MI6ZExctdUKKfziAYSv5Ux8ZisnlYEo_U3D_U7C_Jumip_R_U7CzFSJ2zcFmSdNnaf3j2hKnmp_U2BwR2MdpkiDiuxRtZPNEE_U3D_U7C_Jc1_RYO3Mzsx-no8gnyqJSTSGulogBpSQiCRN-6YMYiG-es--nz0mpByLlZLZwf__umpss51i6MLpCLpm__039cd-e8AeMF4QQ4KGTn8sVf__F0otJyOlwAEeBedTRPNgddYTGassdlXefBxo__Q2luAJBLeXkFpGVwV-mFmWhy3srZMWA2Vox9Lk5xXezTsIG9a9XAQW6vUnhW6l4nxeutyOq0yewoZZYZn01XjJFilQPvfylqre3vor__Oq8MRiOffe4NuerJvlQrdQXRiGykzbWVVwzRu-vmj9OpZW__QOH8UiyTRdSYlONNXK23yjSMngBMRHU0I69DoAiycsZZ__9jLMXXXtz7UWM__tNzp__7cH8hZXJZhYydVl1sWbrdM48KwBMtVnqateaxmTX-OjDLfms1WLsfc-jAJy0Y3-__-SEPTJFuYcQ_Jct0_R_I_WCLICK__URL_AURLENCODE_X/n0c1mL5Fbo89Ly9SqtCooRxa2v_acn6HQGcc1qFpUCKJ41PVtmVVbRDp53nsBtx8OuEs4gjhayBfzEPy_vTS5KxQBAecYiBCG9yUDVn_5OIPNOcjgiC9RNH_l0-DZm8iummH7wz7gRcOVrO8eeIbkv__HAuYhnIoWjLjbE5uHozn5g9qkjoeJMc1ogFwtZyEEgNVfU_8hEh3Pcpr7gZ2VdV_W4bx0494jiy5sS2Jugelr--wxzVJqlr2Mjoc0Dr5JMkxbJc7U1X8lHz7cGkLyp0O2u6XrwLcv5zTUUHaR4j5-70zdLZ0b6h9xHxlKkr_gsTgk5C-i6HW3oBBsX7YmbdnKeLwZSps1SR5derRFkSMYiarGGQIL63vS_QsVYMPl1ukEjBA6d9jkC3sy3Wlfv7CCsz5HThkE6izEa5ndHDZIpD_N7Z5YTaPxirQTv2-7EBpwF4L2SFD9szFbMUq5HehKHdA9z2Afbic3WDv2VsXNUT-qOV8PRyy5uqr6oc7YZ-1CuWCo_wiTS23NwBRp_qmV5KhhwL-vs01gxiM_a8KD5a7ETouzRlLTmNohSsnBk2pESVkjdGIkd0h85oVNTL72e4Srfzm_W7K_n0kBCKEJWaK2jQNjT23bF8IFx0U7yUkFnbU2x8XTXgwDdVHdGXNedWDrMzmtSDfVUlr8l6vJQhQnMwLPgifMweWliuuSM8nrfXvkkMCAobyzEmDMW6QqRc6g-tjClx4xufFv1y7aYAjQ0PHJWl1PhpxMA35wQ4IXsepIW0KlwV4Qn1UBgiRebsg5AupMJfxG55rvtJb0DN7d5bP3gk0pt_AEdgaPcq2WrCvNFNZaZ8vb7M5D37algOVyFDsTjTSdIlum8TRgYBjO_-HqnZ7Q5sa1KxUy-Q_QFsELQ/${CLICK_URL_ENC}'></script>",
            "adomain": ["journeys.com"],
            "cid": "143354",
            "crid": "46_10304614",
            "dealid": "20135c3f564b7bd7dd138a480427a69f",
            "w": 320,
            "h": 480,
            "ext":
            {
                "agency_name": "Criteo"
            }
        }],
        "seat": "6"
    }],
    "cur": "USD"
}
```



## No Bid Response

Bidders can respond with any of the following that will be considered a 'no bid'' within ironSource. It is important to use any of the following responses to explicitly signal you do not want to bid on the impression, otherwise the response may be interpreted as a timeout error.

<br>
No bid (e.g. no demand, no interest in buying the impression):
* HTTP 204 No Content
* An empty JSON object: "{}"
* A well-formed no bid response (NBR): {"id": "1234567890", "seatbid": []}
<br>
No bid due to an issue:
* A well-formed no bid response: {"id": "1234567890", "seatbid": [], "nbr": 2}
* The list of issue code that can be used for <b>nbr</b> can be found below:

Value | Description
--- | ---
0 | Unknown Error
1 | Technical Error
2 | Invalid Request
3 | Known Web Spider
4 | Suspected Non-Human Traffic
5 | Cloud, Data center, or Proxy IP
6 | Unsupported Device
7 | Blocked Publisher or Site
8 | Unmatched User