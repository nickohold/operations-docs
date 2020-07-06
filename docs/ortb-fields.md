---
id: ortb-fields
title: IronSource ORTB request/response fields
sidebar_label: IronSource ORTB fields
---

## BidRequest
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
BidRequest | id | 2.0 | Unique ID of the bid request, provided by the exchange. | Yes | 
BidRequest | imp | 2.0 | Array of Imp objects representing the impressions offered. (1 Imp object min.) | Yes | 
BidRequest | site | 2.0 | Details via a Site object about the publisher’s website  | Yes | 
BidRequest | app | 2.0 | Details via an App object about the publisher’s app  | Yes | 
BidRequest | device | 2.0 | Details via a Device object about the user’s device where impression will be delivered. | Yes | 
BidRequest | user | 2.0 | Details via a User object about the human user of the device; the advertising audience. | Yes | 
BidRequest | test | 2.3 | Indicator of test mode in which auctions are not billable[0 = live mode, 1 = test mode] | Yes | 
BidRequest | tmax | 2.0 | Max time in milliseconds the exchange allows for bids to be received including Internet latency to avoid timeout. This value supersedes any a priori guidance from the exchange. | Yes | 
BidRequest | wseat | 2.0 | White list of buyer seats (e.g., advertisers, agencies) allowed to bid on impression. IDs of seats and knowledge of the buyer’s customers to which they refer must be coordinated between bidders and the exchange a priori. At most, only one of wseat and bseat should be used in the same request. Omission of both implies no seat restrictions. | No | 
BidRequest | bseat | 2.5 | Block list of buyer seats (e.g., advertisers, agencies) restricted from bidding on this impression. Guidelines same as wseat above | No | 
BidRequest | allimps | 2.0 | Flag to indicate if Exchange can verify that the impressions offered represent all of the impressions available in context (e.g., all on the web page, all video spots such as pre/mid/post roll) to support road-blocking. 0 = no or unknown, 1 = yes, the impressions offered represent all that are available. |  | 
BidRequest | cur | 2.0 | Array of allowed currencies for bids on this bid request using ISO-4217 alpha codes. (Use if the exchange accepts multiple currencies) |  | 
BidRequest | wlang | 2.5 | White list of languages for creatives using ISO-639-1-alpha-2. Omission implies no specific restrictions, but buyers would be advised to consider language attribute in the Device and/or Content objects if available. |  | 
BidRequest | bcat | 2.0 | Blocked advertiser categories using the IAB content categories. | Yes | 
BidRequest | badv | 2.0 | Block list of advertisers by their domains (e.g., “ford.com”). | Yes | 
BidRequest | bapp | 2.5 | Block list of applications by their platform-specific exchange independent application identifiers. [Android = bundle or package names (e.g., com.foo.mygame)][ iOS= numeric IDs] |  | 
BidRequest | source | 2.5 | A source object that provides data about the inventory source and which entity makes the final decision. | Yes | 
BidRequest | regs | 2.2 | A regs object that specifies any industry, legal, or governmental regulations in force for this request. | Yes | 
BidRequest | ext | 2.0 | Placeholder for exchange-specific extensions to OpenRTB. | Yes | 
BidRequest | ext > schain | 2.0 | OpenRTB SupplyChain object | Yes | 
BidRequest | ext > pchain | 2.0 | Payment ID chain string containing embedded syntax described in the TAG Payment ID Protocol v1.0. | No | 


## Source
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
Source | fd | 2.5 | Entity responsible for the final impression sale decision [0 = exchange, 1 = upstream source] | No | 
Source | tid | 2.5 | Transaction ID that must be common across all participants in this bid request (e.g., potentially multiple exchanges). | No | 
Source | pchain | 2.5 | Payment ID chain string containing embedded syntax described in the TAG Payment ID Protocol v1.0. | Yes | 
Source | ext | 2.5 | Placeholder for exchange-specific extensions to OpenRTB. | Yes | 



## Regs
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
Regs | coppa | 2.3 | Flag indicating if this request is subject to the COPPA regulations established by the USA FTC [0 = no, 1 = yes] | No | 
Regs | ext | 2.3 | Placeholder for exchange-specific extensions to OpenRTB. | Yes | 
Regs | ext > gdpr | 2.3 | Flag indicating whether or not this request falls under GDPR, where 0 = no, 1 = yes. | Yes | 


## Imp
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
Imp | id | 2.0 | A unique identifier for this impression within the context of the bid request (typically, starts with 1 and increments) | Yes | 
Imp | metric | 2.5 | An array of Metric object | No | 
Imp | banner | 2.0 | A Banner object required if this impression is offered as a banner ad opportunity | Yes | 
Imp | video | 2.0 | A Video object required if this impression is offered as a video ad opportunity. | Yes | 
Imp | audio | 2.4 | An Audio object required if this impression is offered as an audio ad opportunity. | No | 
Imp | native | 2.3 | A Native object required if this impression is offered as a native ad opportunity. | No | 
Imp | pmp | 2.2 | A Pmp object containing any private marketplace deals in effect for this impression. | Yes | 
Imp | displaymanager | 2.0 | Name of ad mediation partner, SDK technology, or player responsible for rendering ad (typically video or mobile). Used by some ad servers to customize ad code by partner. Recommended for video and/or apps. | No | 
Imp | displaymanagerver | 2.0 | Version of ad mediation partner, SDK technology, or player responsible for rendering ad (typically video or mobile). Used by some ad servers to customize ad code | No | 
Imp | instl | 2.0 | 1 = the ad is interstitial or full screen, 0 = not interstitial. | Yes | 
Imp | tagid | 2.0 | Identifier for specific ad placement or ad tag that was used to initiate the auction [ Useful for debugging or optimization for buyer] | No | 
Imp | bidfloor | 2.0 | Minimum bid for this impression expressed in CPM. | Yes | 
Imp | bidfloorcur | 2.0 | Currency specified using ISO-4217 alpha codes. This may be different from bid currency returned by bidder if this is allowed by the exchange. | Yes | 
Imp | clickbrowser | 2.4 | Indicates the browser type opened upon clicking the creative in an app [0 = embedded, 1 = native] [Safari View Controller in iOS 9.x devices is considered a native browser here] | No | 
Imp | secure | 2.2 | Flag to indicate if the impression requires secure HTTPS URL creative assets and markup [0 = non-secure, 1 = secure] If omitted, the secure state is unknown, but non-secure HTTP support can be assumed. | Yes | 
Imp | iframebuster | 2.0 | Array of exchange-specific names of supported iframe busters. | No | 
Imp | exp | 2.4 | Advisory as to the number of seconds that may elapse between the auction and the actual impression. | No | 
Imp | ext | 2.0 | Placeholder for exchange-specific extensions to OpenRTB. | Yes | 



## Metric
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
Metric | type | 2.5 | Metric being presented using exchange curated string names which should be published to bidders a priori. | No | 
Metric | value | 2.5 | Number representing the value of the metric. Probabilities must be in the range 0.0 – 1.0. | No | 
Metric | vendor | 2.5 | Source of the value using exchange curated string names which should be published to bidders a priori. If the exchange itself is the source versus a third party, “EXCHANGE” is recommended. | No | 
Metric | ext | 2.5 | Placeholder for exchange-specific extensions to OpenRTB. | No | 



## Banner
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
Banner | format | 2.4 | Array of format objects representing banner sizes permitted. If none specified, then use h and w attributes  |  | 
Banner | w | 2.0 | Exact width in device independent pixels (DIPS); recommended if no format objects are specified. | Yes | 
Banner | h | 2.0 | Exact height in device independent pixels (DIPS); recommended if no format objects are specified. | Yes | 
Banner | wmax | 2.2 | NOTE: Deprecated in favor of the format array. Max width in device independent pixels (DIPS). | No | 
Banner | hmax | 2.2 | NOTE: Deprecated in favor of the format array. Max height in device independent pixels (DIPS) | No | 
Banner | wmin | 2.2 | NOTE: Deprecated in favor of the format array. Min width in device independent pixels (DIPS). | No | 
Banner | hmin | 2.2 | NOTE: Deprecated in favor of the format array. Min height in device independent pixels (DIPS). | No | 
Banner | btype | 2.0 | Blocked banner ad types. | Yes | 
Banner | battr | 2.0 | Blocked creative attributes. | Yes | 
Banner | pos | 2.0 | Ad position on screen. | Yes | 
Banner | mimes | 2.0 | Content MIME types supported. Popular MIME types may include “application/x-shockwave-flash”, “image/jpg”, and “image/gif” | Yes | 
Banner | topframe | 2.0 | Indicates if the banner is in the top frame as opposed to an iframe [where 0 = no, 1 = yes] | No | 
Banner | expdir | 2.0 | Directions in which the banner may expand. | No | 
Banner | api | 2.0 | List of supported API frameworks for this impression. Not listed = Not supported | Yes | 
Banner | id | 2.0 | Unique identifier for this banner object. Recommended when Banner objects are used with a Video object (Section 3.2.7) to represent an array of companion ads. Values usually start at 1 and increase with each object; should be unique within an impression. | No | 
Banner | vcm | 2.5 | Relevant only for Banner objects used with a Video object in an array of companion ads. Indicates companion banner rendering mode relative to the associated video [ 0 = concurrent, 1 = end-card] | No | 
Banner | ext | 2.1 | Placeholder for exchange-specific extensions to OpenRTB. | Yes | 


## Video
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
Video | mimes | 2.0 | Content MIME types supported (e.g., “video/x-ms-wmv”, “video/mp4”). | Yes | 
Video | minduration | 2.0 | Minimum video ad duration in seconds. | Yes | 
Video | maxduration | 2.0 | Maximum video ad duration in seconds. | Yes | 
Video | protocols | 2.2 | Array of supported video protocols. Min one supported protocol must be specified in either the protocol or protocols attribute. | Yes | 
Video | protocol | 2.0 | NOTE: Deprecated in favor of protocols. Supported video protocol. Same guidelines as protocols | No | 
Video | w | 2.0 | Width of the video player in device independent pixels (DIPS) | Yes | 
Video | h | 2.0 | Height of the video player in device independent pixels (DIPS). | Yes | 
Video | startdelay | 2.0 | Indicates the start delay in seconds for pre-roll, mid-roll, or post-roll ad placements\ | No | 
Video | placement | 2.5 | Placement type for the impression. | Yes | 
Video | linearity | 2.0 | Indicates if the impression must be linear, nonlinear, etc. If none specified, assume all are allowed. | No | 
Video | skip | 2.4 | Indicates if the player will allow the video to be skipped [0 = no, 1 = yes] If a bidder sends markup/creative that is itself skippable, the Bid object should include the attr array with an element of 16 indicating skippable video. | Yes | 
Video | skipmin | 2.4 | Videos of total duration greater than this number of seconds can be skippable; only applicable if the ad is skippable. | No | 
Video | skipafter | 2.4 | Number of seconds a video must play before skipping is enabled; only applicable if the ad is skippable. | No | 
Video | sequence | 2.0 | If multiple ad impressions are offered in the same bid request, the sequence number will allow for the coordinated delivery of multiple creatives. | No | 
Video | battr | 2.0 | Blocked creative attributes. | No | 
Video | maxextended | 2.0 | Maximum extended ad duration when allowed. If blank or 0, extension is not allowed. If -1, extension is allowed, and there is no time limit imposed. If greater than 0, then the value represents the number of seconds of extended play supported beyond the maxduration value. | No | 
Video | minbitrate | 2.0 | Minimum bit rate in Kbps. | No | 
Video | maxbitrate | 2.0 | Maximum bit rate in Kbps. | No | 
Video | boxingallowed | 2.0 | Indicates if letter-boxing of 4:3 content into a 16:9 window is allowed, where 0 = no, 1 = yes. | No | 
Video | playbackmethod | 2.0 | Playback methods that may be in use. If none specified, any method may be used. Only one method is typically used in practice so this array may be converted to an integer in a future version of the specification. Strongly advised to use only the first element of this array in preparation for this change. | Yes | 
Video | playbackend | 2.5 | The event that causes playback to end. | No | 
Video | delivery | 2.0 | Supported delivery methods (e.g., streaming, progressive). If none specified, assume all are supported. | No | 
Video | pos | 2.0 | Ad position on screen | Yes | 
Video | companionad | 2.0 | Array of Banner objects if companion ads are available. | No | 
Video | api | 2.0 | List of supported API frameworks for this impression. If an API isn't explicitly listed, it is assumed not to be supported. | No | 
Video | companiontype | 2.1 | Supported VAST companion ad types. Recommended if companion Banner objects are included via the companionad array. If one of these banners will be rendered as an end-card, this can be specified using the vcm attribute with the particular banner | No | 
Video  | ext > viewability | 2.1 | With -1 indicating unknown viewability, and 0-100 (in increments of 10) indicating the percentage of impressions that are in-view for at least 2 seconds. Derived from the previous day's MOAT data on a Channel ID + Host level combination. | No | 
Video | ext > spxplayersize | 2.1 | Relative size of the video player based on width. Measured with SpotX tech, and not declared by publisher. Width less than or equal to 300 (1), Width between 301 pixels and 599 (2), Width greater than or equal to 600 (3), Unknown (0). | No | 
Video | ext > initiationtype | 2.1 | The initiation type of the video player the ad appears in. User Initiated (1), User Click (2), Auto Initiated (3), Mixed (4), and Unknown (0). | No | 


## Audio
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
Audio | mimes | 2.4 | Content MIME types supported (e.g., “audio/mp4”). | No | 
Audio | minduration | 2.4 | Minimum audio ad duration in seconds. | No | 
Audio | maxduration | 2.4 | Maximum audio ad duration in seconds. | No | 
Audio | protocols | 2.4 | Array of supported audio protocols. | No | 
Audio | startdelay | 2.4 | Indicates the start delay in seconds for pre-roll, mid-roll, or post-roll ad placements | No | 
Audio | sequence | 2.4 | If multiple ad impressions are offered in the same bid reques this will allow for the coordinated delivery of multiple creatives. | No | 
Audio | battr | 2.4 | Blocked creative attributes. | No | 
Audio | maxextended | 2.4 | Maximum extended ad duration if extension is allowed. If blank or 0, extension is not allowed. If -1, extension is allowed, and there is no time limit imposed. If greater than 0, then the value represents the number of seconds of extended play supported beyond the maxduration value. | No | 
Audio | minbitrate | 2.4 | Minimum bit rate in Kbps. | No | 
Audio | maxbitrate | 2.4 | Maximum bit rate in Kbps | No | 
Audio | delivery | 2.4 | Supported delivery methods (e.g., streaming, progressive). If none specified, assume all are supported. | No | 
Audio | companionad | 2.4 | Array of Banner objects if companion ads are available | No | 
Audio | api | 2.4 | List of supported API frameworks for this impression. If not explicitly listed, assume its not supported. | No | 
Audio | companiontype | 2.4 | Supported DAAST companion ad types. Recommended if companion Banner objects are included via the companionad array. | No | 
Audio | maxseq | 2.4 | The maximum number of ads that can be played in an ad pod. | No | 
Audio | feed | 2.4 | Type of audio feed. | No | 
Audio | stitched | 2.4 | Indicates if the ad is stitched with audio content or delivered independently [0 = no, 1 = yes] | No | 
Audio | nvol | 2.4 | Volume normalization mode. | No | 
Audio | ext | 2.4 | Placeholder for exchange-specific extensions to OpenRTB. | No | 


## Format
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
Format | w | 2.4 | Width in device independent pixels (DIPS). |  | 
Format | h | 2.4 | Height in device independent pixels (DIPS). |  | 
Format | wratio | 2.5 | Relative width when expressing size as a ratio. |  | 
Format | hratio | 2.5 | Relative height when expressing size as a ratio |  | 
Format | wmin | 2.5 | The minimum width in device independent pixels (DIPS) at which the ad will be displayed the size is expressed as a ratio. |  | 
Format | ext | 2.4 | Placeholder for exchange-specific extensions to OpenRTB. |  | 


## PMP
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
PMP | private_auction | 2.2 | Indicator of auction eligibility to seats named in the Direct Deals object [ 0 = all bids are accepted, 1 = bids] are restricted to the deals specified and the terms thereof. | yes | 
PMP | deals | 2.2 | Array of Deal objects that convey the specific deals applicable to this impression. | yes | 
PMP | ext | 2.2 | Placeholder for exchange-specific extensions to OpenRTB. |  | 


## Deal
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
Deal | id | 2.2 | A unique identifier for the direct deal. | yes | 
Deal | bidfloor | 2.2 | Minimum bid for this impression expressed in CPM. |  | 
Deal | bidfloorcur | 2.2 | Currency specified using ISO-4217 alpha codes. This may be different from bid currency returned by bidder if this is allowed by the exchange. |  | 
Deal | at | 2.2 | Optional override of the overall auction type of the bid request [1 = First Price, 2 = Second Price, 3 = the value passed in bidfloor is the agreed upon deal price] Additional auction types can be defined by the exchange. |  | 
Deal | wseat | 2.2 | Whitelist of buyer seats (e.g., advertisers, agencies) allowed to bid on this deal. IDs of seats and the buyer’s customers to which they refer must be coordinated between bidders and the exchange a priori. Omission implies no seat restrictions. |  | 
Deal | wadomain | 2.2 | Array of advertiser domains (e.g., advertiser.com) allowed to bid on this deal. Omission implies no advertiser restrictions. |  | 
Deal | ext > priority | 2.2 | The priority of an agreed upon deal represented as a 1- 6 integer where 1 is the highest priority and 6 is the lowest priority. |  | 
Deal | ext > guaranteed | 2.2 | 1 indicates that this deal is guaranteed. When a deal is guaranteed, the buyer and seller have pre-negotiated deal terms, and the DSP is expected to not apply any targeting. These deals will always be fixed-price (AT=3). |  | 


## Site
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
Site | id | 2.0 | Exchange-specific site ID. |  | 
Site | name | 2.0 | Site name (may be aliased at the publisher’s request). |  | 
Site | domain | 2.0 | Domain of the site (e.g., “mysite.foo.com”). |  | 
Site | cat | 2.0 | Array of IAB content categories of the site. |  | 
Site | sectioncat | 2.0 | Array of IAB content categories that describe the current section of the site. |  | 
Site | page  | 2.0 | URL of the page where the impression will be shown. | No | 
Site | pagecat | 2.0 | Array of IAB content categories that describe the current page or view of the site. |  | 
Site | ref | 2.0 | Referrer URL that caused navigation to the current page |  | 
Site | search | 2.0 | Search string that caused navigation to the current page |  | 
Site | mobile | 2.3 | Indicates if the site has been programmed to optimize layout when viewed on mobile device [0 = no, 1 = yes] |  | 
Site | privacypolicy | 2.1 | Indicates if the site has a privacy policy [0 = no, 1 = yes] |  | 
Site | publisher | 2.0 | Details about the Publisher of the site. |  | 
Site | content | 2.0 | Details about the Content within the site. |  | 
Site | keywords | 2.0 | Comma separated list of keywords about the site. |  | 
Site | ext > isiframe | 2.1 | Declaration of whether the impression will be served within an iframe. Values: Y = yes, N = no, U = unknown |  | 
Site | ext > channelid | 2.1 | Publisher segmentation ID |  | 


## App
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
App | id | 2.0 | Exchange-specific app ID. | Yes | 
App | name | 2.0 | App name (may be aliased at the publisher’s request | Yes | 
App | bundle | 2.1 | A platform-specific application identifier intended to be unique to the app and independent of the exchange. On Android, this should be a bundle or package name (e.g., com.foo.mygame). On iOS, it is typically a numeric ID | Yes | 
App | domain | 2.0 | Domain of the app (e.g., “mygame.foo.com”). | No | 
App | storeurl | 2.1 | App store URL for an installed app; for IQG 2.1 compliance. | Yes | 
App | cat | 2.0 | Array of IAB content categories of the app. | Yes | 
App | sectioncat | 2.0 | Array of IAB content categories that describe the current section of the app. | No | 
App | pagecat | 2.0 | Array of IAB content categories that describe the current page or view of the app. | No | 
App | ver | 2.0 | Application version. | No | 
App | privacypolicy | 2.0 | Indicates if the app has a privacy policy [0 = no, 1 = yes] | No | 
App | paid | 2.0 | 0 = app is free, 1 = the app is a paid version | No | 
App | publisher | 2.0 | Details about the Publisher of the app | yes | 
App | content | 2.0 | Details about the Content within the app. | No | 
App | keywords | 2.0 | Comma separated list of keywords about the app. | No | 
App | ext > store_foreign_app_id | 2.1 | ID for app stores. |  | 
App | ext > mediarating | 2.1 | The current rating of the app in its corresponding app store. |  | 
App | ext > company_url | 2.1 | URL of the app developer. |  | 
App | ext > channelid | 2.1 | Publisher segmentation ID. |  | 
App | ext > apple_id | 2.1 | App Store ID number for an iOS app. |  | 


## Publisher
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
Publisher | id | 2.0 | Exchange-specific publisher ID. | Yes | 
Publisher | name | 2.0 | Publisher name (may be aliased at the publisher’s request). | Yes | 
Publisher | cat | 2.0 | Array of IAB content categories that describe the publisher. |  | 
Publisher | domain | 2.0 | Highest level domain of the publisher (e.g., “publisher.com”). |  | 
Publisher | ext | 2.1 | Placeholder for exchange-specific extensions to OpenRTB. |  | 



## Content
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
Content | id | 2.0 | ID uniquely identifying the content. |  | 
Content | episode | 2.0 | Episode number. |  | 
Content | title | 2.0 | Content title. | No | 
Content | series | 2.0 | Content series. | No | 
Content | season | 2.0 | Content season. |  | 
Content | artist | 2.4 | Artist credited with the content |  | 
Content | genre | 2.4 | Genre that best describes the content (e.g., rock, pop, etc). |  | 
Content | album | 2.4 | Album to which the content belongs; typically for audio. |  | 
Content | isrc | 2.4 | International Standard Recording Code conforming to ISO3901 |  | 
Content | producer | 2.0 | Details about the content Producer |  | 
Content | url | 2.0 | URL of the content, for buy-side contextualization or review |  | 
Content | cat | 2.0 | Array of IAB content categories that describe the content producer |  | 
Content | prodq | 2.4 | Production quality. |  | 
Content | videoquality | 2.0 | Note: Deprecated in favor of prodq. Video quality. |  | 
Content | context | 2.0 | Type of content (game, video, text, etc.). |  | 
Content | contentrating | 2.0 | Content rating (e.g., MPAA). |  | 
Content | userrating | 2.0 | User rating of the content (e.g., number of stars, likes, etc.). |  | 
Content | qagmediarating | 2.1 | Media rating per IQG guidelines. |  | 
Content | keywords | 2.0 | Comma separated list of keywords describing the content. |  | 
Content | livestream | 2.0 | 0 = not live, 1 = content is live (e.g., stream, live blog) |  | 
Content | sourcerelationship | 2.0 | 0 = indirect, 1 = direct. |  | 
Content | len | 2.0 | Length of content in seconds; appropriate for video or audio. |  | 
Content | language | 2.1 | Content language using ISO-639-1-alpha-2. |  | 
Content | embeddable | 2.1 | Indicator of whether or not the content is embeddable (e.g., an embeddable video player), where 0 = no, 1 = yes. |  | 
Content | data | 2.4 | Additional content data. Each Data object represents a different data source. |  | 
Content | ext | 2.1 | Placeholder for exchange-specific extensions to OpenRTB. |  | 


## Producer
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
Producer | id | 2.0 | Content producer or originator ID. Useful if content is syndicated and may be posted on a site using embed tags. |  | 
Producer | name | 2.0 | Content producer or originator name (e.g., “Warner Bros”). |  | 
Producer | cat | 2.0 | Array of IAB content categories that describe the content producer. |  | 
Producer | domain | 2.0 | Highest level domain of the content producer (e.g., “producer.com”). |  | 
Producer | ext | 2.1 | Placeholder for exchange-specific extensions to OpenRTB. |  | 


## Device
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
Device | ua | 2.0 | Browser user agent string. | Yes | 
Device | Geo | 2 | Location of the device assumed to be the user’s current location defined by a Geo object | Yes | 
Device | genre | 2.2 |  | Yes | 
Device | dnt | 2.0 | Standard “Do Not Track” flag as set in the header by the browser, where 0 = tracking is unrestricted, 1 = do not track. | Yes | 
Device | lmt | 2.3 | “Limit Ad Tracking” signal commercially endorsed (e.g., iOS, Android) [0 = tracking is unrestricted, 1 = tracking must be limited per commercial guidelines] | Yes | 
Device | ip | 2.0 | IPv4 address closest to device | Yes | 
Device | ipv6 | 2.0 | IP address closest to device as IPv6. | Yes | 
Device | devicetype | 2.0 | The general type of device. | Yes | 
Device | make | 2.0 | Device make (e.g., “Apple”). | No | 
Device | model | 2.0 | Device model (e.g., “iPhone”). | No | 
Device | os | 2.0 | Device operating system (e.g., “iOS”). | No | 
Device | osv | 2.0 | Device operating system version (e.g., “3.1.2”). | No | 
Device | hwv | 2.3 | Hardware version of the device (e.g., “5S” for iPhone 5S) | No | 
Device | h | 2.3 | Physical height of the screen in pixels. | Yes | 
Device | w | 2.3 | Physical width of the screen in pixels. | Yes | 
Device | ppi | 2.3 | Screen size as pixels per linear inch. | No | 
Device | pxratio | 2.3 | The ratio of physical pixels to device independent pixels. | Yes | 
Device | js | 2.0 | Support for JavaScript [0 = no, 1 = yes] | Yes | 
Device | geofetch | 2.4 | Indicates if the geolocation API will be available to JavaScript code running in the banner [0 = no, 1 = yes] | Yes | 
Device | flashver | 2.0 | Version of Flash supported by the browser. | Yes | 
Device | language | 2.0 | Browser language using ISO-639-1-alpha-2. | No | 
Device | carrier | 2.0 | Carrier or ISP (e.g., “VERIZON”) using exchange curated string names which should be published to bidders a priori. | No | 
Device | mccmnc | 2.5 | Mobile carrier as the concatenated MCC-MNC code (e.g., “310-005” identifies Verizon Wireless CDMA in the USA). Refer to https://en.wikipedia.org/wiki/Mobile_country_code for further examples. Note that the dash between the MCC and MNC parts is required to remove parsing ambiguity. | No | 
Device | connectiontype | 2.0 | Network connection type. | Yes | 
Device | ifa | 2.2 | ID sanctioned for advertiser use in the clear (i.e., not hashed). | Yes | 
Device | didsha1 | 2.0 | Hardware device ID (e.g., IMEI); hashed via SHA1. | No | 
Device | didmd5 | 2.0 | Hardware device ID (e.g., IMEI); hashed via MD5 | Yes | 
Device | dpidshal | 2.0 | Platform device ID (e.g., Android ID); hashed via SHA1. | Yes | 
Device | dpidmd5 | 2.0 | Platform device ID (e.g., Android ID); hashed via MD5 | Yes | 
Device | macshal | 2.2 | MAC address of the device; hashed via SHA1. | No | 
Device | macmd5 | 2.2 | MAC address of the device; hashed via MD5 | Yes | 
Device | ext | 2.2 | Placeholder for exchange-specific extensions to OpenRTB. | Yes | 
Device | ext> ifa_type | 2.2 | Placeholder for exchange-specific extensions to OpenRTB. | No | 


## Geo
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
Geo | lat | 2.0 | Latitude from -90.0 to +90.0, where negative is south. | No | 
Geo | lon | 2.0 | Longitude from -180.0 to +180.0, where negative is west. | Yes | 
Geo | type | 2.0 | Source of location data; recommended when passing lat/lon. | No | 
Geo | accuracy | 2.4 | Estimated location accuracy in meters; recommended when lat/lon are specified and derived from a device’s location services (i.e., type = 1). Note that this is the accuracy as reported from the device. Consult OS specific documentation (e.g., Android, iOS) for exact interpretation. | No | 
Geo | lastfix | 2.4 | Number of seconds since this geolocation fix was established. Note that devices may cache location data across multiple fetches. Ideally, this value should be from the time the actual fix was taken | Yes | 
Geo | ipservice | 2.4 | Service or provider used to determine geolocation from IP address if applicable (i.e., type = 2). | No | 
Geo | country | 2.0 | Country code using ISO-3166-1-alpha-3 | Yes | 
Geo | region | 2.0 | Region code using ISO-3166-2; 2-letter state code if USA. | Yes | 
Geo | regionfips104 | 2.0 | Region of a country using FIPS 10-4 notation. While OpenRTB supports this attribute, it has been withdrawn by NIST in 2008. | No | 
Geo | metro | 2.0 | Google metro code; similar to but not exactly Nielsen DMAs. | Yes | 
Geo | city | 2.0 | City using United Nations Code for Trade & Transport Locations | No | 
Geo | zip | 2.0 | Zip or postal code | No | 
Geo | utcoffset | 2.3 | Local time as the number +/- of minutes from UTC. | Yes | 
Geo | ext | 2.2 | Placeholder for exchange-specific extensions to OpenRTB. | No | 
Geo | ext > nex_dma | 2.2 | The user's Designated Market Area (DMA) location. Only applicable when the bid request originates from within the United States. | No | 


## User
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
User | id | 2.0 | Exchange-specific ID for the user. At least one of id or buyeruid is recommended. | No | 
User | buyeruid | 2.0 | Buyer-specific ID for the user as mapped by the exchange for the buyer. At least one of buyeruid or id is recommended. | No | 
User | yob | 2.0 | Year of birth as a 4-digit integer | Yes | 
User | gender | 2.0 | Gender, where “M” = male, “F” = female, “O” = known to be other (i.e., omitted is unknown). | Yes | 
User | keywords | 2.0 | Comma separated list of keywords, interests, or intent. | Yes | 
User | customdata | 2.0 | Optional feature to pass bidder data that was set in the exchange’s cookie. The string must be in base85 cookie safe characters and be in any format. Proper JSON encoding must be used to include “escaped” quotation marks. | No | 
User | Geo | 2.0 | Location of the user’s home base defined by a Geo object (not necessarily their current location) | No | 
User | data | 2.0 | Additional user data. Each Data object represents a different data source. | No | 
User | ext > consent | 2.1 | Either integer value (0 = no, 1 = yes, 2 = legitimate interest) indicating if the user has consented to information sharing under GDPR, or a full IAB consent string with vendor specific consent encoded in it. | No | 
User | ext > digitrust | 2.1 | DigiTrust is designed to provide an anonymous, persistent and secure identifier for publishers and trusted third parties on all browser platforms. | Yes | 
User | ext > digitrust > keyv | 2.1 | Key version used to encrypt the id | Yes | 
User | ext > digitrust > id | 2.1 | DigiTrust unique device identifier. The DigiTrust ID is a standardized, privacy-safe, persistent User ID. | Yes | 
User | ext > eids | 2.1 | Extension for Universal IDs. | Yes | 
User | ext > eids > uids | 2.1 | Object containing universal ids. | No | 
User | ext > eids > source | 2.1 | The source of the ids, static as "adserver.org". | No | 
User | ext > eids > auids > id | 2.1 | The audience's id according to The Trade Desk | Yes | 
User | ext > eids > uids > ext | 2.1 | Object containing meta information about the associated id. | No | 
User | ext >eids > uids> ext > rtiPartner | 2.1 | The rtipartner field is used to pass the The Trade Desk Unified ID, a shared ID that companies can use to identify a user. | No | 


## Data
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
Data | id | 2.0 | Exchange-specific ID for the data provider | Yes | 
Data | name | 2.0 | Exchange-specific name for the data provider. | Yes | 
Data | segment | 2.0 | Array of Segment objects that contain the actual data values. | Yes | 
Data | ext | 2.1 | Placeholder for exchange-specific extensions to OpenRTB. | Yes | 


## Segment
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
Segment | id | 2.0 | ID of the data segment specific to the data provider. | Yes | 
Segment | name | 2.0 | Name of the data segment specific to the data provider. | No | 
Segment | value | 2.0 | String representation of the data segment value. | Yes | 
Segment | ext | 2.1 | Placeholder for exchange-specific extensions to OpenRTB. | Yes | 


## Misc.
OBJECT | FIELD | ORTB Version | Field information | Is supported |
---|---|---|---|---
User | ext: GDPR | NOT STANDARD | This field is used to incidate whether or not GDPR is relevant | No | 
User | ext: Consent | NOT STANDARD | This field is used to indicate whether or not a user has consented  | Yes | 